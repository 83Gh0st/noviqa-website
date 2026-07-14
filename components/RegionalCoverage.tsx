import Reveal from "./Reveal";

// Flags are self-hosted SVGs from the "flag-icons" package (MIT licensed,
// https://github.com/lipis/flag-icons) — copied into /public/flags rather
// than pulled in as a runtime dependency, since only these six are needed.
const markets = [
  { code: "ae", name: "United Arab Emirates", home: true },
  { code: "sa", name: "Saudi Arabia" },
  { code: "qa", name: "Qatar" },
  { code: "bh", name: "Bahrain" },
  { code: "kw", name: "Kuwait" },
  { code: "om", name: "Oman" },
];

export default function RegionalCoverage() {
  return (
    <section className="relative bg-navy-deep border-t border-white/10">
      <div className="max-w-content mx-auto px-6 md:px-10 py-12 sm:py-14">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-12">
            <div className="lg:w-[280px] shrink-0">
              <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-bright">
                Regional coverage
              </span>
              <p className="mt-3 text-mist leading-relaxed text-[0.9rem] sm:text-[0.95rem] max-w-sm">
                Based in Dubai, Noviqa coordinates receivables recovery,
                claims, and legal follow-up for businesses across all six
                GCC markets.
              </p>
            </div>

            <div className="flex-1 lg:pl-12 lg:border-l border-white/10">
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {markets.map((m) => (
                  <div
                    key={m.code}
                    className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] pl-2 pr-4 py-1.5 transition-colors hover:border-emerald-bright/40 hover:bg-white/[0.06]"
                  >
                    <span className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0">
                      <img
                        src={`/flags/${m.code}.svg`}
                        alt={`${m.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span className="font-display text-[0.85rem] sm:text-[0.9rem] text-ivory">
                      {m.name}
                    </span>
                    {m.home && (
                      <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-emerald-bright border-l border-white/15 pl-2.5">
                        HQ
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}