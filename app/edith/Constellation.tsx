"use client";

import { useEffect, useRef } from "react";

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = { x: -1000, y: -1000 };
    const STAR_COUNT = 120;
    const CONNECTION_DISTANCE = 120;
    const MOUSE_DISTANCE = 180;
    const STAR_SPEED = 0.3;

    class Star {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * STAR_SPEED;
        this.vy = (Math.random() - 0.5) * STAR_SPEED;
        this.size = Math.random() * 1.5 + 0.5;
        this.baseAlpha = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    let stars: Star[] = [];
    let animationFrameId: number;

    const initStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push(new Star());
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Draw connections
      for (let i = 0; i < stars.length; i++) {
        const starA = stars[i];

        // Mouse connection
        const distMouse = Math.hypot(starA.x - mouse.x, starA.y - mouse.y);
        if (distMouse < MOUSE_DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(starA.x, starA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${
            0.4 * (1 - distMouse / MOUSE_DISTANCE)
          })`;
          ctx.lineWidth = 0.5;
          ctx.stroke();

          // Star connections (only if near mouse)
          for (let j = i + 1; j < stars.length; j++) {
            const starB = stars[j];
            const distStars = Math.hypot(starA.x - starB.x, starA.y - starB.y);

            if (distStars < CONNECTION_DISTANCE) {
              ctx.beginPath();
              ctx.moveTo(starA.x, starA.y);
              ctx.lineTo(starB.x, starB.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${
                (1 - distStars / CONNECTION_DISTANCE) *
                (1 - distMouse / MOUSE_DISTANCE) *
                0.4
              })`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-20 pointer-events-none"
    />
  );
}
