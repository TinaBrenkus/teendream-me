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
          I write for brands{" "}
          <span className="italic text-accent">
            and I build content with AI.
          </span>
        </h1>

        <p className="text-xl leading-[1.7] text-med max-w-[640px] mb-12 font-body font-light">
          Senior copywriter with 8+ years of brand campaign experience across
          social, digital, video, email, and experiential. I&rsquo;ve also built
          and deployed 7 websites using Claude Code + Vercel — because the best
          way to understand AI is to build with it.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#writing"
            className="bg-accent text-white px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-semibold transition-all duration-300 hover:opacity-90 inline-block"
          >
            See My Writing
          </a>
          <a
            href="#projects"
            className="bg-transparent text-dark border border-dark/25 px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-medium transition-all duration-300 hover:border-dark/50 inline-block"
          >
            See What I&rsquo;ve Built
          </a>
        </div>
      </div>
    </section>
  );
}
