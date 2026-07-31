import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "For Coaching Institutes",
  description:
    "White-label MHT CET simulator for coaching institutes. Unlimited students, your branding.",
  alternates: { canonical: "/institutes" },
};

const DEMO_CTA_HREF = "/contact?subject=" + encodeURIComponent("Institute License Inquiry");

const PAIN_POINTS = [
  { icon: "📄", tone: "bg-primary/10 text-primary", title: "Printed PDFs", description: "Photocopied papers with no timer, no interface, no tracking." },
  { icon: "📉", tone: "bg-teal/10 text-teal", title: "No Visibility", description: "No way to see which students are struggling, or with what." },
  { icon: "🛠️", tone: "bg-teal/10 text-teal", title: "No Infrastructure", description: "Building your own exam software isn't realistic for most institutes." },
];

const INCLUDED = [
  "Unlimited students, no per-seat cost",
  "White-label branding: your logo, your domain",
  "Teacher dashboard with class-wide analytics",
  "All 6 test modes, same as Pro Student",
  "Deep chapter analytics for every student",
  "All 16,000+ questions, 2016–2026",
  "Dedicated onboarding, live in 7 days",
  "All future exams included as we launch them",
];

const STEPS = [
  { step: "Step 1", title: "Sign Agreement", description: "A straightforward annual license agreement." },
  { step: "Step 2", title: "We Configure White-Label", description: "Your logo, your branding, fully managed by us." },
  { step: "Step 3", title: "Go Live in 7 Days", description: "Your students are practising within a week." },
];

export default function InstitutesPage() {
  return (
    <>
      <section className="mesh-gradient">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">
            Give Your Students a Competitive Edge. <span className="text-teal-dark">Zero Infrastructure Required.</span>
          </h1>
          <div className="mt-8 flex justify-center">
            <Button href={DEMO_CTA_HREF} size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
            You Hand Out Printed PDFs. Your Students Need a Digital Simulator.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {PAIN_POINTS.map((point) => (
              <Card key={point.title}>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${point.tone}`}
                  aria-hidden="true"
                >
                  {point.icon}
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">{point.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            A Fully White-Labelled Platform
          </h2>
          <p className="mt-4 text-muted">
            Your institute&#39;s logo, your branding, running on the same authentic MHT
            CET simulator your students would otherwise have to find on their own —
            fully managed by us end-to-end.
          </p>
          <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink">
                <span className="text-primary" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-teal-dark text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Pricing</h2>
          <div className="mt-4 font-display text-4xl font-extrabold">Get In Touch</div>
          <p className="mt-3 text-white/70">
            Priced per institute, based on your student count. Reach out for a
            quote and a platform every one of your students can use, year-round.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={DEMO_CTA_HREF} variant="white">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-ink sm:text-3xl">
            How It Works
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {STEPS.map((item) => (
              <div key={item.step} className="rounded-2xl border-2 border-primary/40 bg-white p-6 text-center shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
                <span className="inline-flex rounded-full bg-primary px-3 py-1 font-display text-[11px] font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Give Your Institute an Edge?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={DEMO_CTA_HREF} variant="white" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
