import Image from "next/image";
import { Receipt, ClipboardCheck, Scale, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { photos } from "@/lib/images";

const services = [
  {
    icon: Receipt,
    title: "Commercial Receivables Management",
    tag: "B2B",
    description:
      "Structured follow-up on outstanding invoices, so aging balances get resolved without disrupting the customer relationship.",
    points: [
      "Invoice follow-up and payment reminders",
      "Accounts receivable management",
      "Payment plan discussions and settlements",
      "Aging reports and collection status updates",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Insurance & Corporate Claims Coordination",
    description:
      "Coordinated follow-up with insurers and stakeholders, keeping every claim documented and moving.",
    points: [
      "Follow-up with insurance companies on your behalf",
      "Claim status tracking and updates",
      "Documentation review and coordination",
      "Liaison with insurers and relevant stakeholders",
    ],
  },
  {
    icon: Scale,
    title: "Legal Recovery Coordination",
    description:
      "For the cases where amicable efforts have been exhausted, coordinated through trusted legal experts across the region.",
    points: [
      "Coordination once amicable efforts are exhausted",
      "Structured communication with legal counsel",
      "Case progression tracking",
      "Representation via qualified legal professionals where required",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Support Solutions",
    description:
      "Ongoing portfolio oversight and reporting infrastructure for teams that need extra capacity, not a new system.",
    points: [
      "Credit control outsourcing",
      "Portfolio monitoring and reporting",
      "Data management and record keeping",
      "Ad-hoc business support services",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper py-16 sm:py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-dim">
              What we do
            </span>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.75rem] md:leading-tight text-navy max-w-2xl text-balance">
              Four ways we protect your working capital
            </h2>
            <p className="mt-4 sm:mt-5 text-ink-soft max-w-xl leading-relaxed text-[0.95rem] sm:text-base">
              Each service stands on its own, or works together as a complete
              receivables function for businesses that would rather focus on
              their core work.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative rounded-sm overflow-hidden h-40 sm:h-56 lg:h-64 group">
              <Image
                src={photos.analytics()}
                alt="Financial data and reporting dashboards used to track receivables"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <p className="font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-ivory/90">
                  Transparent reporting, always on hand
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-px bg-navy/10 rounded-[2px] overflow-hidden">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08} y={26}>
              <div className="group/card relative bg-paper h-full p-6 sm:p-8 md:p-10 hover:bg-ivory active:bg-ivory sm:hover:-translate-y-1.5 sm:hover:shadow-cardHover transition-all duration-500 ease-signature">
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-emerald transition-transform duration-500 ease-signature group-hover/card:scale-x-100" />
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center transition-colors duration-500 group-hover/card:bg-emerald group-hover/card:border-emerald">
                    <service.icon className="w-5 h-5 text-emerald-dim transition-colors duration-500 group-hover/card:text-ivory" strokeWidth={1.5} />
                  </div>
                  {service.tag && (
                    <span className="font-mono text-[0.62rem] sm:text-[0.65rem] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-ink-soft/70 border border-navy/15 rounded-full px-2.5 py-1">
                      {service.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 sm:mt-6 font-display text-lg sm:text-xl md:text-[1.4rem] text-navy leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-ink-soft text-[0.9rem] sm:text-[0.95rem] leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 border-t border-navy/10 pt-5 sm:pt-6">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[0.83rem] sm:text-[0.85rem] text-ink-soft">
                      <span className="mt-2 w-1 h-1 rounded-full bg-emerald shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
