import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MHTCET Simu collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: July 2026</p>

        <div className="mt-6 rounded-2xl border border-ink/8 bg-lavender p-4 text-sm text-muted">
          This is placeholder policy text for the MHTCET Simu marketing website. It
          should be reviewed by a qualified legal professional before the site goes
          live with real user data collection.
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">1. Information We Collect</h2>
            <p className="mt-2 text-muted">
              This marketing website collects only what you submit directly through
              the contact form — your name, email address, and message. This site
              does not host the exam simulator and does not connect to any database
              or user account system; account-related data is handled by the separate
              MHTCET Simu web app, under its own privacy policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">2. How We Use Your Information</h2>
            <p className="mt-2 text-muted">
              Contact form submissions are used solely to respond to your inquiry —
              whether a general question or a coaching institute license request. We
              do not sell or share this information with third parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">3. Cookies and Analytics</h2>
            <p className="mt-2 text-muted">
              We use privacy-friendly analytics to understand aggregate traffic
              patterns on this site. No personally identifying cookies are set for
              advertising or cross-site tracking purposes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">4. Third-Party Services</h2>
            <p className="mt-2 text-muted">
              Contact form emails are delivered via a third-party transactional email
              provider. That provider processes message content solely to deliver it
              to our inbox.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">5. Data Security</h2>
            <p className="mt-2 text-muted">
              We take reasonable measures to protect information submitted through
              this site, though no method of transmission over the internet is 100%
              secure.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">6. Your Rights</h2>
            <p className="mt-2 text-muted">
              You may request that we delete any information you have submitted
              through the contact form by emailing hello@mhtcetsimu.in.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">7. Children&#39;s Privacy</h2>
            <p className="mt-2 text-muted">
              This site is intended for students, parents, and coaching institutes
              preparing for MHT CET, and does not knowingly collect information from
              children without parental awareness.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">8. Changes to This Policy</h2>
            <p className="mt-2 text-muted">
              We may update this policy from time to time. Material changes will be
              reflected by updating the &quot;Last updated&quot; date above.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-ink">9. Contact Us</h2>
            <p className="mt-2 text-muted">
              Questions about this policy can be sent to hello@mhtcetsimu.in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
