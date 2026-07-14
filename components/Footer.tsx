import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 pt-12 sm:pt-16 pb-8">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.2fr,1fr,1fr] gap-9 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <Logo variant="light" />
            <p className="mt-6 text-mist text-sm leading-relaxed max-w-xs">
              Professional commercial receivables management and claims
              coordination, built on integrity, confidentiality, and
              transparency.
            </p>
          </div>

          <div>
            <span className="font-mono text-[0.7rem] tracking-[0.24em] uppercase text-mist/60">
              Navigate
            </span>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-ivory/80 hover:text-emerald-bright text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-[0.7rem] tracking-[0.24em] uppercase text-mist/60">
              Get in touch
            </span>
            <ul className="mt-5 space-y-3.5">
              <li className="flex items-start gap-2.5 text-ivory/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-emerald-bright" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-ivory/80 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-emerald-bright" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-emerald-bright transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ivory/80 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-emerald-bright" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-emerald-bright transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-mist/60 text-xs">
            © {new Date().getFullYear()} Noviqa Management Services LLC. All rights reserved.
          </p>
          <p className="text-mist/50 text-xs">
            We do not provide financial advisory services.
          </p>
        </div>
      </div>
    </footer>
  );
}
