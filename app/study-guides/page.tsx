import type { Metadata } from "next";
import Link from "next/link";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "MHT CET Study Guides: Tips & Strategy",
  description:
    "MHT CET study guides, chapter weightage, and preparation strategy from the team at MHTCET Simu",
  alternates: { canonical: "/study-guides" },
};

export default function StudyGuidesIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold text-ink sm:text-5xl">Study Guides</h1>
            <p className="mt-3 text-lg text-muted">
              Chapter breakdowns, preparation strategy, and study techniques from the team at MHTCET Simu.
            </p>
          </div>
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-ink">Study Guides</span>
          </nav>
        </div>

        <div className="mt-10 border-t border-ink/8 pt-10">
          <BlogExplorer posts={posts} />
        </div>
      </div>
    </section>
  );
}
