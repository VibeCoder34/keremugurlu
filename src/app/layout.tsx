import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://keremugurlu.com'),
  title: "Kerem Uğurlu — Indie Hacker & Micro-SaaS Builder",
  description: "Building tiny internet businesses. Shipping micro-SaaS tools fast. Writing about ideas, distribution and profitability.",
  keywords: ["indie hacker", "micro-saas", "startup", "entrepreneur", "Istanbul"],
  authors: [{ name: "Kerem Uğurlu" }],
  openGraph: {
    title: "Kerem Uğurlu — Indie Hacker & Micro-SaaS Builder",
    description: "Building tiny internet businesses. Shipping micro-SaaS tools fast. Writing about ideas, distribution and profitability.",
    url: "https://keremugurlu.com",
    siteName: "Kerem Uğurlu",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kerem Uğurlu — Indie Hacker & Micro-SaaS Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerem Uğurlu — Indie Hacker & Micro-SaaS Builder",
    description: "Building tiny internet businesses. Shipping micro-SaaS tools fast. Writing about ideas, distribution and profitability.",
    images: ["/og.png"],
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
    <html lang="en" className={inter.variable}>
      <head>
      </head>
      <body className="font-sans antialiased theme-bg-primary theme-text-primary">
        {children}
      </body>
    </html>
  );
}
