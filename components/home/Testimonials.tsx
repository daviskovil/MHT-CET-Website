import Badge from "@/components/ui/Badge";

const TESTIMONIALS = [
  {
    quote:
      "The chapter-wise analytics showed me I was losing marks in Organic Chemistry. I wouldn’t have known that from a printed paper.",
    name: "Rohan Deshmukh",
    featured: false,
  },
  {
    quote:
      "The exam interface feels exactly like the real MHT CET. I stopped panicking about the timer once I’d practised on this.",
    name: "Aditi Kulkarni",
    featured: true,
  },
  {
    quote:
      "Finally a place with all the past papers in one interface instead of chasing PDFs across ten Telegram groups.",
    name: "Sanika Patil",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mx-auto">Reviews</Badge>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            What Students Are Saying
          </h2>
        </div>
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl bg-white p-7 transition-transform ${
                testimonial.featured
                  ? "border border-ink/8 shadow-[0_16px_36px_rgba(15,23,42,0.10)] lg:scale-105"
                  : "border border-ink/8 shadow-[0_4px_16px_rgba(15,23,42,0.05)] opacity-90"
              }`}
            >
              <div className="text-primary" aria-label="5 out of 5 stars">
                {"★★★★★"}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{testimonial.quote}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 text-xs font-bold text-teal-dark">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-ink">{testimonial.name}</div>
                  <div className="text-xs text-muted">MHT CET 2027 Aspirant, Pune</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
