export default function AboutSection() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[900px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#3D7C47] mb-4 font-semibold">
          About
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-12">
          A Texas girl who&rsquo;s{" "}
          <span className="italic">toured the world.</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 text-[17px] leading-[1.8] text-med font-editorial">
          <p>
            I started writing professionally in 1997 — covering Fashion Week for
            Women&rsquo;s Wear Daily, creating content for E! Networks, and building
            campaigns for brands that needed words to do real work. Over 20
            years, I&rsquo;ve written for broadcast, print, digital, email, social,
            trade publications, and executive communications. I know how to find
            a brand&rsquo;s voice and make it carry.
          </p>
          <p>
            In 2024, everything changed. I discovered Claude and started
            building — not just writing with AI, but using Claude Code to ship
            real products. In less than a year, I went from zero code experience
            to seven deployed websites on Vercel. I wrote every spec, managed
            every Git workflow, configured every deployment. The sites you see in
            my portfolio aren&rsquo;t templates. They&rsquo;re built from scratch.
          </p>
          <p>
            I also own and operate an 89-acre cattle ranch in Bridgeport, Texas.
            I run an Airbnb. I&rsquo;m launching a farming marketplace and a
            lifestyle brand. I understand what it takes to build something from
            nothing because I do it every day — with my hands and with my
            keyboard.
          </p>
          <p className="text-charcoal italic">
            I&rsquo;m looking for my next role at the intersection of writing,
            building, and AI. If you need someone who can craft a brand narrative
            and also ship the website it lives on — let&rsquo;s talk.
          </p>
        </div>
      </div>
    </section>
  );
}
