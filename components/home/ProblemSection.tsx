import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const PROBLEMS = [
  {
    icon: "📄",
    tone: "bg-primary/10 text-primary",
    title: "Scattered PDFs",
    description: "Past papers spread across a dozen Telegram channels and websites.",
  },
  {
    icon: "⏱️",
    tone: "bg-teal/10 text-teal",
    title: "No Timer or Interface",
    description: "Printouts don’t simulate the pressure of a real, timed exam.",
  },
  {
    icon: "📊",
    tone: "bg-primary/10 text-primary",
    title: "No Performance Tracking",
    description: "No way to know which chapters are actually costing you marks.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <Badge>The Problem</Badge>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Students Have the Papers. But No Way to Use Them.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PROBLEMS.map((problem) => (
            <Card key={problem.title}>
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${problem.tone}`}
                aria-hidden="true"
              >
                {problem.icon}
              </span>
              <h3 className="mt-4 font-display font-bold text-ink">{problem.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
