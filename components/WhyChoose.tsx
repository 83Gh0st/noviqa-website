import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import { photos } from "@/lib/images";

const reasons = [
  "13+ years of founder experience in credit control and debt recovery across high-value Middle East industries",
  "A track record of improving cash flow and reducing Days Sales Outstanding (DSO)",
  "Professional communication that preserves the business relationship, not just the balance",
  "Structured processes, backed by strong documentation and regular reporting",
  "Flexible engagement models, tailored to how your business actually operates",
  "A dedicated, experienced, result-oriented team on every case",
];

export default function WhyChoose() {
  return (
    <section className="bg-paper py-16 sm:py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-[1fr,1.3fr] gap-10 md:gap-14">
        <Reveal>
          <div className="md:sticky md:top-32">
            <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-dim">
              Why choose Noviqa
            </span>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.6rem] md:leading-tight text-navy text-balance">
              Recovery handled the way you'd handle it yourself
            </h2>
            <p className="mt-4 sm:mt-5 text-ink-soft leading-relaxed max-w-sm text-[0.95rem] sm:text-base">
              We act as your extended partner in managing outstanding
              receivables and claims, with professionalism, persistence, and
              a strong focus on preserving long-term business relationships.
            </p>
            <div className="mt-6 sm:mt-8 relative rounded-sm overflow-hidden h-48 sm:h-64 md:h-72 group">
              <Image
                src={photos.handshake()}
                alt="Two professionals shaking hands, representing a resolved, relationship-first outcome"
                fill
                sizes="(min-width: 768px) 30vw, 90vw"
                className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-7 sm:gap-y-9">
          {reasons.map((reason, i) => (
            <Reveal key={reason} delay={i * 0.07} y={18}>
              <div className="flex gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-dim" strokeWidth={2.5} />
                </div>
                <p className="text-ink-soft text-[0.92rem] sm:text-[0.95rem] leading-relaxed">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
