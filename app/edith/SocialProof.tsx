"use client";

import { Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric Card */}
        <div className="glass-panel p-6 rounded-xl flex flex-col justify-between min-h-[400px]">
          <div className="space-y-6">
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-medium text-white tracking-tighter">
                99.8
              </span>
              <span className="text-slate-400 text-2xl">%</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Call success rate across all enterprise campaigns. We've automated{" "}
              <span className="text-white font-medium">1M+ minutes</span> of
              conversation.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-700 flex items-center justify-center text-[10px] text-white">
                  A
                </div>
                <div className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-700 flex items-center justify-center text-[10px] text-white">
                  S
                </div>
                <div className="h-8 w-8 rounded-full border border-neutral-800 bg-neutral-700 flex items-center justify-center text-[10px] text-white">
                  M
                </div>
              </div>
              <span className="text-xs text-slate-400 pl-2">
                Active across 50+ industries
              </span>
            </div>
          </div>
          <button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition mt-6">
            Start your campaign
          </button>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-neutral-800 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80')",
              }}
            ></div>
            <div className="">
              <p className="text-sm font-medium text-white">Sarah Chen</p>
              <p className="text-xs text-slate-400">TechFlow Solutions</p>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col justify-between">
            <div className="flex gap-0.5 text-emerald-400 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-lg text-white leading-snug font-medium tracking-tight">
              "EDITH reduced our lead qualification time by 85% and eliminated
              manual dialing completely."
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col justify-between">
            <p className="text-lg text-white leading-snug font-medium tracking-tight">
              "The AI learns our objections and handles interruptions naturally.
              Clients don't know it's a bot."
            </p>
            <div className="flex gap-0.5 text-emerald-400 mt-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-neutral-800 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80')",
              }}
            ></div>
            <div>
              <p className="text-sm font-medium text-white">Marcus Johnson</p>
              <p className="text-xs text-slate-400">Innovate Labs</p>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg bg-neutral-800 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80')",
              }}
            ></div>
            <div>
              <p className="text-sm font-medium text-white">Maya Patel</p>
              <p className="text-xs text-slate-400">Operations Director</p>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-xl flex-1 flex flex-col justify-between">
            <div className="flex gap-0.5 text-emerald-400 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-lg text-white leading-snug font-medium tracking-tight">
              "Seamless integration with our CRM. We launched our first 10k call
              campaign in minutes, not weeks."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
