import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affirm — A calm AI companion for quiet reflection",
  description:
    "Affirm is a calm AI companion for quiet reflection, gentle check-ins, and low-pressure journaling.",
  openGraph: {
    title: "Affirm — A calm AI companion for quiet reflection",
    description:
      "Talk through your thoughts with a gentle AI companion designed for quiet, reflective conversations.",
    url: "/affirm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affirm — A calm AI companion for quiet reflection",
    description:
      "A quiet AI companion for reflection, journaling, and gentle check-ins.",
  },
};

export default function AffirmPage() {
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
              Lifestyle / Wellness
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight theme-text-primary">
                Affirm
              </h1>
              <p className="text-lg sm:text-xl theme-text-secondary max-w-2xl">
                A calm AI companion for quiet reflection, gentle check-ins, and
                low-pressure journaling.
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
              A softer way to talk to yourself
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Gentle guided prompts
                </h3>
                <p className="text-sm theme-text-secondary">
                  Thoughtful, non-judgmental questions that help you process
                  your day without pressure.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Calm conversation tone
                </h3>
                <p className="text-sm theme-text-secondary">
                  Affirm is intentionally slow, quiet, and encouraging—never
                  demanding or gamified.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Private by design
                </h3>
                <p className="text-sm theme-text-secondary">
                  Your reflections are meant for you. Conversations are kept
                  simple, local-first, and easy to export.
                </p>
              </div>
              <div className="p-4 rounded-lg theme-border">
                <h3 className="font-semibold theme-text-primary mb-2">
                  Evenings & check-in mode
                </h3>
                <p className="text-sm theme-text-secondary">
                  Lightweight morning and evening flows to gently close out your
                  day and reset.
                </p>
              </div>
            </div>
          </section>

          {/* Experience section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold theme-text-primary">
              Built for quiet, not for hustle
            </h2>
            <p className="text-base theme-text-secondary leading-relaxed">
              Affirm is not about streaks or productivity hacks. It&apos;s a
              quiet space to talk things through with an AI companion that
              listens, reflects back, and gently nudges you toward clarity when
              you&apos;re ready.
            </p>
          </section>

          {/* Legal links */}
          <section className="border-t theme-border pt-6 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm theme-text-secondary">
              <span className="font-medium theme-text-primary">Legal</span>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/affirm/privacy"
                  className="hover:theme-text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/affirm/terms"
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

