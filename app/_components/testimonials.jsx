const testimonials = [
  {
    name: "Mc Aveli",
    role: "CTO, Maisomo",
    quote:
      "NextTab's innovative solutions have revolutionised our operations. Their expertise and dedication are unmatched.",
  },
  {
    name: "Elijah Mwanzia",
    role: "Founder, Pydev",
    quote:
      "Working with NextTab was a game-changer for our startup. They delivered beyond our expectations.",
  },
  {
    name: "Stanley Dzombo",
    role: "Director of IT, Easeride",
    quote:
      "The team at NextTab consistently delivers high-quality, scalable solutions that drive our business forward.",
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-canvas-soft py-24 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="font-mono text-xs text-mute mb-5">{"// Trusted by builders"}</p>
        <h2
          className="text-[32px] font-semibold text-ink leading-10 mb-12"
          style={{ letterSpacing: "-1.28px" }}
        >
          Trusted by businesses across industries.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-canvas border border-hairline rounded-[8px] p-6 flex flex-col gap-5"
              style={{
                boxShadow: "0px_2px_2px_#0000000a, 0px_8px_8px_-8px_#0000000a",
              }}
            >
              {/* Quote marks */}
              <span className="text-2xl text-hairline-strong leading-none select-none">&ldquo;</span>
              <p className="text-sm text-body leading-5 flex-1">{t.quote}</p>
              <div className="pt-4 border-t border-hairline flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-canvas-soft-2 border border-hairline flex items-center justify-center text-xs font-semibold text-body shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-mute">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
