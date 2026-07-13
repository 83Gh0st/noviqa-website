"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

export default function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  start = true,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  /** Externally controlled trigger — animates once this flips true. Defaults
   *  to true (animate on mount) so this works standalone too. */
  start?: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, to, duration]);

  return (
    <span className="font-tabular">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
