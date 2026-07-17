import Image from "next/image";
import { cx } from "@/lib/utils";

export default function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const subColor =
    variant === "light" ? "text-mist" : "text-ink-soft";

  return (
    <div className={cx("group flex items-center gap-3", className)}>
      {/* Brand Icon */}
      <span className="relative shrink-0 transition-transform duration-500 ease-signature group-hover:-translate-y-0.5">
        {variant === "light" ? (
          <Image
            src="/logo-mark.png"
            alt="Noviqa"
            width={35}
            height={31}
            priority
            className="h-[34px] w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          />
        ) : (
          <Image
            src="/logo-badge.png"
            alt="Noviqa"
            width={34}
            height={34}
            priority
            className="h-[34px] w-[34px] rounded-[9px]"
          />
        )}
      </span>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
<Image
  src="/noviqa.svg"
  alt="NOVIQA"
  width={240}
  height={32}
  priority
  className="-ml-2 block h-5 w-auto"
/>

        <span
          className={cx(
            "mt-1 font-mono text-[0.5rem] uppercase tracking-[0.32em]",
            subColor
          )}
        >
          Management Services
        </span>
      </div>
    </div>
  );
}