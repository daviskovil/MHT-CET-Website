import Badge from "@/components/ui/Badge";

const STEPS = [
  {
    step: "Step 1",
    title: "Choose Your Mode",
    description: "Full paper, subject, chapter, or a custom mix.",
    lift: "lg:-translate-y-0",
  },
  {
    step: "Step 2",
    title: "Take the Exam",
    description: "Authentic MHT CET interface with timer and navigation grid.",
    lift: "lg:-translate-y-5",
  },
  {
    step: "Step 3",
    title: "Get Your Intelligence",
    description: "Score, chapter accuracy, weak areas, what to study next.",
    lift: "lg:-translate-y-10",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-lavender">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mx-auto">How It Works</Badge>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Three Steps to a Better Score
          </h2>
        </div>
        <div className="relative mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-1/2 hidden border-t-2 border-dashed border-primary/25 lg:block"
          />
          {STEPS.map((item) => (
            <div key={item.step} className={`relative ${item.lift}`}>
              <div className="relative rounded-2xl border-2 border-primary/40 bg-white p-6 text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)] lg:text-left">
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 font-display text-[11px] font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
