import Image from "next/image";
import { UserPlus, FileSearch, MessageCircle, Handshake, RefreshCw } from "lucide-react";
import Reveal from "./Reveal";
import { photos } from "@/lib/images";

const steps = [
  {
    icon: UserPlus,
    title: "Onboarding & Information Collection",
    description:
      "We gather the account details, supporting documents, and background needed to understand each case properly.",
  },
  {
    icon: FileSearch,
    title: "Account Review & Planning",
    description:
      "Every outstanding balance is reviewed against its documentation, and a realistic recovery plan is set before any contact is made.",
  },
  {
    icon: MessageCircle,
    title: "Customer Communication & Follow-up",
    description:
      "We open and maintain professional communication with your customer, following up consistently until there's a resolution in sight.",
  },
  {
    icon: Handshake,
    title: "Negotiation & Settlement",
    description:
      "We negotiate payment terms and amicable settlements, seeking outcomes that work for both sides of the relationship.",
  },
  {
    icon: RefreshCw,
    title: "Reporting & Continuous Monitoring",
    description:
      "You receive ongoing updates, aging analysis, and status reports, with monitoring that continues until the case is fully closed.",
  },
];

export default function DetailedProcess() {
  return (
    <section className="bg-navy py-16 sm:py-24 md:py-28 relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="max-w-content mx-auto px-6 md:px-10 relative">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-bright">
            Our process
          </span>
          <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.6rem] md:leading-tight text-ivory max-w-xl text-balance">
            Consistent follow-up. Transparent reporting. Better results.
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid lg:grid-cols-[0.85fr,1.15fr] gap-8 lg:gap-14">
          <Reveal delay={0.1}>
            <div className="relative rounded-sm overflow-hidden h-48 sm:h-72 lg:h-full lg:min-h-[520px] lg:sticky lg:top-32">
              <Image
                src={photos.meeting()}
                alt="Team reviewing financial reports and account status together"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
              <div className="absolute inset-0 border border-white/10 rounded-sm" />
            </div>
          </Reveal>

          <div className="relative">
            <div
              className="hidden md:block absolute left-[27px] top-3 bottom-3 w-px bg-white/10"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08} y={16}>
                  <div className="flex gap-4 sm:gap-6 md:gap-8 items-start">
                    <div className="w-11 h-11 sm:w-[54px] sm:h-[54px] rounded-full bg-navy-deep border border-white/15 flex items-center justify-center shrink-0 relative z-10">
                      <step.icon className="w-5 h-5 text-emerald-bright" strokeWidth={1.5} />
                    </div>
                    <div className="pt-1.5 sm:pt-2">
                      <span className="font-mono text-[0.68rem] sm:text-[0.7rem] tracking-[0.18em] sm:tracking-[0.2em] uppercase text-mist/60">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-lg sm:text-xl md:text-[1.3rem] text-ivory">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-mist text-[0.86rem] sm:text-[0.92rem] leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
