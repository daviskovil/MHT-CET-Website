import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { APP_URLS } from "@/lib/urls";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MHT CET decides every engineering and pharmacy seat in Maharashtra, yet students had no real way to practise for it. Here's why we built MHTCET Simu.",
  alternates: { canonical: "/about" },
};

const HERO_STATS = [
  { value: "16,000+", label: "PCM questions, 2016-26" },
  { value: "18", label: "Shifts covered" },
  { value: "6", label: "Test modes available" },
  { value: "₹0", label: "To start, free tier" },
];

const PRINCIPLES = [
  {
    icon: "🖥️",
    tone: "bg-primary/10 text-primary",
    title: "Authenticity",
    description:
      "Our interface matches the real MHT CET exam down to the navigation grid and timer, so exam day feels familiar, not foreign.",
  },
  {
    icon: "🔓",
    tone: "bg-teal/10 text-teal",
    title: "Accessibility",
    description:
      "A genuinely useful free tier, always. Good practice tools shouldn't be locked behind a paywall for students who can't pay.",
  },
  {
    icon: "📈",
    tone: "bg-primary/10 text-primary",
    title: "Data-Driven",
    description:
      "Every attempt feeds chapter-level analytics, so students know what to study next, not just how they scored.",
  },
  {
    icon: "🎓",
    tone: "bg-teal/10 text-teal",
    title: "Student-First",
    description:
      "We build for the student sitting the exam, not just the institute buying the licence.",
  },
];

const TIMELINE = [
  {
    marker: "The Problem",
    title: "Papers everywhere, practice nowhere",
    description:
      "Scattered PDFs, no timer, no analytics. MHT CET aspirants had nothing built for how the exam actually works.",
  },
  {
    marker: "2026",
    title: "Founded",
    description: "Started building MHTCET Simu in Pune to close that gap directly.",
  },
  {
    marker: "2026",
    title: "MHTCET Simu launched",
    description: "16,000+ PCM questions from 2016-26, a real exam interface, and chapter-level analytics, live.",
  },
  {
    marker: "Next",
    title: "PCB and JEE Simu",
    description: "Extending to the PCB stream, then the same simulation and analytics for JEE Main aspirants.",
  },
  {
    marker: "Future",
    title: "NEET Simu",
    description: "Bringing the same rigour to India's medical entrance exam.",
  },
];

const NOT_LIST = [
  {
    icon: "📄",
    title: "Not a PDF dump",
    description: "We don't just hand you scanned papers. Every question lives inside a real, timed exam interface.",
  },
  {
    icon: "🎯",
    title: "Not a generic test-prep app",
    description: "We didn't retrofit a generic quiz app. MHTCET Simu is built around MHT CET's actual format, start to finish.",
  },
  {
    icon: "🔓",
    title: "Not locked behind a paywall",
    description: "The free tier isn't a bait-and-switch trial. It's genuinely useful, for as long as you need it.",
  },
];

const FOUNDERS = [
  {
    name: "Davis Rajan",
    role: "Co-Founder, MHTCET Simu",
    bio: "A seasoned entrepreneur and IT veteran, Davis spent years managing large data centers as a global leader, working across geographies before turning his focus to building MHTCET Simu.",
    tags: ["Data Center Operations", "Global IT Leadership", "Cross-Geography Delivery", "Entrepreneurship"],
  },
  {
    name: "Atharva Joshi",
    role: "Co-Founder, MHTCET Simu",
    bio: "An AI entrepreneur focused on solving hard problems with applied AI, Atharva now leads the question intelligence and analytics engine behind MHTCET Simu.",
    tags: ["Applied AI", "Question Intelligence", "Product Analytics", "Entrepreneurship"],
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mesh-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Badge>Our Story</Badge>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
              MHT CET Deserved
              <br />
              <span className="text-teal-dark">a Real Practice Tool.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Every year, lakhs of Maharashtra students prepare for one of the
              state&#39;s most competitive exams using little more than
              photocopied question papers. We built MHTCET Simu to close that
              gap.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href={APP_URLS.register} external>
                Register Free
              </Button>
              <Button href="/features" variant="outline" arrow={false}>
                See How It Works
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
              >
                <div className="font-display text-2xl font-extrabold tabular-nums text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Badge tone="accent" className="mx-auto">
            Our Mission
          </Badge>
          <p className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
            &#8220;Plenty of question papers. No way to practise with them
            properly.&#8221;
          </p>
          <div className="mx-auto mt-10 grid max-w-2xl gap-8 text-left sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-teal">
                Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Give every MHT CET aspirant in Maharashtra, regardless of
                which coaching institute they can afford, or whether they can
                afford one at all, access to an authentic, data-driven exam
                practice platform.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xs font-bold uppercase tracking-widest text-teal">
                Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A future where every student preparing for a major Indian
                entrance exam, MHT CET, JEE, or NEET, has access to the same
                quality of exam simulation and performance analytics, no
                matter their background.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mx-auto">How We Work</Badge>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Built on Four Principles
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {PRINCIPLES.map((principle) => (
              <Card key={principle.title}>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${principle.tone}`}
                  aria-hidden="true"
                >
                  {principle.icon}
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">{principle.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mx-auto">Our Journey</Badge>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              How We Got Here
            </h2>
          </div>
          <div className="relative mt-12 border-l-2 border-primary/20 pl-8">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[35px] top-1 h-3 w-3 rounded-full border-2 border-white bg-primary" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  {item.marker}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mx-auto">Clarity</Badge>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              What MHTCET Simu Is Not
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              We&#39;re deliberately different from the alternatives. Here&#39;s
              what you won&#39;t get from us.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {NOT_LIST.map((item) => (
              <Card key={item.title}>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-display font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mx-auto">The Team</Badge>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Meet the Founders
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-teal/15 text-[10px] font-semibold uppercase tracking-wide text-teal-dark">
                    Photo
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-ink">{founder.name}</h3>
                    <p className="text-xs font-semibold text-primary">{founder.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-lavender px-3 py-1 text-xs font-semibold text-teal-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            MHTCET Simu is built and operated by KOV Enterprises LLP, based in
            Pune, Maharashtra.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-primary px-8 py-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Us on This Journey
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
