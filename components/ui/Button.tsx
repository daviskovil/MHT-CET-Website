import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "white";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/90",
  secondary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-ink/15 text-ink hover:border-ink/30 hover:bg-ink/[0.03]",
  white: "bg-white text-ink hover:bg-white/90",
};

const ARROW_CLASSES: Record<Variant, string> = {
  primary: "bg-primary text-white",
  secondary: "bg-white/25 text-white",
  outline: "bg-ink/8 text-ink",
  white: "bg-primary/10 text-primary",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: "md" | "lg";
  children: ReactNode;
  external?: boolean;
  arrow?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  arrow = true,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const sizeClasses = arrow
    ? size === "lg"
      ? "py-2 pl-7 pr-2 text-base"
      : "py-1.5 pl-5 pr-1.5 text-sm"
    : size === "lg"
      ? "px-7 py-2 text-base"
      : "px-5 py-1.5 text-sm";
  const arrowSize = size === "lg" ? "h-9 w-9 text-base" : "h-7 w-7 text-sm";
  const classes = `inline-flex items-center justify-center gap-3 rounded-full font-display font-bold transition-colors ${VARIANT_CLASSES[variant]} ${sizeClasses} ${className}`;

  const content = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className={`flex flex-shrink-0 items-center justify-center rounded-full ${ARROW_CLASSES[variant]} ${arrowSize}`}
        >
          &#8594;
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
