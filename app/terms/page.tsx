import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of the MHTCET Simu marketing website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-ink">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-6 rounded-2xl border border-ink/8 bg-lavender p-4 text-sm text-muted">
          This is placeholder terms text for the MHTCET Simu marketing website. It
          should be reviewed by a qualified legal professional before the site goes
          live with real subscriptions or B2B agreements.
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">1. Acceptance of Terms</h2>
            <p className="mt-2 text-muted">
              By using this website, operated by KOV Enterprises LLP, you agree to
              these terms of service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">2. Description of Service</h2>
            <p className="mt-2 text-muted">
              This website is a public-facing marketing site for MHTCET Simu. It does
              not host the exam simulator, any exam or question logic, or connect to
              a database. Registration and login are handled entirely by the separate
              MHTCET Simu web app, which is governed by its own terms of service.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">3. Subscriptions and Payments</h2>
            <p className="mt-2 text-muted">
              Pricing shown on this site (Free, Pro Student, and Institute License
              tiers) reflects the plans available on the MHTCET Simu web app.
              Payment, billing, and subscription management occur within the web app,
              not on this marketing site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">4. Acceptable Use</h2>
            <p className="mt-2 text-muted">
              You agree not to misuse this website, including attempting to access
              it in a manner that could disable, overburden, or impair it.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">5. Intellectual Property</h2>
            <p className="mt-2 text-muted">
              All content on this site, including text, graphics, and branding, is
              the property of KOV Enterprises LLP unless otherwise noted.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">6. Disclaimer of Warranties</h2>
            <p className="mt-2 text-muted">
              This website is provided &quot;as is&quot; without warranties of any
              kind, express or implied.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">7. Limitation of Liability</h2>
            <p className="mt-2 text-muted">
              KOV Enterprises LLP shall not be liable for any indirect, incidental,
              or consequential damages arising from your use of this website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">8. Changes to These Terms</h2>
            <p className="mt-2 text-muted">
              We may update these terms from time to time. Material changes will be
              reflected by updating the &quot;Last updated&quot; date above.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">9. Governing Law</h2>
            <p className="mt-2 text-muted">
              These terms are governed by the laws of India, with courts in Pune,
              Maharashtra having jurisdiction over any disputes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">10. Contact Us</h2>
            <p className="mt-2 text-muted">
              Questions about these terms can be sent to hello@mhtcetsimu.in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
