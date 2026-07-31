import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/study-guides/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(15,23,42,0.10)]"
    >
      <div className="relative aspect-video bg-lavender">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-wide text-muted">
            Cover Image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-display text-xs font-bold uppercase tracking-wide text-primary">
          {post.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold text-ink group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-xs">
          <span className="flex items-center gap-1.5 text-muted">
            <span aria-hidden="true">&#128337;</span>
            {post.readTime}
          </span>
          <span className="font-display font-bold text-teal-dark">Read Article &#8594;</span>
        </div>
      </div>
    </Link>
  );
}
