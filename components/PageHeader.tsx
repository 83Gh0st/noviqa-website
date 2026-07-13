import Image from "next/image";
import Reveal from "./Reveal";
import { photos } from "@/lib/images";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative bg-navy-deep pt-28 pb-14 sm:pt-40 sm:pb-24 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={photos.pageHeaderSkyline()}
          alt="Business Bay, Dubai skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, #040F24 0%, rgba(4,15,36,0.86) 22%, rgba(4,15,36,0.86) 78%, #040F24 100%)",
          }}
        />
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #040F24 0%, #040F24 24%, rgba(4,15,36,0.85) 44%, rgba(4,15,36,0.42) 65%, rgba(4,15,36,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #040F24 0%, rgba(4,15,36,0) 16%, rgba(4,15,36,0) 78%, #040F24 100%)",
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 10% 0%, rgba(30,138,91,0.14), transparent 60%)",
        }}
      />
      <div className="glow-orb w-[320px] h-[320px] -bottom-32 -right-16 bg-emerald/15" aria-hidden="true" />
      <div className="grain-overlay" />
      <div className="relative max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <span className="font-mono text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-emerald-bright">
            {eyebrow}
          </span>
          <h1 className="mt-4 sm:mt-5 font-display text-[2.1rem] leading-[1.14] sm:text-5xl md:text-6xl md:leading-tight text-ivory max-w-2xl text-balance">
            {title}
          </h1>
          <p className="mt-4 sm:mt-6 text-mist max-w-xl leading-relaxed text-[0.92rem] sm:text-base md:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
