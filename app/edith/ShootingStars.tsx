"use client";

import { useEffect, useRef } from "react";

export function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createShootingStar = () => {
      if (!container) return;

      const star = document.createElement("div");
      star.className = "shooting-star";
      star.style.left = `${Math.random() * window.innerWidth + 200}px`;
      star.style.top = `${Math.random() * (window.innerHeight / 2) - 200}px`;
      // We need to ensure the animation works. Accessing the global keyframe 'shoot'.
      // It is defined in edith.css which is imported in page.tsx
      star.style.animation = `shoot ${Math.random() * 0.5 + 1.5}s linear forwards`;

      container.appendChild(star);

      setTimeout(() => {
        if (star.parentNode === container) {
          star.remove();
        }
      }, 2000);
    };

    const scheduleShootingStar = () => {
      const timeout = setTimeout(
        () => {
          createShootingStar();
          scheduleShootingStar();
        },
        Math.random() * 3000 + 2000,
      ); // slightly faster than original
      return timeout;
    };

    const timeoutId = scheduleShootingStar();

    return () => {
      clearTimeout(timeoutId);
      // Optional: cleanup stars?
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden"
    />
  );
}
