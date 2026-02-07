"use client";

import { Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-[#020204] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Traditional */}
        <div className="space-y-8 relative">
          <div className="absolute -left-20 top-0 w-96 h-96 bg-red-500/5 blur-[100px] rounded-full pointing-events-none"></div>

          <h3 className="text-2xl font-medium text-slate-500 mb-8">
            Traditional Call Centers
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start gap-4 opacity-50">
              <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                <span className="text-xs">✕</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">
                  High CAC & Setup Costs
                </h4>
                <p className="text-sm text-slate-500">
                  Requires hiring, training, and office space.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 opacity-50">
              <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                <span className="text-xs">✕</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">
                  Limited Availability
                </h4>
                <p className="text-sm text-slate-500">
                  9-to-5 hours, weekends off, missed leads.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 opacity-50">
              <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                <span className="text-xs">✕</span>
              </div>
              <div>
                <h4 className="font-medium text-slate-300">
                  Inconsistent Quality
                </h4>
                <p className="text-sm text-slate-500">
                  Dependent on mood, training, and turnover.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side: EDITH */}
        <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-sky-500/5 blur-3xl"></div>

          <h3 className="text-3xl font-semibold text-white mb-8 relative z-10">
            <span className="text-sky-400">EDITH</span> AI Agent
          </h3>

          <ul className="space-y-6 relative z-10">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-sky-500/30">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-medium text-white">90% Cost Reduction</h4>
                <p className="text-sm text-slate-400">
                  Scale up or down instantly. Pay for usage only.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-sky-500/30">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-medium text-white">24/7/365 Conversions</h4>
                <p className="text-sm text-slate-400">
                  Never miss a lead. Instant response times.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-sky-500/30">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-medium text-white">
                  Prefect Pitch Every Time
                </h4>
                <p className="text-sm text-slate-400">
                  Always on script, always polite, always closing.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-white/10">
            <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
              Switch to AI Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
