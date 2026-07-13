import { Eye, Target } from "lucide-react";
import Reveal from "./Reveal";

const badges = ["Professional", "Confidential", "Persistent", "Results-Driven"];

export default function AboutIntro() {
  return (
    <section className="bg-paper py-16 sm:py-24 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <span className="font-mono text-xs tracking-[0.28em] uppercase text-emerald-dim">
              About Noviqa
            </span>
            <h2 className="mt-4 font-display text-[1.9rem] leading-[1.15] sm:text-3xl md:text-[2.4rem] md:leading-tight text-navy text-balance">
              Experience. Expertise. Commitment.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Noviqa Management Services LLC is a professional business
              support company specializing in commercial receivables
              management and claims coordination. We partner with businesses
              to recover outstanding payments and follow up on insurance and
              corporate claims, ensuring consistent communication, proper
              documentation, and timely resolution.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              With over 13 years of hands-on experience in credit control and
              debt recovery across the Banking, Construction, Oil &amp; Gas,
              and Energy sectors, we bring deep industry knowledge, proven
              strategies, and a results-driven approach to every engagement.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[0.7rem] tracking-[0.14em] uppercase text-emerald-dim border border-emerald/25 rounded-full px-3.5 py-1.5"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-5 sm:gap-6">
            <Reveal delay={0.1}>
              <div className="bg-navy rounded-sm p-8">
                <Eye className="w-6 h-6 text-ivory/70" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-ivory">Vision</h3>
                <p className="mt-3 text-mist text-[0.95rem] leading-relaxed">
                  To be the most trusted partner for businesses in managing
                  receivables and claims, recognized for our integrity,
                  professionalism, and commitment to improving our client's
                  cash flow and financial stability.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-navy-mid rounded-sm p-8">
                <Target className="w-6 h-6 text-emerald-bright" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-ivory">Mission</h3>
                <p className="mt-3 text-mist text-[0.95rem] leading-relaxed">
                  To deliver effective receivables management and claims
                  coordination through structured processes, consistent
                  follow-up, and relationship-focused communication,
                  enabling our clients to focus on their core business with
                  confidence.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
