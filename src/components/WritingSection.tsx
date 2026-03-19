"use client";

import Link from "next/link";
import { useState } from "react";

interface WritingProject {
  name: string;
  slug: string;
  role: string;
  description: string;
  tags: string[];
}

const WRITING_PROJECTS: WritingProject[] = [
  {
    name: "New Western",
    slug: "new-western",
    role: "Senior Copywriter | 2022–2025",
    description:
      "Brand voice, email campaigns, social ads, Instagram content, product launches, executive communications, national media placements.",
    tags: ["Brand Voice", "Social", "Email", "Advertising", "Print"],
  },
  {
    name: "Contrarian Thinking / AI Money",
    slug: "ai-money",
    role: "Newsletter Writer (Contract)",
    description:
      "Welcome newsletter and content strategy for AI Money, a new newsletter from Contrarian Thinking (Codie Sanchez). AI-focused content for 800K+ subscriber ecosystem.",
    tags: ["Newsletter", "Content Strategy", "AI", "Brand Voice"],
  },
  {
    name: "Dallas Market Center",
    slug: "dallas-market-center",
    role: "Director of Content | 2019–2020",
    description:
      "Content strategy for 10,000+ brands across home, fashion, lighting, food, and interior design. Campaigns across email, social, video, magazine, event signage.",
    tags: ["Content Strategy", "Video", "Events", "Multi-Channel"],
  },
  {
    name: "E! Networks",
    slug: "e-networks",
    role: "Senior Writer + Content Producer",
    description:
      "Daily scripts for Daily Pop. 26-episode Fashion Week franchise for broadcast and digital. Brand integrations, social content.",
    tags: ["Video", "Scripts", "Broadcast", "Social", "Fashion"],
  },
  {
    name: "Women's Wear Daily",
    slug: "wwd",
    role: "Freelance Copywriter",
    description:
      "Facebook ad copy and sales emails for fashion's leading trade publication. High-conversion short-form ads.",
    tags: ["Social Ads", "Email", "Fashion", "Short-Form"],
  },
  {
    name: "Authoritive",
    slug: "authoritive",
    role: "Freelance Copywriter & Content Strategist",
    description:
      "Landing pages, email sequences, course launches for a NYC startup (acquired by Axio.ai). Campaigns for NYT bestselling authors.",
    tags: ["Landing Pages", "Email", "Launch Campaigns", "Social"],
  },
  {
    name: "A Pep Filled Life",
    slug: "a-pep-filled-life",
    role: "Founder & Creator",
    description:
      "Digital wall art combining humor, Texas charm, and wordplay. Full creative — ideas, copy, design, mockups, SEO, and Etsy shop management.",
    tags: ["Product Copy", "Humor", "Etsy", "Creative"],
  },
  {
    name: "Cooler Rest",
    slug: "cooler-rest",
    role: "In-House Copywriter",
    description:
      "Full marketing launch for an innovative outdoor product. Origin story, product names, descriptions, email, and social media.",
    tags: ["Product Launch", "Brand Voice", "Email", "Social"],
  },
  {
    name: "Beach Box",
    slug: "beach-box",
    role: "In-House Agency Copywriter",
    description:
      "Brainstormed a new name, origin story, and website copy for a vacation rental brand.",
    tags: ["Naming", "Brand Voice", "Web Copy"],
  },
  {
    name: "Ranch Hand",
    slug: "ranch-hand",
    role: "In-House Copywriter",
    description:
      "Brand voice development for a Texas-based truck grille guard manufacturer. Taglines, web copy, product descriptions, PR, and live event activation at SEMA.",
    tags: ["Brand Voice", "Events", "Product Copy", "PR"],
  },
];

export default function WritingSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="writing" className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-4 font-semibold">
          Writing &amp; Campaigns
        </div>
        <p className="text-lg text-med max-w-[600px] mb-16 font-body font-light leading-relaxed">
          Brand voice, campaign copy, and content strategy for lifestyle,
          entertainment, hospitality, and consumer brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WRITING_PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/writing/${project.slug}`}
              className="no-underline text-inherit p-8 transition-all duration-300 cursor-pointer relative block"
              style={{
                background: hoveredProject === i ? "#FFFBF5" : "#FFF5EB",
                border: `1px solid ${
                  hoveredProject === i
                    ? "rgba(224,122,58,0.25)"
                    : "#E8D5C4"
                }`,
                boxShadow:
                  hoveredProject === i
                    ? "0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px rgba(224,122,58,0.1)"
                    : "0 2px 8px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[11px] tracking-[2px] uppercase font-body font-semibold text-accent">
                  {project.role}
                </span>
                <span
                  className={`text-light transition-all duration-300 ${
                    hoveredProject === i
                      ? "text-accent translate-x-0.5"
                      : ""
                  }`}
                >
                  &rarr;
                </span>
              </div>

              <h3
                className="text-2xl font-normal font-editorial mb-3 transition-colors duration-300 text-charcoal"
              >
                {project.name}
              </h3>

              <p className="text-sm leading-relaxed text-med mb-5 font-body font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-[1px] font-body font-medium px-2.5 py-1 bg-accent/5 text-accent/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
