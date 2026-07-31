import Link from "next/link";
import Button from "@/components/ui/Button";
import { APP_URLS } from "@/lib/urls";

const PLANS = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    description: "3 tests / month",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹5,999",
    period: "/ year",
    description: "Unlimited everything",
    highlighted: true,
  },
];

export default function PricingPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          Simple Pricing. No Surprises.
        </h2>
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl bg-white p-8 text-left shadow-[0_4px_16px_rgba(15,23,42,0.06)] ${
                plan.highlighted ? "border-2 border-primary" : "border border-ink/8"
              }`}
            >
              <div className="font-display text-xs font-bold uppercase tracking-widest text-muted">
                {plan.name}
              </div>
              <div className="mt-3 font-display text-3xl font-extrabold text-ink">
                {plan.price}
                <span className="text-base font-normal text-muted"> {plan.period}</span>
              </div>
              <div className="mt-2 text-sm text-muted">{plan.description}</div>
            </div>
          ))}
        </div>
        <Link
          href="/institutes"
          className="mt-8 inline-block font-display text-sm font-bold text-teal-dark hover:underline"
        >
          For Institutes &#8594;
        </Link>
        <div className="mt-6">
          <Button href={APP_URLS.register} external size="lg">
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  );
}
