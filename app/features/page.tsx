import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { APP_URLS } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Full paper simulation, chapter drills, deep analytics and more. Everything you need to crack MHT CET.",
  alternates: { canonical: "/features" },
};

const TEST_MODES = [
  {
    icon: "📝",
    tone: "bg-primary/10 text-primary",
    title: "Full Paper",
    description: "Simulate the complete MHT CET paper end-to-end, timed exactly like the real exam.",
    useCase: "Best right before exam day, to build stamina and pacing.",
  },
  {
    icon: "🧪",
    tone: "bg-teal/10 text-teal",
    title: "Subject Mode",
    description: "Practise one subject at a time — Physics, Chemistry, or Maths.",
    useCase: "Best when one subject needs more attention than the others.",
  },
  {
    icon: "📚",
    tone: "bg-teal/10 text-teal",
    title: "Chapter Mode",
    description: "Drill a single chapter until your accuracy actually improves.",
    useCase: "Best for fixing a specific weak spot fast.",
  },
  {
    icon: "🧩",
    tone: "bg-primary/10 text-primary",
    title: "Multi-Chapter Mode",
    description: "Combine several related chapters into one focused test.",
    useCase: "Best for unit-wise revision before a school test.",
  },
  {
    icon: "🎯",
    tone: "bg-primary/10 text-primary",
    title: "Weak Area Mode",
    description: "Auto-built from your own past mistakes across every attempt.",
    useCase: "Best for squeezing more score out of limited time.",
  },
  {
    icon: "⚙️",
    tone: "bg-teal/10 text-teal",
    title: "Custom Mix",
    description: "Handpick exactly which chapters and how many questions to include.",
    useCase: "Best for advanced students building a personalised plan.",
  },
];

const CALLOUTS = [
  { label: "Timer", description: "Counts down exactly like the real exam." },
  { label: "Navigation Grid", description: "Colour-coded by answered, unanswered, and marked." },
  { label: "Section Tabs", description: "Jump between Physics, Chemistry, and Maths instantly." },
  { label: "Mark for Review", description: "Flag questions to revisit before submitting." },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-ink sm:text-5xl">
            Every Feature You Need to Crack MHT CET
          </h1>
          <p className="mt-4 text-lg text-muted">
            From past-year questions to chapter-level analytics — everything is built
            around one goal: knowing exactly what to study next.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={APP_URLS.register} external size="lg">
              Register Free
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
            Six Ways to Practise
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEST_MODES.map((mode) => (
              <Card key={mode.title}>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${mode.tone}`}
                  aria-hidden="true"
                >
                  {mode.icon}
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">{mode.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{mode.description}</p>
                <p className="mt-3 text-xs font-semibold text-primary-dark">{mode.useCase}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
            An Interface That Feels Like the Real Exam
          </h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="flex aspect-video items-center justify-center rounded-2xl border border-ink/8 bg-lavender text-xs font-semibold uppercase tracking-wide text-muted">
              Exam Interface Screenshot
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {CALLOUTS.map((callout) => (
                <div key={callout.label}>
                  <h3 className="font-display font-bold text-ink">{callout.label}</h3>
                  <p className="mt-1 text-sm text-muted">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-dark text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Know Exactly What to Study Next
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Accuracy by Chapter", description: "See precisely which chapters are costing you marks." },
              { title: "Speed Heatmap", description: "Spot which question types are eating your time budget." },
              { title: "Weak Area Detection", description: "Automatically surfaces your lowest-scoring topics." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <h3 className="font-display font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Badge tone="accent">Coming Soon</Badge>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            AI Question Generation
          </h2>
          <p className="mt-4 text-muted">
            Once you have exhausted the past-year library, unlimited fresh questions
            per chapter — generated in the same style as real MHT CET papers.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={APP_URLS.register} external variant="outline" arrow={false}>
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Practising?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={APP_URLS.register} external variant="white" size="lg">
              Register Free
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
