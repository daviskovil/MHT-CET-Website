import type { Metadata } from "next";
import PricingCard from "@/components/pricing/PricingCard";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import { APP_URLS } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing. Start free or go Pro at ₹5,999/year. Institute licenses available.",
  alternates: { canonical: "/pricing" },
};

const COMPARISON_ROWS: { feature: string; free: string; pro: string; institute: string }[] = [
  { feature: "Full papers", free: "3 / month", pro: "Unlimited", institute: "Unlimited" },
  { feature: "All 6 test modes", free: "—", pro: "✓", institute: "✓" },
  { feature: "Chapter analytics", free: "Basic report", pro: "Deep analytics", institute: "Deep analytics" },
  { feature: "Papers covered", free: "Recent years", pro: "2016–2026", institute: "2016–2026" },
  { feature: "White-label branding", free: "—", pro: "—", institute: "✓" },
  { feature: "Teacher dashboard", free: "—", pro: "—", institute: "✓" },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">
              Simple Pricing. No Surprises.
            </h1>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
            <PricingCard
              name="Free"
              price="₹0"
              features={[
                "3 full papers per month",
                "Basic score report",
                "Access to the PCM question bank (2016–2026)",
                "Works on any device, no install needed",
                "No chapter analytics or weak-area detection",
              ]}
              cta={{ label: "Get Started", href: APP_URLS.register, external: true }}
            />
            <PricingCard
              name="Pro Student"
              price="₹5,999"
              period="/ year"
              highlighted
              features={[
                "Unlimited full papers, all 6 test modes",
                "Deep chapter analytics and weak-area detection",
                "All 16,000+ questions, 2016–2026",
                "Authentic exam interface: timer, nav grid, section tabs",
                "LaTeX math rendering, zero broken equations",
                "AI-generated practice questions beyond PYQs",
              ]}
              cta={{ label: "Start Pro", href: APP_URLS.registerPro, external: true }}
            />
            <PricingCard
              name="Institute License"
              price="Get In Touch"
              features={[
                "Everything in Pro Student, for every student",
                "Unlimited students, white label branding",
                "Teacher dashboard with class-wide analytics",
                "Dedicated onboarding, live in 7 days",
                "All future exams included as we launch them",
              ]}
              cta={{ label: "Contact Us", href: "/contact" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
            Compare Plans
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/8 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/8">
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wide text-ink">Feature</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wide text-ink">Free</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wide text-ink">Pro</th>
                  <th className="px-5 py-4 font-display text-xs font-bold uppercase tracking-wide text-ink">Institute</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-ink/8 last:border-0">
                    <td className="px-5 py-3.5 text-muted">{row.feature}</td>
                    <td className="px-5 py-3.5 text-muted">{row.free}</td>
                    <td className="px-5 py-3.5 text-muted">{row.pro}</td>
                    <td className="px-5 py-3.5 text-muted">{row.institute}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <PricingFAQ />
          </div>
        </div>
      </section>
    </>
  );
}
