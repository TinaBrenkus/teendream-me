import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BLOG_POSTS = [
  {
    slug: "cant-code-shipped-7-websites",
    title: "I Can\u2019t Code. I Just Shipped 7 Websites.",
    date: "Coming Soon",
    readingTime: "8 min read",
    preview:
      "What happens when a 20-year writer discovers Claude Code \u2014 and decides to build everything herself.",
  },
  {
    slug: "vibe-coders-advantage",
    title: "The Vibe Coder\u2019s Advantage",
    date: "Coming Soon",
    readingTime: "6 min read",
    preview:
      "Why writers who build with AI have an unfair advantage over developers who can\u2019t write and writers who can\u2019t ship.",
  },
  {
    slug: "fashion-week-to-farm-life",
    title: "From Fashion Week to Farm Life",
    date: "Coming Soon",
    readingTime: "10 min read",
    preview:
      "Trading E! Networks for 89 acres. How I ended up raising cattle and building startups in rural Texas.",
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} — TeenDream Blog`,
    description: post.preview,
    openGraph: {
      title: `${post.title} — TeenDream Blog`,
      description: post.preview,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-[120px] pb-20 px-6 md:px-10 min-h-screen bg-linen">
        <article className="max-w-[720px] mx-auto">
          {/* Breadcrumb */}
          <nav className="font-body text-sm text-light mb-10 flex gap-2">
            <Link
              href="/"
              className="text-light no-underline hover:text-accent transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/#blog"
              className="text-light no-underline hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-dark">{post.title}</span>
          </nav>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex gap-4 items-center mb-4 font-body text-sm text-light">
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-6">
              {post.title}
            </h1>
            <p className="text-lg text-med font-body font-light leading-relaxed">
              {post.preview}
            </p>
          </header>

          {/* Content placeholder */}
          <div className="py-20 text-center">
            <div className="inline-block bg-cream border border-border px-8 py-6">
              <p className="text-[13px] tracking-[3px] uppercase font-body font-semibold text-[#7B5EA7] mb-2">
                Coming Soon
              </p>
              <p className="text-med font-body font-light text-sm">
                This post is being written. Check back soon.
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-8 border-t border-border">
            <Link
              href="/#blog"
              className="text-accent font-body text-sm tracking-[2px] uppercase font-semibold no-underline hover:opacity-80 transition-opacity"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
