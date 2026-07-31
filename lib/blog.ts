import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const COVERS_DIR = path.join(process.cwd(), "public/images/blog");

export type BlogCategory = "Physics" | "Chemistry" | "Maths" | "Strategy";

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  category: BlogCategory;
  excerpt: string;
  readTime: string;
  coverImage: string;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  content: string;
  /** Resolved path to a generated cover image (public/images/blog/<slug>.png), or null until one exists. */
  coverImageUrl: string | null;
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const coverPath = path.join(COVERS_DIR, `${slug}.png`);
  const coverExists = fs.existsSync(coverPath);
  // Version query param busts Next.js's image-optimizer cache (and the browser's)
  // whenever the cover PNG is regenerated under the same filename.
  const coverImageUrl = coverExists
    ? `/images/blog/${slug}.png?v=${Math.floor(fs.statSync(coverPath).mtimeMs)}`
    : null;
  return {
    slug,
    content,
    ...(data as BlogFrontmatter),
    coverImageUrl,
  };
}

export function getAllPosts(): BlogPost[] {
  return getAllSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedPosts(slug: string, category: BlogCategory, limit = 3): BlogPost[] {
  const others = getAllPosts().filter((post) => post.slug !== slug);
  const sameCategory = others.filter((post) => post.category === category);
  const rest = others.filter((post) => post.category !== category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/**
 * Splits article body along `##` heading boundaries using relative `weights`
 * (e.g. [1, 3, 3] puts the first cut roughly 1/7 of the way through, so a CTA
 * placed there appears early rather than after a long first third).
 */
export function splitContentByWeights(content: string, weights: number[]): string[] {
  const headingIndices = [...content.matchAll(/\n## /g)].map((match) => match.index ?? 0);
  const total = weights.reduce((sum, w) => sum + w, 0);

  if (headingIndices.length >= weights.length) {
    let cumulative = 0;
    const cuts: number[] = [];
    for (let i = 0; i < weights.length - 1; i++) {
      cumulative += weights[i];
      const index = Math.min(
        Math.round((cumulative / total) * headingIndices.length),
        headingIndices.length - 1,
      );
      cuts.push(headingIndices[index]);
    }
    const bounds = [0, ...cuts, content.length];
    return bounds.slice(0, -1).map((start, i) => content.slice(start, bounds[i + 1]));
  }

  // Not enough headings to cut on: fall back to proportional character-length slices.
  let cumulative = 0;
  const bounds = [0];
  for (const weight of weights) {
    cumulative += weight;
    bounds.push(Math.round((cumulative / total) * content.length));
  }
  return bounds.slice(0, -1).map((start, i) => content.slice(start, bounds[i + 1]));
}
