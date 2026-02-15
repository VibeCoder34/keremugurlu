import type { Metadata } from "next";
import { notFound } from "next/navigation";

const APP_PRIVACY_CONFIG = {
  affirm: {
    name: "Affirm",
    title: "Affirm — Privacy Policy",
    description:
      "Privacy Policy for Affirm, a calm AI companion app for quiet reflection.",
    path: "/affirm/privacy",
  },
  wordimo: {
    name: "Wordimo",
    title: "Wordimo — Privacy Policy",
    description:
      "Privacy Policy for Wordimo, an AI-powered English vocabulary learning app.",
    path: "/wordimo/privacy",
  },
} as const;

type AppKey = keyof typeof APP_PRIVACY_CONFIG;

interface PageProps {
  params: Promise<{ app: string }>;
}

export function generateStaticParams() {
  return Object.keys(APP_PRIVACY_CONFIG).map((app) => ({
    app,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { app } = await params;
  const key = app as AppKey;
  const config = APP_PRIVACY_CONFIG[key];

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

export default async function AppPrivacyPage({ params }: PageProps) {
  const { app } = await params;
  const key = app as AppKey;
  const config = APP_PRIVACY_CONFIG[key];

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
              {config.name} · Privacy Policy
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-neutral-500">
              Last updated: February 2026
            </p>
          </header>

          <section className="mb-8">
            <p className="text-sm text-neutral-500 mb-4">
              If you have any questions about this Privacy Policy, you can reach
              us at{" "}
              <a
                href="mailto:support@keremugurlu.com"
                className="underline underline-offset-2"
              >
                support@keremugurlu.com
              </a>
              .
            </p>
          </section>

          <div className="space-y-8 text-base leading-relaxed">
            {isAffirm ? (
              <>
                <section>
                  <p>
                    Affirm (&quot;we&quot;, &quot;our&quot;, or
                    &quot;us&quot;) operates the Affirm mobile application (the
                    &quot;App&quot;). This Privacy Policy explains how we
                    collect, use, and protect your information when you use the
                    App.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    1. Information We Collect
                  </h2>

                  <h3 className="text-base font-semibold mb-2">
                    1.1 Account Information
                  </h3>
                  <p className="mb-2">
                    If you create an account, we may collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Email address</li>
                    <li>Authentication information (handled securely via Supabase)</li>
                  </ul>
                  <p className="mt-2">
                    We do not store your password directly.
                  </p>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    1.2 User Input
                  </h3>
                  <p className="mb-2">
                    When you type messages or reflections inside the App:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your text may be processed to generate AI responses.</li>
                    <li>We do not use your content for advertising purposes.</li>
                    <li>We do not sell your data.</li>
                  </ul>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    1.3 Technical Data
                  </h3>
                  <p className="mb-2">We may collect limited technical information such as:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Device type</li>
                    <li>App version</li>
                    <li>Crash logs</li>
                    <li>Anonymous usage analytics</li>
                  </ul>
                  <p className="mt-2">
                    This data helps improve performance and stability.
                  </p>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    1.4 AI Processing
                  </h3>
                  <p>
                    To generate responses, user input may be securely
                    transmitted to third-party AI service providers. These
                    providers process the data solely to generate responses and
                    do not use it for independent purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    2. How We Use Information
                  </h2>
                  <p className="mb-2">We use collected information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide and improve the App</li>
                    <li>Generate AI responses</li>
                    <li>Maintain security</li>
                    <li>Fix technical issues</li>
                    <li>Respond to support inquiries</li>
                  </ul>
                  <p className="mt-2">
                    We do not sell, rent, or trade personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    3. Data Retention
                  </h2>
                  <p className="mb-2">
                    We retain data only as long as necessary to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide the service</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                  </ul>
                  <p className="mt-2">
                    You may request account deletion at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    4. Third-Party Services
                  </h2>
                  <p className="mb-2">The App may use:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Supabase (authentication &amp; database)</li>
                    <li>AI service providers</li>
                    <li>Apple In-App Purchases</li>
                  </ul>
                  <p className="mt-2">
                    Each service operates under its own privacy policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    5. Subscription &amp; Payments
                  </h2>
                  <p>
                    All payments are processed by Apple via In-App Purchase. We
                    do not collect or store payment information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    6. Children’s Privacy
                  </h2>
                  <p>
                    The App is not intended for children under 13. We do not
                    knowingly collect data from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    7. Important Disclaimer
                  </h2>
                  <p className="mb-2">
                    Affirm is a reflection and companion app. It is not a
                    medical, psychological, or therapeutic service.
                  </p>
                  <p>
                    If you are experiencing a crisis, please contact local
                    emergency services.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Your Rights</h2>
                  <p className="mb-2">You may:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Request access to your data</li>
                    <li>Request deletion</li>
                    <li>Contact us regarding privacy concerns</li>
                  </ul>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:support@keremugurlu.com"
                      className="underline underline-offset-2"
                    >
                      support@keremugurlu.com
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Changes</h2>
                  <p>
                    We may update this policy from time to time. Changes will be
                    reflected by the &quot;Last updated&quot; date above.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section>
                  <p>
                    Wordimo (&quot;we&quot;, &quot;our&quot;, or
                    &quot;us&quot;) operates the Wordimo mobile application (the
                    &quot;App&quot;).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    1. Information We Collect
                  </h2>

                  <h3 className="text-base font-semibold mb-2">
                    Account Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 mb-3">
                    <li>Email address</li>
                    <li>Authentication data (via Supabase)</li>
                  </ul>
                  <p>Passwords are not stored directly by us.</p>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    Learning Data
                  </h3>
                  <p className="mb-2">We may store:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Saved vocabulary</li>
                    <li>Learning progress</li>
                    <li>Quiz performance</li>
                    <li>Preferences</li>
                  </ul>
                  <p className="mt-2">
                    This allows personalized learning experiences.
                  </p>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    Technical Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>Device information</li>
                    <li>App version</li>
                    <li>Crash reports</li>
                    <li>Anonymous analytics</li>
                  </ul>

                  <h3 className="text-base font-semibold mt-4 mb-2">
                    AI Processing
                  </h3>
                  <p>
                    Certain features may generate vocabulary or examples using
                    AI services. User input may be transmitted securely for
                    processing.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    2. How We Use Information
                  </h2>
                  <p className="mb-2">We use data to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide learning features</li>
                    <li>Track progress</li>
                    <li>Improve performance</li>
                    <li>Personalize vocabulary suggestions</li>
                  </ul>
                  <p className="mt-2">We do not sell personal data.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Subscriptions</h2>
                  <p className="mb-2">Wordimo offers subscription plans.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Payments are processed by Apple.</li>
                    <li>We do not store payment details.</li>
                    <li>Subscriptions renew automatically unless canceled.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Data Retention</h2>
                  <p>
                    Learning data is stored as long as the account is active.
                    You may request deletion at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Children</h2>
                  <p>Wordimo is not intended for children under 13.</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
                  <p className="mb-2">You may:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Access your data</li>
                    <li>Request deletion</li>
                    <li>Contact support</li>
                  </ul>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:support@keremugurlu.com"
                      className="underline underline-offset-2"
                    >
                      support@keremugurlu.com
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Changes</h2>
                  <p>We may update this policy periodically.</p>
                </section>
              </>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}

