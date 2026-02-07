"use client";

import { ArrowRight, Play } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020204] to-[#0A0A0A] border-t border-white/5 relative overflow-hidden text-center z-10 w-full mb-20">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-sky-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 pb-40">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-8">
          You won't believe it's AI.
          <br />
          <span className="text-slate-400">Try it yourself.</span>
        </h2>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Experience the future of outbound sales. No credit card required for
          demo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            className="shiny-cta focus:outline-none grayscale saturate-0"
            style={{
              maskImage:
                "linear-gradient(100deg, transparent, black 0%, black 100%, transparent)",
              WebkitMaskImage:
                "linear-gradient(100deg, transparent, black 0%, black 100%, transparent)",
            }}
          >
            <span>
              Start Free Trial
              <ArrowRight className="w-[18px] h-[18px] text-white/90" />
            </span>
          </button>
          <button className="px-8 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 flex items-center gap-2">
            <Play className="w-4 h-4" />
            See Pricing
          </button>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute bottom-[0] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/10 blur-[120px] rounded-full pointing-events-none z-0"></div>
    </section>
  );
}
