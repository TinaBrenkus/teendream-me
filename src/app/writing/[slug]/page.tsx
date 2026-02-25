import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WRITING_SAMPLES } from "@/data/writing-samples";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WRITING_SAMPLES.map((sample) => ({
    slug: sample.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sample = WRITING_SAMPLES.find((s) => s.slug === slug);
  if (!sample) return {};

  return {
    title: `${sample.client} — Tina Brenkus`,
    description: sample.description,
    openGraph: {
      title: `${sample.client} — Tina Brenkus`,
      description: sample.description,
    },
  };
}

export default async function WritingSamplePage({ params }: PageProps) {
  const { slug } = await params;
  const sample = WRITING_SAMPLES.find((s) => s.slug === slug);

  if (!sample) {
    notFound();
  }

  const paragraphs = sample.content.split("\n\n");

  // Parse [text](url) markdown links into React elements
  function renderWithLinks(text: string) {
    const parts = text.split(/(\[.+?\]\(.+?\))/g);
    return parts.map((part, i) => {
      const match = part.match(/^\[(.+?)\]\((.+?)\)$/);
      if (match) {
        return (
          <a
            key={i}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent no-underline border-b border-accent/30 hover:border-accent transition-colors"
          >
            {match[1]}
          </a>
        );
      }
      return part;
    });
  }

  return (
    <>
      <Navigation />
      <main className="pt-[120px] pb-20 px-6 md:px-10 min-h-screen bg-linen">
        <div className="max-w-[800px] mx-auto">
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
              href="/#writing"
              className="text-light no-underline hover:text-accent transition-colors"
            >
              Writing
            </Link>
            <span>/</span>
            <span className="text-dark">{sample.client}</span>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <span className="inline-block text-[11px] tracking-[2px] uppercase font-body font-semibold text-accent bg-accent-soft px-3 py-1.5 mb-4">
              {sample.industry}
            </span>
            <h1 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-4">
              {sample.title}
            </h1>
            <p className="text-lg text-med font-body font-light leading-relaxed">
              {sample.description}
            </p>
          </div>

          {/* Content */}
          <div className="mb-16">
            {paragraphs.map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const text = paragraph.slice(2, -2);
                return (
                  <h3
                    key={i}
                    className="font-editorial text-xl text-charcoal mt-10 mb-4"
                  >
                    {renderWithLinks(text)}
                  </h3>
                );
              }
              if (paragraph.startsWith("**")) {
                const match = paragraph.match(/^\*\*(.+?)\*\*\s*([\s\S]*)/);
                if (match) {
                  return (
                    <div key={i} className="mt-10 mb-4">
                      <h3 className="font-editorial text-xl text-charcoal mb-2">
                        {renderWithLinks(match[1])}
                      </h3>
                      <p className="text-[16px] leading-[1.8] text-med font-body font-light">
                        {renderWithLinks(match[2])}
                      </p>
                    </div>
                  );
                }
              }
              return (
                <p
                  key={i}
                  className="text-[16px] leading-[1.8] text-med font-body font-light mb-6"
                >
                  {renderWithLinks(paragraph)}
                </p>
              );
            })}
          </div>

          {/* Links */}
          {sample.links && sample.links.length > 0 && (
            <div className="mb-16 p-8 bg-cream border border-border">
              <h3 className="text-[13px] tracking-[3px] uppercase font-body font-semibold text-accent mb-5">
                Related Links
              </h3>
              <div className="flex flex-col gap-3">
                {sample.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark font-body text-[15px] no-underline border-b border-transparent hover:border-accent transition-colors inline-block w-fit"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Image gallery */}
          {sample.images.length > 0 && (
            <div className="mb-16">
              <h3 className="text-[13px] tracking-[3px] uppercase font-body font-semibold text-light mb-6">
                Project Images
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sample.images.map((img) => (
                  <div
                    key={img}
                    className="relative bg-cream border border-border overflow-hidden"
                  >
                    <Image
                      src={`/images/portfolio/${img}`}
                      alt={`${sample.client} - ${img.replace(/\.\w+$/, "").replace(/([A-Z])/g, " $1").trim()}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="pt-8 border-t border-border">
            <Link
              href="/#writing"
              className="text-accent font-body text-sm tracking-[2px] uppercase font-semibold no-underline hover:opacity-80 transition-opacity"
            >
              &larr; Back to Writing Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
