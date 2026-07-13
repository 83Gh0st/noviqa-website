"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import LedgerLine from "./LedgerLine";
import { photos } from "@/lib/images";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-deep overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24"
    >
      {/* Photographic backdrop, drifts slightly on scroll */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={photos.heroSkyline()}
          alt="Burj Khalifa rising above the Downtown Dubai skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.06]"
        />
        {/* Directional scrim: dark where the headline sits, clear where the skyline shows.
            On mobile the text spans full width, so a simpler uniform scrim keeps it legible;
            the left/right split only kicks in at md+, once the two-column layout appears. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, #040F24 0%, rgba(4,15,36,0.86) 22%, rgba(4,15,36,0.86) 72%, #040F24 100%)",
          }}
        />
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #040F24 0%, #040F24 20%, rgba(4,15,36,0.88) 38%, rgba(4,15,36,0.5) 58%, rgba(4,15,36,0.18) 78%, rgba(4,15,36,0.08) 100%)",
          }}
        />
        {/* Thin blend strips so the photo tucks under the fixed nav and into the next section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #040F24 0%, rgba(4,15,36,0) 12%, rgba(4,15,36,0) 82%, #040F24 100%)",
          }}
        />
      </motion.div>

      {/* ambient gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 15% 15%, rgba(47,167,89,0.16), transparent 60%)",
        }}
      />
      <div className="glow-orb w-[420px] h-[420px] -top-40 -left-24 bg-emerald/20" aria-hidden="true" />
      <div className="grain-overlay" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-content mx-auto px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3.5 sm:px-4 py-1.5 mb-6 sm:mb-8"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-bright shrink-0" />
          <span className="font-mono text-[0.6rem] sm:text-[0.68rem] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-mist">
            Meydan Free Zone · Dubai, UAE
          </span>
        </motion.div>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-8 md:gap-14 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-ivory text-[2.2rem] leading-[1.12] sm:text-5xl sm:leading-[1.08] md:text-[4rem] md:leading-[1.05] text-balance"
            >
              Improving cash flow.
              <br />
              <span className="italic text-emerald-bright">Preserving</span> relationships.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 sm:mt-7 text-mist text-[0.92rem] sm:text-base md:text-lg max-w-xl leading-relaxed"
            >
              Noviqa recovers what your business is owed through structured
              follow-up, professional negotiation, and transparent reporting,
              so outstanding receivables get resolved, and the business
              relationship stays intact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-emerald px-6 sm:px-7 py-3.5 text-ivory text-sm font-medium tracking-wide hover:bg-emerald-bright hover:-translate-y-0.5 hover:shadow-emeraldGlow active:translate-y-0 active:scale-[0.98] transition-all duration-300"
              >
                <span className="sheen absolute inset-0" aria-hidden="true" />
                Book a Consultation
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="#how-we-work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 sm:px-7 py-3.5 text-ivory/85 text-sm tracking-wide hover:border-white/35 hover:text-ivory hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                See how we work
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            <div className="rounded-md border border-white/15 bg-navy-deep/85 backdrop-blur-xl p-6 pt-5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.04]">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[0.62rem] tracking-[0.18em] uppercase text-mist/70">
                  Receivables trend
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-bright animate-pulse" />
                  <span className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-emerald-bright/80">
                    Live
                  </span>
                </span>
              </div>
              <LedgerLine className="text-emerald" />
              <p className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-mist/70 text-right mt-3">
                Outstanding → Resolved
              </p>
            </div>
          </motion.div>
        </div>

        <div className="md:hidden mt-9 rounded-md border border-white/15 bg-navy-deep/85 backdrop-blur-xl p-5 pt-4 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[0.6rem] tracking-[0.16em] uppercase text-mist/70">
              Receivables trend
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-bright animate-pulse" />
              <span className="font-mono text-[0.58rem] tracking-[0.12em] uppercase text-emerald-bright/80">
                Live
              </span>
            </span>
          </div>
          <LedgerLine />
          <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-mist/70 text-right mt-2.5">
            Outstanding → Resolved
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-7 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-mist/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-mist/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
