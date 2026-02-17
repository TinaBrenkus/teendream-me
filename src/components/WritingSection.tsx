import Link from "next/link";

const WRITING = [
  {
    category: "Brand & Campaign",
    color: "#C43B52",
    items: [
      { text: "E! Networks — Daily Pop show development, brand integrations, Fashion Week spots" },
      { text: "Dallas Market Center — Lightovation, Total Home & Gift, KidsWorld campaigns", slug: "dallas-market-center" },
      { text: "Best Buy / Spotswood — Videos, commercials, product launches, newsletters" },
    ],
  },
  {
    category: "Editorial & Journalism",
    color: "#2E6B8A",
    items: [
      { text: "Women's Wear Daily — Fashion Week coverage on deadline", slug: "wwd" },
      { text: "Yahoo — Digital content and entertainment features" },
      { text: "Freelance — Fashion journalism, celebrity coverage, B2B trade writing" },
    ],
  },
  {
    category: "Digital & Content Strategy",
    color: "#3D7C47",
    items: [
      { text: "New Western Real Estate — Instagram campaigns, brand voice, agent communications", slug: "new-western" },
      { text: "SEO content strategy and long-form articles" },
      { text: "Email campaigns, social media, executive communications and ghostwriting" },
    ],
  },
];

const EXTRA_SAMPLES = [
  { text: "Ranch Hand", slug: "ranch-hand" },
  { text: "Beach Box", slug: "beach-box" },
  { text: "Cooler Rest", slug: "cooler-rest" },
  { text: "A Pep Filled Life", slug: "a-pep-filled-life" },
  { text: "Authoritive", slug: "authoritive" },
];

export default function WritingSection() {
  return (
    <section id="writing" className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#2E6B8A] mb-4 font-semibold">
          Writing Portfolio
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-16">
          20 years of words <span className="italic">that worked.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WRITING.map((section) => (
            <div
              key={section.category}
              className="pl-6"
              style={{ borderLeft: `2px solid ${section.color}` }}
            >
              <h3
                className="text-sm tracking-[2px] uppercase font-body font-semibold mb-5"
                style={{ color: section.color }}
              >
                {section.category}
              </h3>
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="mb-4 pb-4"
                  style={{
                    borderBottom:
                      j < section.items.length - 1
                        ? "1px solid rgba(44,44,44,0.1)"
                        : "none",
                  }}
                >
                  {item.slug ? (
                    <Link
                      href={`/writing/${item.slug}`}
                      className="text-[15px] leading-relaxed text-med font-body font-light no-underline hover:text-accent transition-colors duration-300 block"
                    >
                      {item.text} &rarr;
                    </Link>
                  ) : (
                    <p className="text-[15px] leading-relaxed text-med font-body font-light">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* More writing samples */}
        <div className="mt-12 flex flex-wrap gap-3">
          <span className="text-[11px] tracking-[2px] uppercase text-light font-body font-semibold py-2">
            More samples:
          </span>
          {EXTRA_SAMPLES.map((sample) => (
            <Link
              key={sample.slug}
              href={`/writing/${sample.slug}`}
              className="text-sm font-body text-med no-underline border border-border px-4 py-2 hover:text-accent hover:border-accent transition-colors duration-300"
            >
              {sample.text}
            </Link>
          ))}
        </div>

        {/* How I Work Now */}
        <div className="mt-20 p-8 md:p-12 bg-cream border border-border">
          <h3 className="text-[13px] tracking-[3px] uppercase font-body font-semibold text-accent mb-5">
            How I Work Now
          </h3>
          <p className="text-lg leading-[1.7] text-dark max-w-[800px] font-editorial">
            Claude is my primary AI partner. I use it as a thinking multiplier —
            chaining prompts to explore angles, argue against my own ideas,
            compress research, and generate multi-format content. Then I override
            every output with 20 years of editorial judgment. The AI makes me
            faster. The experience makes me right.
          </p>
        </div>
      </div>
    </section>
  );
}
