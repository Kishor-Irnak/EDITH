import Link from "next/link";
import {
  Sparkles,
  Share,
  Box,
  RotateCcw,
  MoreVertical,
  Zap,
  ShieldCheck,
  Cpu,
  Play,
  ArrowRight,
  PhoneCall,
  Bot,
} from "lucide-react";

import { Constellation } from "./edith/Constellation";
import { ShootingStars } from "./edith/ShootingStars";
import { SocialProof } from "./edith/SocialProof";
import { InteractiveCTA } from "./edith/InteractiveCTA";

export default function EdithLandingPage() {
  return (
    <div className="antialiased selection:bg-sky-500 selection:text-white overflow-x-hidden min-h-screen text-neutral-300 bg-[#020204] relative font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#020204]/50 to-[#020204]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] mix-blend-screen z-10 bg-sky-900/10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] mix-blend-screen z-10 bg-indigo-900/10"></div>
        <Constellation />
        <ShootingStars />
      </div>

      {/* Navigation */}
      <nav className="fixed z-50 bg-[#020204]/80 opacity-90 w-full border-white/5 border-b top-0 backdrop-blur-lg">
        <div className="flex h-14 max-w-6xl mx-auto px-6 gap-3 items-center justify-between">
          <div className="flex gap-3 cursor-pointer select-none items-center">
            {/* Logo */}
            <div className="relative flex gap-2.5 cursor-pointer group select-none h-[28px] items-center text-white font-bold text-xl tracking-tight">
              <Bot className="w-6 h-6 text-sky-500" />
              EDITH
            </div>
          </div>

          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="#"
              className="text-xs font-medium transition-colors hover:text-white"
            >
              Product
            </Link>
            <Link
              href="#"
              className="text-xs font-medium transition-colors hover:text-white"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-xs font-medium transition-colors hover:text-white"
            >
              Enterprise
            </Link>
            <Link
              href="#"
              className="text-xs font-medium transition-colors hover:text-white"
            >
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <Link href="#" className="figma-btn font-mono">
              Log in
            </Link>
            <Link href="#" className="figma-btn font-mono">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="relative z-10 pt-20">
        <section className="z-10 relative">
          <div className="md:px-6 md:pt-16 max-w-7xl mx-auto pt-10 px-4 pb-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <Sparkles className="text-sky-400 w-4 h-4" />
                New: AI calling engine v2.0
              </p>
              <h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold text-white tracking-tight leading-[1.1]">
                D2C First.
                <br />
                <span className="text-sky-500">AI Calling.</span>
              </h1>
              <p className="md:text-lg leading-relaxed text-base text-slate-400 mt-6 max-w-2xl mx-auto">
                An AI-native calling agent that gives you an unfair advantage.
                Generate leads, support customers, and close deals with
                human-like voice conversations.
              </p>

              <div className="flex flex-col sm:flex-row mt-10 gap-4 items-center justify-center">
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
                    Get started for free
                    <ArrowRight className="w-[18px] h-[18px] text-white/90" />
                  </span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-black object-cover bg-neutral-800"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80"
                    alt="User"
                  />
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-black object-cover bg-neutral-800"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80"
                    alt="User"
                  />
                  <img
                    className="h-8 w-8 rounded-full ring-2 ring-black object-cover bg-neutral-800"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&q=80"
                    alt="User"
                  />
                </div>
                <span>Trusted by 500+ modern teams</span>
              </div>
            </div>
          </div>

          {/* Editor/Dashboard Preview */}
          <div className="-mb-8 md:px-6 max-w-7xl mx-auto px-4 mt-10">
            <div className="relative w-full overflow-hidden shadow-2xl bg-[#0A0A0A] border-white/10 border rounded-2xl mx-auto backdrop-blur-xl ring-1 ring-white/10">
              {/* Topbar */}
              <div className="flex border-white/10 border-b py-3 px-4 items-center justify-between bg-black/40">
                <div className="flex gap-2 items-center">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
                  <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                  <div className="ml-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 font-mono">
                    <PhoneCall className="w-3 h-3 text-sky-500" />
                    EDITH Studio — Project: Outbound Campaign
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-md hover:bg-white/10 text-slate-400 transition-colors">
                    <Share className="w-4 h-4" />
                  </button>
                  <button className="px-3 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium transition-colors">
                    Deploy Agent
                  </button>
                </div>
              </div>

              {/* Editor Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] bg-[#050505]">
                {/* Left Outline Panel */}
                <aside className="hidden md:block md:col-span-2 border-r border-white/10 bg-black/20 p-3">
                  <div className="mb-4 flex items-center justify-between px-1">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Flow
                    </span>
                  </div>
                  <div className="space-y-1">
                    {[
                      "Greeting",
                      "Qualification",
                      "Objection Handling",
                      "Closing",
                      "Voicemail Drop",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium cursor-pointer ${i === 1 ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" : "text-slate-400 hover:bg-white/5 hover:text-slate-200"}`}
                      >
                        <Box className="w-3.5 h-3.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>

                {/* Main Canvas (Flow Builder) */}
                <main className="md:col-span-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[20px_20px] opacity-20"></div>

                  {/* Flow Nodes Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-2xl max-h-[400px]">
                      {/* Connecting Line */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <path
                          d="M320 100 C 320 200, 320 200, 320 300"
                          stroke="#334155"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,5"
                        />
                        <path
                          d="M320 100 C 400 100, 450 150, 500 200"
                          stroke="#334155"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>

                      {/* Node 1 */}
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#0A0A0A] border border-sky-500/30 rounded-xl p-4 shadow-xl shadow-sky-900/10 z-10 hover:border-sky-500/60 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            <span className="text-xs font-semibold text-white">
                              Start Call
                            </span>
                          </div>
                          <MoreVertical className="w-3 h-3 text-slate-500" />
                        </div>
                        <div className="text-[11px] text-slate-400 bg-white/5 p-2 rounded border border-white/5 font-mono">
                          "Hello, this is [Agent_Name] calling from EDITH..."
                        </div>
                      </div>

                      {/* Node 2 */}
                      <div className="absolute top-72 left-1/2 -translate-x-1/2 w-64 bg-[#0A0A0A] border border-white/10 rounded-xl p-4 shadow-xl z-10 hover:border-white/20 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                            <span className="text-xs font-semibold text-white">
                              Qualification
                            </span>
                          </div>
                        </div>
                        <div className="text-[11px] text-slate-400 bg-white/5 p-2 rounded border border-white/5 font-mono">
                          Analyze intent used: [purchase_intent]
                        </div>
                      </div>

                      {/* Cursor */}
                      <div className="absolute top-40 left-[60%] pointer-events-none z-20 animate-pulse">
                        <div className="relative">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="drop-shadow-lg"
                          >
                            <path
                              d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                              fill="#F97316"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <div className="absolute left-3 top-4 whitespace-nowrap rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm ring-2 ring-black/50">
                            Sara (Sales)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Controls */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-2xl">
                    <button className="p-2 hover:bg-white/10 rounded-full text-slate-400 transition-colors">
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-1"></div>
                    <button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
                      <Play className="w-4 h-4 fill-white" />
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-1"></div>
                    <span className="text-xs font-mono text-sky-400 px-2">
                      00:12 / 02:30
                    </span>
                  </div>
                </main>

                {/* Right Properties Panel */}
                <aside className="hidden md:block md:col-span-2 border-l border-white/10 bg-black/20 p-3">
                  <div className="mb-4 px-1">
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Properties
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-300">Voice ID</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/40 p-2 rounded border border-white/10">
                        <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                        <span className="text-xs text-white">Rachel (US)</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-300">Latency</span>
                      </div>
                      <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                      </div>
                      <div className="mt-1 flex justify-between text-[10px] text-slate-500 font-mono">
                        <span>~400ms</span>
                        <span>Ultra-Low</span>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-slate-300">
                          Sentiment
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex-1 h-8 rounded bg-green-500/20 border border-green-500/30 flex items-center justify-center text-[10px] text-green-400">
                          Pos
                        </div>
                        <div className="flex-1 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">
                          Neu
                        </div>
                        <div className="flex-1 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500">
                          Neg
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            {/* Mobile Preview Overlay */}
            <div className="pointer-events-none absolute -bottom-6 right-10 hidden w-64 rounded-xl border border-white/10 bg-black/60 p-2 backdrop-blur-xl lg:block shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 z-20">
              <div className="rounded-lg border border-white/10 bg-black/80 overflow-hidden relative">
                <div className="aspect-9/16 bg-[#0A0A0A] p-4 flex flex-col items-center pt-10">
                  {/* Fake Phone UI */}
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-500 to-indigo-600 mb-4 animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.4)]"></div>
                  <div className="text-white font-medium mb-1">
                    Incoming Call...
                  </div>
                  <div className="text-slate-500 text-xs mb-8">
                    EDITH Assistant
                  </div>

                  <div className="w-full flex justify-between px-4 mt-auto mb-8">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 border border-red-500/30">
                      <PhoneCall className="w-5 h-5 rotate-135" />
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5 relative z-10">
        <div className="mb-16">
          <h2 className="md:text-3xl text-2xl font-medium text-white tracking-tighter mb-4">
            Engineered for control.
          </h2>
          <p className="max-w-xl text-neutral-400 font-normal">
            We've stripped away the complexity to give you raw, unfiltered
            access to the world's most capable voice AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Zap className="text-sky-400 w-6 h-6" />}
            title="Instant Call Launch"
            description="Trigger thousands of calls simultaneously with our globally distributed edge network. Zero latency buildup."
          />
          <FeatureCard
            icon={<ShieldCheck className="text-emerald-400 w-6 h-6" />}
            title="Enterprise Privacy"
            description="Your conversation data is encrypted at rest and in transit. SOC2 compliant and hipaa ready."
          />
          <FeatureCard
            icon={<Cpu className="text-blue-400 w-6 h-6" />}
            title="Neural Voice Engine"
            description="Proprietary voice synthesis that captures emotional nuance, interruptions, and pacing like a human."
          />
        </div>
      </section>

      {/* Social Proof Section (Bento Grid) */}
      <SocialProof />

      {/* Interactive CTA Section */}
      <InteractiveCTA />

      {/* Footer */}
      <footer className="border-t bg-[#020204] pt-20 pb-10 relative z-10 border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Bot className="w-5 h-5 text-sky-500" />
                <span className="text-sm font-bold text-white tracking-wide">
                  EDITH
                </span>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                Redefining human-AI communication. <br />
                Built for scale.
              </p>
            </div>
            {["Product", "Company", "Social"].map((section, idx) => (
              <div key={section}>
                <h4 className="text-xs font-semibold mb-6 text-white uppercase tracking-wider">
                  {section}
                </h4>
                <ul className="space-y-4 text-xs text-neutral-500 font-normal">
                  {[1, 2, 3, 4].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="transition-colors hover:text-white"
                      >
                        {["Changelog", "About", "Twitter"][idx] ||
                          "Link " + item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
            <div className="text-[10px] text-neutral-600">
              © 2024 Edith AI Inc. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-[10px] text-neutral-600 hover:text-neutral-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[10px] text-neutral-600 hover:text-neutral-400"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 rounded-2xl glass-panel hover:bg-white/[0.02] transition-all duration-300 border border-white/5 hover:border-white/10">
      <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-neutral-900/50 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-400 font-normal">
        {description}
      </p>
    </div>
  );
}
