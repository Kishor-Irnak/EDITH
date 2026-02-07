import {
  Zap,
  ShieldCheck,
  Cpu,
  BarChart,
  Bot,
  Move,
  PhoneCall,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section className="bg-[#020204] py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-6">
            Engineered for conversation.
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400 font-normal md:text-lg">
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
          <FeatureCard
            icon={<Bot className="text-purple-400 w-6 h-6" />}
            title="Contextual Intelligence"
            description="The agent remembers past interactions and can switch topics seamlessly without losing context."
          />
          <FeatureCard
            icon={<Globe className="text-orange-400 w-6 h-6" />}
            title="Multilingual Support"
            description="Speak to customers in their native language with automatic detection and translation on the fly."
          />
          <FeatureCard
            icon={<BarChart className="text-pink-400 w-6 h-6" />}
            title="Real-time Analytics"
            description="Monitor sentiment, conversion rates, and call outcomes in real-time with comprehensive dashboards."
          />
        </div>
      </div>
    </section>
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
    <div className="group p-8 rounded-2xl glass-panel hover:bg-white/[0.02] transition-all duration-300 border border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-sky-500/5">
      <div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-neutral-900/50 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-white group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-400 font-normal group-hover:text-neutral-300 transition-colors">
        {description}
      </p>
    </div>
  );
}
