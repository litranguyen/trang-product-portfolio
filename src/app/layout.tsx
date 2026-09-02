import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-next",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono-next",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif-next",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// Absolute URLs are required for Open Graph images to resolve.
// NEXT_PUBLIC_SITE_URL is set in Vercel once the custom domain is live; the
// VERCEL_PROJECT_PRODUCTION_URL fallback keeps preview deploys correct too.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trang Nguyen — Product Manager",
    template: "%s — Trang Nguyen",
  },
  description:
    "Product manager focused on AI products and decision-making. Case study: Chef's Table, an AI dining companion that turns an unfamiliar menu into personalized guidance.",
  keywords: [
    "product manager",
    "product management portfolio",
    "AI product",
    "case study",
    "Chef's Table",
    "Trang Nguyen",
  ],
  authors: [{ name: "Trang Nguyen" }],
  creator: "Trang Nguyen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Trang Nguyen — Product Manager",
    title: "Trang Nguyen — Product Manager",
    description:
      "Product manager focused on AI products and decision-making. Featuring Chef's Table, an AI dining companion built from research to MVP scope.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trang Nguyen — Product Manager",
    description:
      "Product manager focused on AI products and decision-making. Featuring Chef's Table, an AI dining companion built from research to MVP scope.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <SiteHeader />

        <div id="main" className="site-main">
          {children}
        </div>

        <SiteFooter />
      </body>
    </html>
  );
}
