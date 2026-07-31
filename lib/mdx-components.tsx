import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { slugify } from "@/lib/slugify";

function textOf(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(textOf).join("");
  return "";
}

export const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={slugify(textOf(props.children))}
      className="mt-10 mb-4 scroll-mt-24 font-display text-2xl font-bold text-ink"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={slugify(textOf(props.children))}
      className="mt-8 mb-3 scroll-mt-24 font-display text-xl font-bold text-ink"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-5 border-b border-primary-dark/25 pb-5 text-base leading-relaxed text-ink"
      {...props}
    />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-ink" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-ink" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="leading-relaxed" {...props} />,
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="font-semibold text-primary underline-offset-4 hover:underline" {...props} />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => (
    <strong className="font-bold text-ink" {...props} />
  ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-4 rounded-r-lg border-l-4 border-primary bg-lavender py-2 pl-4 italic text-muted"
      {...props}
    />
  ),
};
