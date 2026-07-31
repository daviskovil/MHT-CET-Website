import Badge from "@/components/ui/Badge";

const SOLUTIONS = [
  {
    icon: "🖥️",
    tone: "bg-primary/10 text-primary",
    title: "Authentic Simulator",
    description:
      "Looks and feels exactly like the real MHT CET interface. Timer, navigation grid, section tabs, and more.",
  },
  {
    icon: "🧩",
    tone: "bg-teal/10 text-teal",
    title: "Flexible Test Builder",
    description:
      "Serve any paper by year, shift, subject, chapter, or multi-chapter mix. Total control.",
  },
  {
    icon: "📈",
    tone: "bg-primary/10 text-primary",
    title: "Student Intelligence",
    description:
      "Track accuracy by chapter, speed per question, weak areas, improvement over time.",
  },
  {
    icon: "✨",
    tone: "bg-teal/10 text-teal",
    title: "AI-Generated Questions",
    description:
      "Beyond PYQs, AI creates similar questions for infinite practice on any topic.",
  },
];

export default function StatsBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-stretch justify-center gap-4 sm:flex-row">
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-ink/8 bg-lavender px-8 py-8 text-center">
            <div className="font-display text-4xl font-extrabold tabular-nums text-ink">
              16,000+
            </div>
            <div className="text-sm font-semibold text-muted">
              PCM Questions from 2016-26
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/30 bg-cream px-8 py-8 text-center">
            <Badge tone="accent">Coming Soon</Badge>
            <div className="mt-1 font-display text-2xl font-extrabold text-ink">PCB</div>
            <div className="text-sm font-semibold text-muted">
              Physics, Chemistry, Biology
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${item.tone}`}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <h3 className="mt-4 font-display font-bold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
