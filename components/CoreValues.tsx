import { ShieldCheck, Lock, BadgeCheck, Users, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "We operate with honesty, transparency, and strong ethical standards.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "We safeguard our clients' information with the highest level of confidentiality.",
  },
  {
    icon: BadgeCheck,
    title: "Accountability",
    description: "We take ownership of our responsibilities and deliver on our commitments.",
  },
  {
    icon: Users,
    title: "Relationships",
    description: "We believe in preserving and strengthening business relationships.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We continuously improve our processes and deliver quality in everything we do.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-ivory py-16 sm:py-24 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-dim">
            Our core values
          </span>
          <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.6rem] md:leading-tight text-navy max-w-xl text-balance">
            The principles behind every engagement
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08} y={20}>
              <div className="group/val h-full p-7 bg-paper border border-navy/10 rounded-sm hover:border-emerald/30 hover:-translate-y-1 hover:shadow-card transition-all duration-500 ease-signature">
                <value.icon className="w-6 h-6 text-emerald-dim transition-transform duration-500 group-hover/val:scale-110" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg text-navy">{value.title}</h3>
                <p className="mt-2.5 text-ink-soft text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
