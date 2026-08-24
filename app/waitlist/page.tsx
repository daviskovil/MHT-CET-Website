import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import WaitlistForm from "@/components/waitlist/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "MHTCET Simu is in final development. Join the waitlist to get early access and your free tier the moment we launch.",
  alternates: { canonical: "/waitlist" },
};

const HIGHLIGHTS = [
  {
    icon: "📚",
    title: "16,000+ Questions",
    description: "A decade of MHT CET past year papers, fully tagged by chapter.",
  },
  {
    icon: "🖥️",
    title: "Real Exam Interface",
    description: "The same navigation grid, timer, and section tabs as the actual exam.",
  },
  {
    icon: "📊",
    title: "Chapter Analytics",
    description: "See exactly which chapters are costing you marks, and what to drill next.",
  },
];

export default function WaitlistPage() {
  return (
    <section className="mesh-gradient">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Badge tone="accent" className="mx-auto">
          Coming Soon
        </Badge>
        <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
          Be First to Practise
          <br />
          <span className="text-teal-dark">the Real MHT CET Exam</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          MHTCET Simu is in final development. Join the waitlist and we&#39;ll
          email you the moment early access opens, along with your free tier.
        </p>

        <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:p-8">
          <WaitlistForm />
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <Card key={item.title} className="text-left">
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
  );
}
