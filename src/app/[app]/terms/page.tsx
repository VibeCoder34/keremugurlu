import type { Metadata } from "next";
import { notFound } from "next/navigation";

const APP_TERMS_CONFIG = {
  affirm: {
    name: "Affirm",
    title: "Affirm — Terms of Use",
    description:
      "Terms of Use for Affirm, a calm AI companion app for quiet reflection.",
    path: "/affirm/terms",
  },
  wordimo: {
    name: "Wordimo",
    title: "Wordimo — Terms of Use",
    description:
      "Terms of Use for Wordimo, an AI-assisted English vocabulary learning app.",
    path: "/wordimo/terms",
  },
} as const;

type AppKey = keyof typeof APP_TERMS_CONFIG;

interface PageProps {
  params: Promise<{ app: string }>;
}

export function generateStaticParams() {
  return Object.keys(APP_TERMS_CONFIG).map((app) => ({
    app,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { app } = await params;
  const key = app as AppKey;
  const config = APP_TERMS_CONFIG[key];

  if (!config) {
    return {};
  }

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.path,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
    },
  };
}

export default async function AppTermsPage({ params }: PageProps) {
  const { app } = await params;
  const key = app as AppKey;
  const config = APP_TERMS_CONFIG[key];

  if (!config) {
    notFound();
  }

  const isAffirm = key === "affirm";

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <main className="px-6 py-16">
        <article className="mx-auto w-full max-w-3xl">
          <header className="mb-10">
            <p className="text-sm text-neutral-500 mb-2">
              {config.name} · Terms of Use
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
              Terms of Use
            </h1>
            <p className="text-sm text-neutral-500">
              Last updated: February 2026
            </p>
          </header>

          <section className="mb-8">
            <p className="text-sm text-neutral-500 mb-4">
              If you have any questions about these Terms, you can reach us at{" "}
              <a
                href="mailto:kerem@keremugurlu.com"
                className="underline underline-offset-2"
              >
                kerem@keremugurlu.com
              </a>
              .
            </p>
          </section>

          <div className="space-y-8 text-base leading-relaxed">
            {isAffirm ? (
              <>
                <section>
                  <p>
                    By using Affirm, you agree to these Terms of Use
                    (&quot;Terms&quot;).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    1. Service Description
                  </h2>
                  <p className="mb-2">
                    Affirm provides AI-generated reflective responses and
                    optional listening sessions designed for calm personal
                    reflection.
                  </p>
                  <p>
                    Affirm does not provide medical, psychological, or
                    therapeutic services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    2. User Responsibilities
                  </h2>
                  <p className="mb-2">You agree:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Not to misuse the App</li>
                    <li>Not to attempt to reverse engineer the system</li>
                    <li>Not to use the App for unlawful purposes</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Subscriptions</h2>
                  <p className="mb-2">
                    Some features may require a subscription.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payments are handled by Apple.</li>
                    <li>Subscriptions automatically renew unless canceled.</li>
                    <li>You may manage subscriptions in your Apple ID settings.</li>
                    <li>Refunds are handled by Apple.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. AI Limitations</h2>
                  <p className="mb-2">
                    AI-generated responses may not always be accurate or
                    appropriate.
                  </p>
                  <p>Use the App at your own discretion.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    Affirm is provided &quot;as is&quot; without warranties. We
                    are not liable for decisions made based on App content.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
                  <p className="mb-2">
                    We may suspend accounts for misuse. Users may delete their
                    account at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    7. Governing Law
                  </h2>
                  <p>
                    These Terms are governed by applicable international consumer
                    protection standards.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <p>
                    By using Wordimo, you agree to these Terms of Use
                    (&quot;Terms&quot;).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    1. Service Description
                  </h2>
                  <p>
                    Wordimo is an AI-assisted English vocabulary learning
                    application.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">2. Accounts</h2>
                  <p>
                    Users are responsible for maintaining the security of their
                    accounts and login information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Subscriptions</h2>
                  <p className="mb-2">
                    Some features require a paid subscription.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Billing is handled by Apple.</li>
                    <li>Automatic renewal applies.</li>
                    <li>Subscriptions can be managed via Apple ID settings.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Acceptable Use</h2>
                  <p className="mb-2">You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abuse AI features</li>
                    <li>Attempt system manipulation</li>
                    <li>Use the App unlawfully</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    Wordimo is provided &quot;as is.&quot; We do not guarantee
                    learning outcomes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
                  <p>
                    We may suspend accounts for misuse. You may stop using the
                    App at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    7. Governing Law
                  </h2>
                  <p>
                    Applicable international consumer protection principles
                    apply.
                  </p>
                </section>
              </>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}

