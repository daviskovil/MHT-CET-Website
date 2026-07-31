import type { ReactNode } from "react";

type Tone = "primary" | "accent";

const TONE_CLASSES: Record<Tone, string> = {
  primary: "bg-lavender text-teal-dark",
  accent: "bg-cream text-primary-dark",
};

const DOT_CLASSES: Record<Tone, string> = {
  primary: "bg-teal-dark",
  accent: "bg-primary",
};

export default function Badge({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-display text-xs font-bold ${TONE_CLASSES[tone]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_CLASSES[tone]}`} aria-hidden="true" />
      {children}
    </span>
  );
}
