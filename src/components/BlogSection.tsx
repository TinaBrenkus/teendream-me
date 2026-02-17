const BLOG_POSTS = [
  {
    title: "I Can\u2019t Code. I Just Shipped 7 Websites.",
    date: "Coming Soon",
    preview:
      "What happens when a 20-year writer discovers Claude Code \u2014 and decides to build everything herself.",
  },
  {
    title: "The Vibe Coder\u2019s Advantage",
    date: "Coming Soon",
    preview:
      "Why writers who build with AI have an unfair advantage over developers who can\u2019t write and writers who can\u2019t ship.",
  },
  {
    title: "From Fashion Week to Farm Life",
    date: "Coming Soon",
    preview:
      "Trading E! Networks for 89 acres. How I ended up raising cattle and building startups in rural Texas.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#7B5EA7] mb-4 font-semibold">
          Blog
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-12">
          Dispatches from the <span className="italic">frontier.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.title}
              className="bg-cream border border-border p-8 transition-all duration-300"
            >
              <div className="text-xs text-[#7B5EA7] font-body tracking-[2px] uppercase mb-4 font-semibold">
                {post.date}
              </div>
              <h3 className="text-[22px] font-normal font-editorial leading-[1.3] text-charcoal mb-3">
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed text-med font-body font-light">
                {post.preview}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
