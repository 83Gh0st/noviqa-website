import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="relative bg-navy-deep py-16 sm:py-24 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(30,138,91,0.14), transparent 60%)",
        }}
      />
      <div className="grain-overlay" />
      <div className="glow-orb w-[360px] h-[360px] -bottom-40 left-1/2 -translate-x-1/2 bg-emerald/18" aria-hidden="true" />
      <div className="relative max-w-content mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-bright">
            Ready when you are
          </span>
          <h2 className="mt-4 sm:mt-5 font-display text-[1.85rem] leading-[1.18] sm:text-4xl md:text-5xl md:leading-tight text-ivory max-w-2xl mx-auto text-balance">
            Let's talk about what's outstanding on your books
          </h2>
          <p className="mt-4 sm:mt-5 text-mist max-w-lg mx-auto leading-relaxed text-[0.95rem] sm:text-base">
            A short call is enough to understand your situation and outline
            how a structured recovery process would work for your business.
          </p>
          <div className="mt-7 sm:mt-9">
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-emerald px-8 py-4 text-ivory text-sm font-medium tracking-wide hover:bg-emerald-bright hover:-translate-y-0.5 hover:shadow-emeraldGlow transition-all duration-300"
            >
              <span className="sheen absolute inset-0" aria-hidden="true" />
              Book a Consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
