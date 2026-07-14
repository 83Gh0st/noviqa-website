import { ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "We adhere to all applicable laws and regulations related to data protection and business conduct.",
  "We maintain strict confidentiality and data security standards throughout every engagement.",
  "We operate within clear ethical and professional boundaries to protect your brand and customer relationships.",
];

export default function Compliance() {
  return (
    <section className="bg-ivory py-16 sm:py-24 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-dim">
              Compliance &amp; confidentiality
            </span>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.4rem] md:leading-tight text-navy text-balance">
              A boundary we don't cross
            </h2>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="flex gap-4 p-7 bg-paper border border-navy/15 rounded-sm">
                <ShieldCheck className="w-7 h-7 text-emerald-dim shrink-0" strokeWidth={1.5} />
                <p className="text-navy font-display text-lg md:text-xl leading-snug">
                  We do not hold client payment at any stage.
                </p>
              </div>
            </Reveal>
            <div className="mt-8 space-y-5">
              {points.map((point, i) => (
                <Reveal key={point} delay={0.15 + i * 0.08}>
                  <p className="text-ink-soft leading-relaxed border-l-2 border-navy/10 pl-5">
                    {point}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
