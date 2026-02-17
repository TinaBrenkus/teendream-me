export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-[120px] pb-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div
        className="hidden sm:block absolute top-[10%] right-0 w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,59,82,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="hidden sm:block absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(46,107,138,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[900px] relative z-10">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-6 font-semibold">
          Writer &middot; Builder &middot; AI Native
        </div>

        <h1 className="font-editorial text-[clamp(48px,7vw,88px)] leading-[1.05] font-normal text-charcoal mb-8">
          I write for brands.{" "}
          <span className="italic text-accent">I also build things.</span>
        </h1>

        <p className="text-xl leading-[1.7] text-med max-w-[640px] mb-12 font-body font-light">
          27 years of professional writing for E!&nbsp;Networks, Dallas Market
          Center, and Women&rsquo;s Wear Daily. Seven websites built with Claude
          Code + Vercel in the past year. I don&rsquo;t just use AI tools — I
          build with them.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-accent text-white px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-semibold transition-all duration-300 hover:opacity-90 inline-block"
          >
            See What I&rsquo;ve Built
          </a>
          <a
            href="#contact"
            className="bg-transparent text-dark border border-dark/25 px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-medium transition-all duration-300 hover:border-dark/50 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex gap-6 md:gap-12 mt-20 flex-wrap border-t border-border pt-10">
        {[
          { num: "7", label: "Shipped Websites" },
          { num: "27", label: "Years Writing" },
          { num: "\u221E", label: "Ideas Per Minute" },
        ].map((stat) => (
          <div key={stat.label}>
            <div className="text-[40px] font-light text-accent font-editorial">
              {stat.num}
            </div>
            <div className="text-xs tracking-[2px] uppercase text-light font-body mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
