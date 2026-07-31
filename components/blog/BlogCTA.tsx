import Button from "@/components/ui/Button";
import { APP_URLS } from "@/lib/urls";

type Variant = "curious" | "practice" | "register";

const VARIANTS: Record<Variant, { icon: string; headline: string; subtext: string; button: string }> = {
  curious: {
    icon: "🎯",
    headline: "See Exactly Where Your Marks Are Hiding",
    subtext: "Get a free chapter-accuracy report on your very first attempt.",
    button: "Try a Free Test",
  },
  practice: {
    icon: "📊",
    headline: "Turn This Data Into a Study Plan",
    subtext: "Chapter-mode tests for every topic in this guide, ready when you are.",
    button: "Start Practising",
  },
  register: {
    icon: "🚀",
    headline: "Ready to Put This Into Practice?",
    subtext: "3 free full papers. No credit card needed.",
    button: "Register Free",
  },
};

export default function BlogCTA({ variant = "register" }: { variant?: Variant }) {
  const { icon, headline, subtext, button } = VARIANTS[variant];

  return (
    <div className="not-prose my-10 flex flex-col items-center gap-3 rounded-2xl bg-teal px-6 py-8 text-center">
      <span className="text-3xl" aria-hidden="true">
        {icon}
      </span>
      <h3 className="font-display text-xl font-bold text-ink">{headline}</h3>
      <p className="text-sm text-ink/70">{subtext}</p>
      <div className="mt-2">
        <Button href={APP_URLS.register} external>
          {button}
        </Button>
      </div>
    </div>
  );
}
