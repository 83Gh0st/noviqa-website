import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/utils";

const cards = [
  {
    icon: MapPin,
    label: "Office",
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Sun – Thu, 9:00 AM – 6:00 PM (GST)",
  },
];

export default function ContactInfoCards() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
      {cards.map((card, i) => (
        <Reveal key={card.label} delay={i * 0.06} y={16}>
          <div className="group/info bg-ivory border border-navy/10 rounded-sm p-6 h-full hover:border-emerald/30 hover:-translate-y-1 hover:shadow-card transition-all duration-500 ease-signature">
            <card.icon className="w-5 h-5 text-emerald-dim transition-transform duration-500 group-hover/info:scale-110" strokeWidth={1.5} />
            <span className="mt-4 block font-mono text-[0.68rem] tracking-[0.2em] uppercase text-ink-soft/70">
              {card.label}
            </span>
            {card.href ? (
              <a href={card.href} className="mt-1.5 block text-navy font-display text-[1.05rem] hover:text-emerald-dim transition-colors">
                {card.value}
              </a>
            ) : (
              <p className="mt-1.5 text-navy font-display text-[1.05rem] leading-snug">{card.value}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
