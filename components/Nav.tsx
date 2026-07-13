"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { cx } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-signature",
        scrolled || open
          ? "bg-navy-deep/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-navy-deep/30"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" aria-label="Noviqa home">
          <Logo variant="light" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cx(
                    "font-sans text-[0.9rem] tracking-wide transition-colors duration-300",
                    pathname === link.href
                      ? "text-emerald-bright"
                      : "text-ivory/80 hover:text-ivory"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-emerald/50 px-5 py-2.5 text-[0.85rem] text-ivory hover:bg-emerald hover:text-ivory hover:border-emerald hover:shadow-emeraldGlow transition-all duration-300"
          >
            Book a Consultation
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          className="md:hidden text-ivory p-2 -mr-2 active:scale-90 transition-transform duration-200"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-1">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className={cx(
                      "block py-3 font-display text-2xl active:translate-x-1 transition-transform duration-150",
                      pathname === link.href ? "text-emerald-bright" : "text-ivory"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 + links.length * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="pt-3"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald text-ivory px-5 py-3 text-sm font-medium active:scale-95 transition-transform duration-150"
                >
                  Book a Consultation
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
