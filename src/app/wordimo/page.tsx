import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wordimo — AI-powered English vocabulary learning app",
  description:
    "Wordimo is an AI-powered English vocabulary learning app that helps you remember words with context, stories, and smart spaced repetition.",
  openGraph: {
    title: "Wordimo — AI-powered English vocabulary learning app",
    description:
      "Learn and remember English vocabulary with context-rich examples, personalized decks, and calm daily practice.",
    url: "/wordimo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wordimo — AI-powered English vocabulary learning app",
    description:
      "AI-powered English vocabulary learning with context, stories, and spaced repetition.",
  },
};

export default function WordimoPage() {
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
              Education
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight theme-text-primary">
                Wordimo
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl">
                An AI-powered English vocabulary learning app that helps you
                remember words with context, stories, and spaced repetition.
              </p>
            </div>
            <div className="pt-4">
              <button
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-colors disabled:opacity-60"
                disabled
              >
                Download on the App Store (coming soon)
              </button>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold theme-text-primary">
              Designed for deep vocabulary learning
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Personalized word decks
                </h3>
                <p className="text-sm theme-text-secondary">
                  Wordimo adapts to your level and goals, building custom
                  decks based on how you actually use English.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Context-rich examples
                </h3>
                <p className="text-sm theme-text-secondary">
                  Learn new vocabulary through natural, modern sentences instead
                  of dry dictionary definitions.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Smart spaced repetition
                </h3>
                <p className="text-sm theme-text-secondary">
                  An intelligent review schedule surfaces words right before
                  you&apos;re about to forget them.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Gentle daily rhythm
                </h3>
                <p className="text-sm theme-text-secondary">
                  Short, focused sessions that fit into your day without
                  overwhelming you.
                </p>
              </div>
            </div>
          </section>

          {/* Experience section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold theme-text-primary">
              Built for learners who want long-term results
            </h2>
            <p className="text-base theme-text-secondary leading-relaxed">
              Wordimo is for learners who care more about actually using
              vocabulary than collecting long word lists. The app focuses on
              recall, real-world usage, and calm, repeatable practice rather
              than streaks and notifications.
            </p>
          </section>

          {/* Legal links */}
          <section className="border-t theme-border pt-6 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm theme-text-secondary">
              <span className="font-medium theme-text-primary">Legal</span>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/wordimo/privacy"
                  className="hover:theme-text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/wordimo/terms"
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

