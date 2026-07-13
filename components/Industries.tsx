import Image from "next/image";
import { Landmark, Building2, Flame, Truck, Factory, LayoutGrid } from "lucide-react";
import Reveal from "./Reveal";
import { photos } from "@/lib/images";

const industries = [
  { icon: Landmark, label: "Banking & Financial Services" },
  { icon: Building2, label: "Construction & Real Estate" },
  { icon: Flame, label: "Oil, Gas & Energy" },
  { icon: Truck, label: "Trading & Distribution" },
  { icon: Factory, label: "Manufacturing & Industry" },
  { icon: LayoutGrid, label: "Other Services Sectors" },
];

export default function Industries() {
  return (
    <section className="bg-ivory py-16 sm:py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">
            <div>
              <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-dim">
                Industries we serve
              </span>
              <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.75rem] md:leading-tight text-navy max-w-xl text-balance">
                Cross-industry experience, applied to your sector
              </h2>
            </div>
            <p className="text-ink-soft max-w-sm leading-relaxed text-[0.95rem] sm:text-base">
              Our founder's background spans banking, construction, oil &amp;
              gas, and energy, giving us a working understanding of how
              receivables behave in each.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid lg:grid-cols-[1fr,0.85fr] gap-6 lg:gap-10 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-navy/10 rounded-[2px] overflow-hidden">
            {industries.map((industry, i) => (
              <Reveal key={industry.label} delay={i * 0.06} y={18}>
                <div className="group/ind bg-paper h-full p-5 sm:p-7 md:p-9 flex flex-col gap-3.5 sm:gap-5 hover:bg-white active:bg-white sm:hover:-translate-y-1 sm:hover:shadow-card transition-all duration-500 ease-signature">
                  <industry.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-dim transition-transform duration-500 group-hover/ind:scale-110 group-hover/ind:text-emerald" strokeWidth={1.5} />
                  <span className="font-display text-[0.92rem] sm:text-[1.05rem] text-navy leading-snug">
                    {industry.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="relative rounded-sm overflow-hidden h-48 lg:h-full min-h-[260px] group">
              <Image
                src={photos.construction()}
                alt="Construction and industrial site, one of the sectors Noviqa supports"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="font-display text-base sm:text-lg text-ivory leading-snug">
                  13+ years of founder experience across high-value sectors
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
