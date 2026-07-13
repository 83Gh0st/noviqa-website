"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Counter from "./Counter";
import Reveal from "./Reveal";

const stats = [
  { to: 13, suffix: "+", label: "Years of hands-on credit control & recovery experience" },
  { to: 6, suffix: "", label: "Industry sectors served across the UAE" },
  { to: 4, suffix: "", label: "Core service lines, engaged independently or together" },
  { to: 5, suffix: "-step", label: "Structured process, from onboarding to reporting" },
];

export default function StatsStrip() {
  // A single shared observer for the whole strip — every counter starts
  // together off one deterministic trigger, instead of each running its own
  // independent inView check (which could race and leave some stuck at 0).
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-navy-deep border-t border-white/10">
      <div ref={ref} className="max-w-content mx-auto px-6 md:px-10 py-9 sm:py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="md:border-l md:first:border-l-0 border-white/10 md:pl-6">
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-emerald-bright">
                  <Counter to={s.to} suffix={s.suffix} start={inView} />
                </div>
                <p className="mt-2 text-mist text-xs md:text-[0.8rem] leading-snug max-w-[16ch]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
