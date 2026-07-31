import type { TocItem } from "@/lib/toc";

export default function TableOfContents({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  let h2Count = 0;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] lg:block"
    >
      <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
        Contents
      </h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => {
          if (item.level === 2) h2Count += 1;
          return (
            <li key={item.id}>
              {item.level === 2 ? (
                <a
                  href={`#${item.id}`}
                  className="flex gap-2 font-semibold text-ink hover:text-primary"
                >
                  <span className="text-muted">{h2Count}.</span>
                  {item.text}
                </a>
              ) : (
                <a
                  href={`#${item.id}`}
                  className="ml-5 flex items-start gap-2 text-muted hover:text-primary"
                >
                  <span aria-hidden="true" className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                  {item.text}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
