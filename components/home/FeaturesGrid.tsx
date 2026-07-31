import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const FEATURES = [
  {
    icon: "🧩",
    tone: "bg-primary/10 text-primary",
    title: "6 Test Modes",
    description: "Full paper, subject, chapter, multi-chapter, weak area, custom mix.",
  },
  {
    icon: "🖥️",
    tone: "bg-teal/10 text-teal",
    title: "Authentic Interface",
    description: "Colour-coded nav grid, timer, section tabs, mark for review.",
  },
  {
    icon: "∑",
    tone: "bg-primary/10 text-primary",
    title: "LaTeX Math Rendering",
    description: "All equations display perfectly.",
  },
  {
    icon: "🔒",
    tone: "bg-teal/10 text-teal",
    title: "Answer Key Security",
    description: "Answers hidden during exam, revealed only after submit.",
  },
  {
    icon: "📈",
    tone: "bg-primary/10 text-primary",
    title: "Deep Analytics",
    description: "Accuracy by chapter, speed per question, improvement over time.",
  },
  {
    icon: "✨",
    tone: "bg-teal/10 text-teal",
    title: "AI Question Generation",
    description: "Infinite similar questions beyond PYQs.",
    comingSoon: true,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mx-auto">What&#39;s Inside</Badge>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Everything You Need to Ace MHT CET
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title}>
              <div className="flex items-start justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${feature.tone}`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                {feature.comingSoon && <Badge tone="accent">Soon</Badge>}
              </div>
              <h3 className="mt-4 font-display font-bold text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
