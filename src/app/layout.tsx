import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const heading = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maguire Murphy | Product & Growth",
  description:
    "Product manager and builder focused on AI, growth, and shipping real products. Currently based in Seattle.",
  keywords: ["product manager", "AI", "growth", "Seattle", "SaaS", "Beacon"],
  authors: [{ name: "Maguire Murphy" }],
  creator: "Maguire Murphy",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Maguire Murphy | Product & Growth",
    description:
      "Product manager and builder focused on AI, growth, and shipping real products.",
    siteName: "Maguire Murphy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maguire Murphy | Product & Growth",
    description:
      "Product manager and builder focused on AI, growth, and shipping real products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maguire Murphy",
              url: "https://maguiremurphy.com",
              jobTitle: "Product Manager",
              sameAs: [
                "https://github.com/maguire-murphy",
                "https://linkedin.com/in/maguiremurphy",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${heading.variable} ${body.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
