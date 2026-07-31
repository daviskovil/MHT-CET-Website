import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";
import { SOCIAL_URLS } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the MHTCET Simu team — questions from students and parents, or B2B license inquiries from coaching institutes.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-muted">
            Questions about MHT CET prep, or interested in a license for your institute?
            We&#39;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
            <ContactForm initialSubject={subject ?? ""} />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                Email
              </h2>
              <a
                href="mailto:hello@mhtcetsimu.in"
                className="mt-1 block text-lg font-semibold text-primary hover:underline"
              >
                hello@mhtcetsimu.in
              </a>
            </div>

            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                Location
              </h2>
              <p className="mt-1 text-ink">Pune, Maharashtra</p>
            </div>

            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                Response Time
              </h2>
              <p className="mt-1 text-ink">We respond within 24 hours</p>
            </div>

            <div className="rounded-2xl border border-ink/8 bg-lavender p-5">
              <p className="text-sm text-muted">
                Interested in a white-label license? Mention it in your message and we
                will call you back.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                Follow Us
              </h2>
              <div className="mt-2 flex gap-4 text-sm font-bold text-primary">
                <a href={SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
                <a href={SOCIAL_URLS.youtube} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  YouTube
                </a>
                <a href={SOCIAL_URLS.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
