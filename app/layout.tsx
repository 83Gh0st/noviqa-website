import type { Metadata } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.noviqa.ae"),
  title: {
    default: "Noviqa Management Services LLC | Commercial Receivables & Claims Management",
    template: "%s | Noviqa Management Services",
  },
  description:
    "Noviqa Management Services LLC helps businesses across the GCC strengthen cash flow through structured receivables management, claims coordination, and professional debt recovery support. Meydan Free Zone, Dubai.",
  keywords: [
    "receivables management Dubai",
    "debt recovery GCC",
    "claims coordination Dubai",
    "commercial collections GCC",
    "DSO reduction",
    "Noviqa",
  ],
  openGraph: {
    title: "Noviqa Management Services LLC",
    description:
      "Improving Cash Flow. Preserving Relationships. Structured receivables management and claims coordination for businesses across the GCC.",
    url: "https://www.noviqa.ae",
    siteName: "Noviqa Management Services",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
                <SpeedInsights />

      </body>
    </html>
  );
}
