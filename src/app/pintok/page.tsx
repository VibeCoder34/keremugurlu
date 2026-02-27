import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PinTok — Turn social media into your personal travel map",
  description:
    "PinTok turns your Instagram and TikTok inspiration into a private, AI-powered travel map using Gemini, Apify, and Google Places.",
  openGraph: {
    title: "PinTok — Turn social media into your personal travel map",
    description:
      "Paste reels or upload screenshots and let PinTok extract real-world places, organize them into journeys, and keep a private map of hidden gems.",
    url: "/pintok",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PinTok — Turn social media into your personal travel map",
    description:
      "AI-powered personal travel assistant that turns Instagram & TikTok inspiration into a private map of places you actually want to visit.",
  },
};

export default function PinTokPage() {
  return (
    <div className="min-h-screen theme-bg-primary">
      {/* Header */}
      <header className="py-8">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm theme-text-secondary hover:theme-text-primary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-10">
          {/* Hero */}
          <section className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium theme-border theme-text-secondary">
              Travel / Productivity
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight theme-text-primary">
                PinTok
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl">
                Transform social media into your personal travel map. Paste
                Instagram Reels or TikToks, upload screenshots, and let AI
                extract real-world places so you can stop scrolling and start
                exploring.
              </p>
            </div>
            <div className="pt-4">
              <button
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors disabled:opacity-60"
                disabled
              >
                Join the waitlist (coming soon)
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold theme-text-primary">
              From digital inspiration to real-world exploration
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  AI-powered link analysis
                </h3>
                <p className="text-sm theme-text-secondary">
                  Paste any Instagram Reel or TikTok link. PinTok uses Gemini to
                  analyze the content and extract venue names, cities, and key
                  details in seconds.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Visual discovery from screenshots
                </h3>
                <p className="text-sm theme-text-secondary">
                  Upload screenshots of places you love. PinTok identifies the
                  location and pulls professional photos and metadata via Google
                  Places.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Platform-agnostic scraping
                </h3>
                <p className="text-sm theme-text-secondary">
                  Whether it&apos;s a viral TikTok or a trending Instagram post,
                  Apify-powered scraping handles the heavy lifting across
                  platforms.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Private archive of hidden gems
                </h3>
                <p className="text-sm theme-text-secondary">
                  No followers, no feed, no algorithms. Just your personal,
                  private map of restaurants, cafes, and must-visit spots that
                  actually matter to you.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Smart journeys
                </h3>
                <p className="text-sm theme-text-secondary">
                  Group pins into &quot;Journeys&quot; to plan weekend
                  getaways, city breaks, or bigger trips with a clear sense of
                  what you want to see.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Built for explorers, not influencers
                </h3>
                <p className="text-sm theme-text-secondary">
                  PinTok is not another social network. It&apos;s a calm,
                  utility-first tool that quietly bridges online inspiration with
                  offline experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Experience section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold theme-text-primary">
              A travel brain that lives outside your feed
            </h2>
            <p className="text-base theme-text-secondary leading-relaxed">
              Instead of losing places in chaotic &quot;Saved&quot; folders or
              endless screenshots, PinTok gives you a structured, map-first view
              of everywhere you want to go. It centralizes inspiration from any
              platform, keeps it private by default, and lets you decide when to
              turn ideas into actual trips.
            </p>
          </section>

          {/* Legal links */}
          <section className="border-t theme-border pt-6 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm theme-text-secondary">
              <span className="font-medium theme-text-primary">Legal</span>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pintok/privacy"
                  className="hover:theme-text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/pintok/terms"
                  className="hover:theme-text-primary transition-colors"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </section>

          {/* Back to projects */}
          <section className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm theme-text-secondary hover:theme-text-primary transition-colors"
            >
              ← View all projects
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

