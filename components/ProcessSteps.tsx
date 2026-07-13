import { Search, MessageSquare, Handshake, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    icon: Search,
    title: "Understand",
    description:
      "We review your outstanding accounts, customer history, and the background behind each balance before anyone is contacted.",
  },
  {
    icon: MessageSquare,
    title: "Engage",
    description:
      "We communicate professionally with your customers, on your behalf, to open a constructive conversation toward payment.",
  },
  {
    icon: Handshake,
    title: "Resolve",
    description:
      "We negotiate payment plans and pursue amicable resolution, preserving the relationship your business has built.",
  },
  {
    icon: BarChart3,
    title: "Report",
    description:
      "We provide regular updates, aging analysis, and transparent reporting, so you always know where each case stands.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="how-we-work" className="bg-navy py-16 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="max-w-content mx-auto px-6 md:px-10 relative">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-bright">
            How we work
          </span>
          <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.75rem] md:leading-tight text-ivory max-w-2xl text-balance">
            A structured methodology, followed the same way every time
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-6 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12}>
              <div className="relative">
                <div className="flex items-center gap-4 md:block">
                  <span className="font-mono text-xs text-mist/60 tracking-wider md:mb-6 md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-navy-deep border border-white/15 flex items-center justify-center relative z-10 md:mb-5">
                    <step.icon className="w-5 h-5 text-emerald-bright" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="mt-4 md:mt-0 font-display text-xl text-ivory">{step.title}</h3>
                <p className="mt-2.5 text-mist text-[0.9rem] leading-relaxed max-w-[26ch]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
