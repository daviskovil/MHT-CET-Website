import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/blog/BlogCard";
import BlogCTA from "@/components/blog/BlogCTA";
import TableOfContents from "@/components/blog/TableOfContents";
import { getAllPosts, getAllSlugs, getPostBySlug, getRelatedPosts, splitContentByWeights } from "@/lib/blog";
import { extractFaqs } from "@/lib/faq";
import { mdxComponents } from "@/lib/mdx-components";
import { SITE_URL } from "@/lib/seo";
import { extractToc } from "@/lib/toc";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const ogImage = post.coverImageUrl ? [{ url: post.coverImageUrl, width: 1600, height: 900, alt: post.title }] : undefined;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/study-guides/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      images: ogImage?.map((image) => image.url),
    },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getAllSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getPostBySlug(slug);
  const toc = extractToc(post.content);
  const related = getRelatedPosts(slug, post.category);
  const faqs = extractFaqs(post.content);
  const [part1, part2, part3] = splitContentByWeights(post.content, [1, 3, 3]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    url: `${SITE_URL}/study-guides/${post.slug}`,
    ...(post.coverImageUrl && { image: `${SITE_URL}${post.coverImageUrl}` }),
  };

  // FAQPage schema surfaces each Q&A pair directly to search engines and AI
  // answer engines (Google's "People Also Ask", AI Overviews, ChatGPT/Perplexity
  // citations), rather than requiring them to parse it out of prose.
  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/study-guides" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
          &#8592; Back to Study Guides
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="min-w-0">
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">&#128100;</span>
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">&#128197;</span>
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">&#128337;</span>
                {post.readTime}
              </span>
            </div>

            <div className="mt-8 border-t border-ink/8" />

            <div className="relative mt-8 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-lavender">
              {post.coverImageUrl ? (
                <Image
                  src={post.coverImageUrl}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 800px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-wide text-muted">
                  Cover Image
                </div>
              )}
            </div>

            <div className="mt-10">
              <MDXRemote source={part1} components={mdxComponents} />
              <BlogCTA variant="curious" />
              <MDXRemote source={part2} components={mdxComponents} />
              <BlogCTA variant="practice" />
              <MDXRemote source={part3} components={mdxComponents} />
              <BlogCTA variant="register" />
            </div>
          </div>

          <TableOfContents items={toc} />
        </div>

        {related.length > 0 && (
          <div className="mt-16 border-t border-ink/8 pt-10">
            <h2 className="text-2xl font-bold text-ink">Related Posts</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
