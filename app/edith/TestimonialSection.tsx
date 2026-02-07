"use client";

const avatars = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&q=80",
];

export function TestimonialSection() {
  return (
    <section className="py-32 bg-[#020204] border-t border-white/5 relative overflow-hidden text-center z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-sky-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-12 flex justify-center -space-x-4">
          {avatars.map((src, i) => (
            <div
              key={i}
              className="relative w-12 h-12 rounded-full border-2 border-[#020204] overflow-hidden group hover:scale-110 transition-transform duration-300 hover:z-20"
            >
              <img
                src={src}
                alt={`User ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-[#020204] bg-neutral-800 flex items-center justify-center text-xs font-bold text-white z-10">
            +5k
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
          "This isn't just software.
          <br />
          It's a complete shift in how we sell."
        </h2>

        <div className="bg-white/5 inline-flex items-center gap-4 rounded-full py-2 px-4 border border-white/10 backdrop-blur-md">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500"></div>
          <div className="text-left text-sm leading-tight">
            <div className="text-white font-medium">Alex Rivera</div>
            <div className="text-slate-500">VP of Sales @ TechFlow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
