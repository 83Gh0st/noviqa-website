import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ContactInfoCards from "@/components/ContactInfoCards";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Noviqa Management Services LLC in Meydan Free Zone, Dubai, to discuss receivables management, claims coordination, or debt recovery support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's discuss what's outstanding"
        description="Share a few details about your situation and a member of the Noviqa team will get back to you to arrange a consultation."
      />

      <section className="bg-paper py-16 sm:py-24 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10 grid lg:grid-cols-[1fr,1.15fr] gap-10 lg:gap-16 items-start">
          <div>
            <Reveal>
              <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-dim">
                Reach us directly
              </span>
              <h2 className="mt-4 font-display text-xl sm:text-2xl md:text-3xl text-navy text-balance">
                Prefer to call or email?
              </h2>
              <p className="mt-3 sm:mt-4 text-ink-soft leading-relaxed max-w-md text-[0.95rem] sm:text-base">
                We're based in Meydan Free Zone, Dubai, and work with clients
                across the UAE. Reach out directly, or use the form and we'll
                come back to you.
              </p>
            </Reveal>
            <div className="mt-7 sm:mt-8">
              <ContactInfoCards />
            </div>
            <Reveal delay={0.15}>
              <div className="mt-6 sm:mt-8 rounded-sm overflow-hidden border border-navy/10 h-52 sm:h-64">
                <iframe
                  title="Noviqa office location, Meydan Free Zone, Dubai"
                  src="https://www.google.com/maps?q=Meydan+Free+Zone,+Dubai,+UAE&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="bg-ivory border border-navy/10 rounded-sm p-6 sm:p-8 md:p-10">
              <h2 className="font-display text-xl sm:text-2xl text-navy mb-1.5">Send a message</h2>
              <p className="text-ink-soft text-sm mb-6 sm:mb-7">
                Fields marked <span className="text-emerald-dim">*</span> are required.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
