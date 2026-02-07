import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function WorkflowSection() {
  return (
    <section className="py-24 bg-linear-to-b from-[#020204] to-[#0A0A0A] border-t border-white/5 relative overflow-hidden z-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Deploy in minutes, not months.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our visual flow builder and pre-trained templates get you from zero
            to hero faster than any other platform.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent border-t border-dashed border-sky-500/30"></div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative z-10 w-24 h-24 mx-auto rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-300 group-hover:border-sky-500/50">
                <div className="w-16 h-1 bg-linear-to-r from-sky-500 to-indigo-500 rounded-full mb-6"></div>
                <div className="text-4xl font-bold text-sky-500/20 group-hover:text-sky-500 transition-colors">
                  1
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Connect Data
              </h3>
              <p className="text-sm text-slate-400">
                Sync your CRM, knowledge base, and customer lists securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative z-10 w-24 h-24 mx-auto rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-300 group-hover:border-purple-500/50">
                <div className="absolute inset-0 bg-purple-500/5 blur-xl group-hover:opacity-100 transition-opacity opacity-0 rounded-full"></div>
                <div className="text-4xl font-bold text-purple-500/20 group-hover:text-purple-500 transition-colors">
                  2
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Configure Agent
              </h3>
              <p className="text-sm text-slate-400">
                Define personality, voice, and conversation flows visually.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative z-10 w-24 h-24 mx-auto rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:scale-105 transition-transform duration-300 group-hover:border-emerald-500/50">
                <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:opacity-100 transition-opacity opacity-0 rounded-full"></div>
                <div className="text-4xl font-bold text-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                  3
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">Go Live</h3>
              <p className="text-sm text-slate-400">
                Launch campaigns instantly or handle inbound calls 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
