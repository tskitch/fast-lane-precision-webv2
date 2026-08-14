import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";
import "./globals.css";

const THEME_INIT_SCRIPT = `try{if(localStorage.getItem('flp-theme')==='light'){document.documentElement.setAttribute('data-theme','light')}}catch(e){}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fastlaneprecision.com"),
  title: { default: "Fast Lane Precision | Aerospace & Defense CNC Machining", template: "%s | Fast Lane Precision" },
  description: "Fast Lane Precision provides tight-tolerance CNC milling, turning, Swiss machining, inspection, and production support for demanding aerospace and defense programs.",
  openGraph: { title: "Fast Lane Precision", description: "Precision. Quality. Speed.", type: "website" },
  twitter: { card: "summary", title: "Fast Lane Precision", description: "Aerospace + defense precision manufacturing." },
  icons: {
    icon: "/media/flp-logo.svg",
    shortcut: "/media/flp-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Fast Lane Precision",
          url: "https://fastlaneprecision.com",
          address: { "@type": "PostalAddress", streetAddress: "1221 Dodson Way", addressLocality: "Riverside", addressRegion: "CA", postalCode: "92507", addressCountry: "US" },
          knowsAbout: ["CNC milling", "CNC turning", "Swiss machining", "aerospace manufacturing", "defense manufacturing"],
        }) }} />
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
