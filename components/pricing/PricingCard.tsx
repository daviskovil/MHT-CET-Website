import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: { label: string; href: string; external?: boolean };
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  features,
  cta,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl bg-white p-8 ${
        highlighted
          ? "border-2 border-primary shadow-[0_12px_32px_rgba(245,130,32,0.18)]"
          : "border border-ink/8 shadow-[0_4px_16px_rgba(15,23,42,0.05)]"
      }`}
    >
      {highlighted && (
        <Badge tone="accent" className="mb-4 self-start">
          Recommended
        </Badge>
      )}
      <h3 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
        {name}
      </h3>
      <div className="mt-2 font-display text-3xl font-extrabold text-ink">
        {price}
        {period && <span className="text-base font-normal text-muted"> {period}</span>}
      </div>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-0.5 text-primary" aria-hidden="true">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={cta.href}
        external={cta.external}
        variant={highlighted ? "secondary" : "outline"}
        arrow={false}
        className="mt-8 w-full justify-center"
      >
        {cta.label}
      </Button>
    </div>
  );
}
