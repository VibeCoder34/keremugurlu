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
  pintok: {
    name: "PinTok",
    title: "PinTok — Terms of Use",
    description:
      "Terms of Use for PinTok, an AI-powered personal travel assistant that turns social media inspiration into a private map.",
    path: "/pintok/terms",
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
  const isWordimo = key === "wordimo";
  const isPinTok = key === "pintok";

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
              Last updated: February 27, 2026
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
            {isAffirm && (
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
            )}

            {isWordimo && (
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

            {isPinTok && (
              <>
                <section>
                  <p>
                    Welcome to PinTok. By accessing or using our mobile
                    application, you agree to be bound by these Terms of Use
                    (&quot;Terms&quot;). Please read them carefully.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    1. Description of Service
                  </h2>
                  <p>
                    PinTok is a personal productivity tool that allows users to
                    organize travel inspirations. It uses Artificial Intelligence
                    and third-party scraping tools to extract location data from
                    social media links and images provided by the user. PinTok
                    is intended for personal, non-commercial use only and is not
                    a social networking service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    2. Eligibility and Accounts
                  </h2>
                  <p className="mb-2">
                    You must be at least 13 years old to use PinTok.
                  </p>
                  <p className="mb-2">
                    You are responsible for maintaining the confidentiality of
                    your account credentials provided via Supabase.
                  </p>
                  <p>
                    You agree to provide accurate information and keep it
                    updated.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    3. Subscriptions and AI Quota (&quot;AI Fuel&quot;)
                  </h2>
                  <p className="mb-2">
                    PinTok operates on a quota-based system for AI analysis
                    (&quot;AI Fuel&quot;).
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-2">
                    <li>
                      Free users are subject to monthly limits on link and photo
                      analysis.
                    </li>
                    <li>
                      Premium (&quot;Explorer&quot;) subscriptions may offer
                      increased or unlimited quotas. Fees are non-refundable
                      unless required by law.
                    </li>
                    <li>
                      We reserve the right to modify quota limits to ensure
                      system stability and fair usage.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    4. User Conduct and Restrictions
                  </h2>
                  <p className="mb-2">You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Use PinTok to process illegal, harmful, or copyrighted
                      content that you do not have the right to access.
                    </li>
                    <li>
                      Attempt to reverse-engineer PinTok or bypass our API
                      security measures.
                    </li>
                    <li>
                      Use automated bots to flood our AI analysis services.
                    </li>
                    <li>
                      Misuse the integration with third-party platforms
                      (Instagram, TikTok, Google) in any way that violates their
                      respective terms.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    5. Third-Party Content and AI Accuracy
                  </h2>
                  <p className="mb-2">
                    PinTok processes content from third-party platforms
                    (Instagram/TikTok). We do not own this content and are not
                    responsible for its accuracy.
                  </p>
                  <p>
                    AI-generated results (via Gemini) and mapping data (via
                    Google Places) are provided &quot;as-is&quot;. PinTok does
                    not guarantee 100% accuracy in location identification or
                    venue details.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    6. Intellectual Property
                  </h2>
                  <p className="mb-2">
                    The PinTok brand, logo, and software architecture are the
                    exclusive property of PinTok.
                  </p>
                  <p>
                    Users retain rights to the personal collection of pins they
                    create, but understand that the metadata and photos are
                    retrieved from public third-party sources.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Termination</h2>
                  <p className="mb-2">
                    We reserve the right to suspend or terminate your account if
                    you violate these Terms.
                  </p>
                  <p>
                    You may delete your account and all associated data at any
                    time via the Settings menu.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">
                    8. Limitation of Liability
                  </h2>
                  <p>
                    PinTok shall not be liable for any indirect, incidental, or
                    consequential damages resulting from your use of the service
                    or the inaccuracy of AI-generated travel data.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
                  <p>
                    For questions regarding these Terms, please contact:{" "}
                    <a
                      href="mailto:kerem@keremugurlu.com"
                      className="underline underline-offset-2"
                    >
                      kerem@keremugurlu.com
                    </a>
                    .
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

