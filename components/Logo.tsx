import Image from "next/image";
import { cx } from "@/lib/utils";

/**
 * Noviqa lockup, built from the actual logo file.
 *
 * variant="light" (used in the Nav and Footer, both on the navy background):
 * renders the transparent-background cutout of the mark so it sits directly
 * on the site's own navy, with no visible edge/box around it.
 *
 * variant="dark" (reserved for use on light backgrounds, e.g. a future
 * light-mode header): renders the self-contained badge version, which
 * carries its own navy backing so it stays legible on any surface.
 */
export default function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const wordColor = variant === "light" ? "text-ivory" : "text-navy";
  const subColor = variant === "light" ? "text-mist" : "text-ink-soft";
  const qBase = variant === "light" ? "#F7F4EE" : "#0A1B33";

  return (
    <div className={cx("group flex items-center gap-3", className)}>
      <span className="relative shrink-0 transition-transform duration-500 ease-signature group-hover:-translate-y-0.5">
        {variant === "light" ? (
          <Image
            src="/logo-mark.png"
            alt="Noviqa"
            width={35}
            height={31}
            className="h-[34px] w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
            priority
          />
        ) : (
          <Image
            src="/logo-badge.png"
            alt="Noviqa"
            width={34}
            height={34}
            className="h-[34px] w-[34px] rounded-[9px]"
            priority
          />
        )}
      </span>
      <div className="flex flex-col leading-none">
        <span className={cx("font-display text-[1.15rem] tracking-[0.14em] font-medium", wordColor)}>
          NOVI
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${qBase} 0%, ${qBase} 55%, #2FA759 78%, #155E38 100%)`,
            }}
          >
            Q
          </span>
          A
        </span>
        <span className={cx("font-mono text-[0.5rem] tracking-[0.32em] uppercase mt-1", subColor)}>
          Management Services
        </span>
      </div>
    </div>
  );
}
