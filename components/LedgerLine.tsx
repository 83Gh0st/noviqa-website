"use client";

import { motion } from "framer-motion";
import { cx } from "@/lib/utils";

export default function LedgerLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 320"
      fill="none"
      className={cx("w-full h-auto overflow-visible", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="riseFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2FA759" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#2FA759" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="riseStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#155E38" />
          <stop offset="100%" stopColor="#2FA759" />
        </linearGradient>
        <linearGradient id="volatileFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8FA3B0" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#8FA3B0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* baseline grid — quiet dashboard structure */}
      {[64, 138, 212].map((y, i) => (
        <line
          key={y}
          x1="0"
          x2="900"
          y1={y}
          y2={y}
          stroke="#F7F4EE"
          strokeOpacity={i === 1 ? 0.09 : 0.055}
          strokeWidth="1"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
      ))}

      {/* soft area beneath the pre-engagement wave */}
      <motion.path
        d="M0,150 C20,166 35,176 55,171 C75,166 90,134 105,124 C120,114 140,178 150,192 C160,206 180,153 195,143 C210,133 225,193 240,203 C255,213 270,174 285,164 C300,154 310,175 320,182 L320,270 L0,270 Z"
        fill="url(#volatileFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* pre-engagement trend — organic, uneven, not yet under control */}
      <motion.path
        d="M0,150 C20,166 35,176 55,171 C75,166 90,134 105,124 C120,114 140,178 150,192 C160,206 180,153 195,143 C210,133 225,193 240,203 C255,213 270,174 285,164 C300,154 310,175 320,182"
        stroke="#8FA3B0"
        strokeOpacity="0.65"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* faint data points along the volatile stretch, for texture */}
      {[
        [55, 171],
        [105, 124],
        [150, 192],
        [195, 143],
        [240, 203],
        [285, 164],
      ].map(([cx1, cy1], i) => (
        <motion.circle
          key={`${cx1}-${cy1}`}
          cx={cx1}
          cy={cy1}
          r="2.5"
          fill="#8FA3B0"
          fillOpacity="0.55"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
        />
      ))}

      {/* soft area under the engineered rise */}
      <motion.path
        d="M320,182 C360,160 375,132 405,120 C470,94 560,84 630,68 C700,52 800,48 895,34 L895,270 L320,270 Z"
        fill="url(#riseFill)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.6 }}
      />

      {/* confident, engineered rise */}
      <motion.path
        d="M320,182 C360,160 375,132 405,120 C470,94 560,84 630,68 C700,52 800,48 895,34"
        stroke="url(#riseStroke)"
        strokeWidth="2.75"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* pivot marker — the point of engagement */}
      <motion.circle
        cx="320"
        cy="182"
        r="5"
        fill="#F7F4EE"
        stroke="#2FA759"
        strokeWidth="2"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.85 }}
      />
      <motion.circle
        cx="320"
        cy="182"
        r="5"
        fill="none"
        stroke="#2FA759"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0.6 }}
        whileInView={{ scale: 3, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, delay: 1, repeat: Infinity, repeatDelay: 1.6 }}
      />
      <motion.text
        x="320"
        y="204"
        textAnchor="middle"
        fill="#8FA3B0"
        fontSize="12"
        fontFamily="var(--font-plex-mono), monospace"
        letterSpacing="0.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.75 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        Noviqa engaged
      </motion.text>

      {/* end marker + result badge */}
      <motion.circle
        cx="895"
        cy="34"
        r="4"
        fill="#2FA759"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 2.1 }}
      />
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <rect x="742" y="-6" width="153" height="34" rx="17" fill="#040F24" fillOpacity="0.7" stroke="#2FA759" strokeOpacity="0.35" />
        <circle cx="763" cy="11" r="3" fill="#2FA759" />
        <text x="775" y="16" fill="#F7F4EE" fontSize="13" fontFamily="var(--font-inter), sans-serif" fontWeight="500">
          Balance recovered
        </text>
      </motion.g>
    </svg>
  );
}
