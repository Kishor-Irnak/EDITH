"use client";

import { useRef, useEffect } from "react";

export function InteractiveCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let chart: any; // Using manual drawing for simplicity to match visual without chart.js dependency if possible, or simple drawing

    // Simple Chart Drawing Logic to mimic the visual
    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Data points logic
    const points: number[] = [];
    const numPoints = 30;
    let y = 50;
    for (let i = 0; i < numPoints; i++) {
      y += (Math.random() - 0.5) * 10;
      y = Math.max(20, Math.min(80, y));
      points.push(y);
    }

    const draw = () => {
      if (!ctx) return;
      // Resize capability
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        width = rect.width;
        height = rect.height;
      }

      ctx.clearRect(0, 0, width, height);

      // Gradient
      const gradient = ctx.createLinearGradient(0, height, 0, 0);
      gradient.addColorStop(0, "rgba(56, 189, 248, 0)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.1)");
      gradient.addColorStop(1, "rgba(56, 189, 248, 0.3)");

      ctx.beginPath();
      const stepX = width / (points.length - 1);

      ctx.moveTo(0, height);
      points.forEach((p, i) => {
        const px = i * stepX;
        const py = height - (p / 100) * height;
        if (i === 0) ctx.lineTo(px, py);
        else {
          // simple smooth
          const prevX = (i - 1) * stepX;
          const prevY = height - (points[i - 1] / 100) * height;
          const cp1x = prevX + (px - prevX) / 2;
          const cp1y = prevY;
          const cp2x = prevX + (px - prevX) / 2;
          const cp2y = py;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
        }
      });
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke
      ctx.beginPath();
      points.forEach((p, i) => {
        const px = i * stepX;
        const py = height - (p / 100) * height;
        if (i === 0) ctx.moveTo(px, py);
        else {
          const prevX = (i - 1) * stepX;
          const prevY = height - (points[i - 1] / 100) * height;
          const cp1x = prevX + (px - prevX) / 2;
          const cp1y = prevY;
          const cp2x = prevX + (px - prevX) / 2;
          const cp2y = py;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
        }
      });
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Animate points slightly
      for (let i = 0; i < points.length; i++) {
        points[i] += (Math.random() - 0.5) * 0.5;
        points[i] = Math.max(20, Math.min(80, points[i]));
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="overflow-hidden z-10 border-white/5 border-t pt-24 pb-24 relative bg-[#020204]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        <h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">
          Keep your sales team focused, effortlessly.
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
          Imagine outreach that’s faster, smoother, and always up to date.
          That’s the scaling experience EDITH is built to deliver.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="hover:bg-slate-200 transition font-medium text-black bg-white rounded-full py-3 px-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Start for free
          </button>
        </div>
      </div>
    </section>
  );
}
