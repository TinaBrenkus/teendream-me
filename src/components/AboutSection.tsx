import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-12 font-semibold">
          About
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          {/* Profile image — circular crop */}
          <div className="shrink-0">
            <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-linen shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/portfolio/TinaBrenkusProfilePicOrange.jpg"
                alt="Tina Brenkus"
                width={520}
                height={520}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6 text-[17px] leading-[1.8] text-med font-editorial text-center md:text-left">
            <p>
              I&rsquo;ve spent my career writing for brands and cameras — from
              the writers&rsquo; room at E!&nbsp;Networks to building brand
              voice for national companies. In the past year, I&rsquo;ve also
              become an AI builder, shipping 7 websites with Claude Code and
              Vercel.
            </p>
            <p>
              I think in campaigns, not just executions. I write copy built for
              production, not just presentation. And I bring ideas to every
              brainstorm that make the work better.
            </p>
            <p>
              I&rsquo;m based in Texas. Available for full-time, contract, and
              remote roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
