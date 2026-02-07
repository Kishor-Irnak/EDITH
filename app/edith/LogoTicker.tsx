"use client";

import { useEffect, useRef } from "react";

const logos = [
  {
    name: "Vercel",
    src: "https://assets.vercel.com/image/upload/v1538361091/repositories/vercel/logo.png",
  },
  {
    name: "Sentry",
    src: "https://assets-global.website-files.com/5d5e2e505a415a25427513cc/5d5e2e8e5a415a5e3f75150e_sentry-logo-white.svg",
  },
  { name: "Supabase", src: "https://supaship.io/supaship_logo_with_text.svg" },
  {
    name: "Linear",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Linear_logo.svg",
  },
  {
    name: "Raycast",
    src: "https://www.raycast.com/_next/static/media/raycast-logo-beta.99421f66.svg",
  },
  {
    name: "Clerk",
    src: "https://clerk.com/_next/image?url=%2Fimages%2Fclerk-logo-white.svg&w=3840&q=75",
  },
];

export function LogoTicker() {
  return (
    <section className="border-t border-white/5 bg-[#020204] py-10 overflow-hidden relative z-10">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-slate-500">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="flex overflow-hidden group mask-linear-gradient">
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-4">
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="h-8 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Using text specific placeholders for now if images fail or generally for cleaner look if no SVGs match */}
              <span className="text-xl font-bold text-white/50">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
