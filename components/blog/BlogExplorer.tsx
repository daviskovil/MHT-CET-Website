"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import type { BlogCategory, BlogPost } from "@/lib/blog";

const CATEGORIES: BlogCategory[] = ["Physics", "Chemistry", "Maths", "Strategy"];

export default function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<"All" | BlogCategory>("All");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const category of CATEGORIES) {
      counts[category] = posts.filter((post) => post.category === category).length;
    }
    return counts;
  }, [posts]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        query.length === 0 ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, search]);

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
      <div>
        <p className="text-sm text-muted">
          Showing {filtered.length} of {posts.length} article{posts.length === 1 ? "" : "s"}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-10 text-sm text-muted">No articles match your search yet.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>

      <aside className="flex flex-col gap-6">
        <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-ink/12 bg-lavender px-3 py-2.5">
            <span className="text-muted" aria-hidden="true">
              &#128269;
            </span>
            <input
              id="blog-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm text-ink placeholder:text-muted/70 focus:outline-none"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-ink/8 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)]">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-muted">
            Categories
          </h2>
          <ul className="mt-4 flex flex-col gap-1">
            <li>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                aria-pressed={activeCategory === "All"}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                  activeCategory === "All" ? "bg-cream text-primary-dark" : "text-ink hover:bg-lavender"
                }`}
              >
                All Articles
                <span className="tabular-nums">{posts.length}</span>
              </button>
            </li>
            {CATEGORIES.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                    activeCategory === category
                      ? "bg-cream text-primary-dark"
                      : "text-ink hover:bg-lavender"
                  }`}
                >
                  {category}
                  <span className="tabular-nums">{categoryCounts[category]}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
