"use client";

import { useState, useEffect, useCallback, FormEvent } from "react";
import Image from "next/image";

/* ─── Writer Page Navigation ─── */
const NAV_ITEMS = ["Work", "Production", "About", "Contact"];

function WriterNav() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((s) => s.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] px-6 md:px-10 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-linen/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <a
        href="/"
        className="font-editorial text-xl font-bold tracking-[3px] uppercase no-underline"
      >
        <span className="text-charcoal">Tina Brenkus</span>
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-8 items-center">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className={`text-[13px] tracking-[2px] uppercase font-body font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer ${
              activeSection === item.toLowerCase()
                ? "text-accent"
                : "text-light hover:text-dark"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-linen/95 backdrop-blur-xl border-b border-border md:hidden flex flex-col py-6 px-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-left text-[13px] tracking-[2px] uppercase font-body font-medium py-3 bg-transparent border-none cursor-pointer ${
                activeSection === item.toLowerCase()
                  ? "text-accent"
                  : "text-light"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function WriterHero() {
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
          Copywriter &middot; Brand Strategist &middot; Producer
        </div>

        <h1 className="font-editorial text-[clamp(48px,7vw,88px)] leading-[1.05] font-normal text-charcoal mb-8">
          Senior Copywriter &{" "}
          <span className="italic text-accent">Brand Storyteller.</span>
        </h1>

        <p className="text-xl leading-[1.7] text-med max-w-[640px] mb-12 font-body font-light">
          8+ years of brand copywriting and content strategy across digital,
          social, video, email, retail, DTC, and experiential. Plus a decade of
          entertainment production that means I write copy built for cameras,
          stages, and screens — not just decks.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#work"
            className="bg-accent text-white px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-semibold transition-all duration-300 hover:opacity-90 inline-block"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent text-dark border border-dark/25 px-8 py-3.5 text-sm font-body tracking-[2px] uppercase font-medium transition-all duration-300 hover:border-dark/50 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Campaign Work ─── */
const BRAND_WORK = [
  {
    company: "New Western Real Estate",
    role: "Senior Copywriter",
    years: "2022–2025",
    description:
      "Built the brand voice from scratch for a national real estate investment marketplace. Wrote across every channel — email campaigns, social ads, Instagram content, product launches, executive communications, agent onboarding, and national media placements. Partnered daily with designers, strategists, and sales leadership across a network of 2,000+ agents.",
    tags: ["Brand Voice", "Email", "Social", "Advertising", "Internal Comms"],
    color: "#253c59",
  },
  {
    company: "Dallas Market Center",
    role: "Director of Content",
    years: "2019–2020",
    description:
      "Led content strategy for one of the largest wholesale marketplaces in the world — 5 million square feet, 10,000+ brands across home, fashion, lighting, tech, food, and interior design. Developed brand voice and campaigns across email, social, website, magazine, audio, video, and event signage. Directed video production and managed agencies from concept through delivery.",
    tags: [
      "Content Strategy",
      "Video Production",
      "Multi-Channel",
      "B2B + B2C",
    ],
    color: "#3D7C47",
  },
  {
    company: "Espresso Agency",
    role: "Senior Copywriter + Content Marketer",
    years: "2017–2018",
    description:
      "Led content creation and strategy for an internal creative agency in Shiner, Texas. Wrote copy across digital, video, email campaigns, commercials, company launches, sales pitches, press releases, corporate communications, print, and social media for a diverse client roster.",
    tags: ["Agency", "Multi-Client", "Full-Channel Copy"],
    color: "#8B6914",
  },
];

function BrandWorkSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-4 font-semibold">
          Brand Campaign Work
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-4">
          Writing that builds{" "}
          <span className="text-light">brands.</span>
        </h2>
        <p className="text-lg text-med max-w-[600px] mb-16 font-body font-light leading-relaxed">
          From startup brand voice to enterprise content strategy — copy that
          drives campaigns, not just fills decks.
        </p>

        <div className="flex flex-col gap-6">
          {BRAND_WORK.map((project, i) => (
            <div
              key={project.company}
              className="p-8 transition-all duration-300"
              style={{
                background: hovered === i ? "#FFF8F0" : "#FAF0E6",
                border: `1px solid ${
                  hovered === i
                    ? project.color + "30"
                    : "rgba(44,44,44,0.1)"
                }`,
                boxShadow:
                  hovered === i
                    ? `0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px ${project.color}20`
                    : "0 2px 8px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                <div>
                  <h3
                    className="text-2xl font-normal font-editorial mb-1 transition-colors duration-300"
                    style={{
                      color: hovered === i ? "#1A1A2E" : "#2C2C2C",
                    }}
                  >
                    {project.company}
                  </h3>
                  <div className="text-sm text-med font-body font-light">
                    {project.role}
                  </div>
                </div>
                <span
                  className="text-[11px] tracking-[2px] uppercase font-body font-semibold px-2.5 py-1 shrink-0 self-start"
                  style={{
                    color: project.color,
                    background: project.color + "10",
                  }}
                >
                  {project.years}
                </span>
              </div>

              <p className="text-[15px] leading-relaxed text-med mb-5 font-body font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-[1px] font-body text-light px-3 py-1.5 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Editorial & Freelance ─── */
function EditorialSection() {
  return (
    <section className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#8B6914] mb-4 font-semibold">
          Editorial &amp; Freelance
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-16">
          Select <span className="text-light">client work.</span>
        </h2>

        {/* Authoritive */}
        <div className="mb-16">
          <h3 className="text-2xl font-normal font-editorial text-charcoal mb-2">
            Authoritive
          </h3>
          <div className="text-sm text-light font-body mb-4">
            NYC Startup &middot; Acquired by Axio.ai
          </div>
          <p className="text-[15px] leading-relaxed text-med mb-8 font-body font-light max-w-[800px]">
            Freelance copywriter for a platform co-founded by literary agent
            Christy Fletcher and entrepreneur Eric Ries (
            <em>The Lean Startup</em>). Created marketing content across landing
            pages, sales email sequences, course content, social media, and
            launch campaigns.
          </p>

          <div className="flex flex-col gap-6 pl-0 md:pl-6 border-l-0 md:border-l-2 border-border">
            <div>
              <h4 className="text-lg font-editorial text-charcoal mb-1.5">
                Your Confidence Code
              </h4>
              <div className="text-xs text-light font-body mb-2">
                Katty Kay &amp; Claire Shipman &middot; NY Times Bestseller
              </div>
              <p className="text-[15px] leading-relaxed text-med font-body font-light">
                Wrote sales landing page strategy, email newsletters, sales
                email sequences, and course content.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-editorial text-charcoal mb-1.5">
                The Future-Ready Leader
              </h4>
              <div className="text-xs text-light font-body mb-2">
                Dr. Tasha Eurich
              </div>
              <p className="text-[15px] leading-relaxed text-med font-body font-light">
                Created landing page copy and content-driven email campaigns
                targeting business executives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-editorial text-charcoal mb-1.5">
                Write Day by Day
              </h4>
              <div className="text-xs text-light font-body mb-2">
                Courtney Maum
              </div>
              <p className="text-[15px] leading-relaxed text-med font-body font-light">
                Launched and managed Instagram channel with full editorial
                calendar for a 30-day SMS writing program.
              </p>
            </div>
          </div>
        </div>

        {/* WWD */}
        <div>
          <h3 className="text-2xl font-normal font-editorial text-charcoal mb-2">
            Women&rsquo;s Wear Daily
          </h3>
          <p className="text-[15px] leading-relaxed text-med mb-6 font-body font-light max-w-[800px]">
            Created sales email and Facebook ad copy for fashion&rsquo;s leading
            industry magazine. Wrote high-conversion short-form ads with strict
            character count constraints targeting fashion students and industry
            newcomers.
          </p>

          <div className="flex flex-col gap-4 max-w-[600px]">
            <blockquote className="border-l-2 border-accent/30 pl-5 py-2 text-med font-editorial text-[15px] leading-relaxed italic">
              &ldquo;Kicking off a fashion career? Get ahead w/ industry news,
              trends &amp; event coverage w/ WWD. One year is only $1.50 a
              week.&rdquo;
            </blockquote>
            <blockquote className="border-l-2 border-accent/30 pl-5 py-2 text-med font-editorial text-[15px] leading-relaxed italic">
              &ldquo;Hey, your boss reads it! Get fashion-smart with WWD for 60%
              off. A $1.50 a week for 1 year gets you inside and
              ahead.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Entertainment & Production ─── */
const PRODUCTION_CREDITS = [
  {
    company: "E! Networks",
    description:
      "Wrote daily scripts and digital copy for Daily Pop. Developed a 26-episode Fashion Week video franchise for broadcast and digital. Wrote and produced segments for E! True Hollywood Story.",
  },
  {
    company: "NBC Universal / Access Hollywood",
    description:
      "Wrote and produced video segments. Celebrity interviews on red carpets. Scripts delivered under tight daily deadlines.",
  },
  {
    company: "Best Buy",
    description:
      "Recruited from LA to launch content for Best Buy\u2019s first ad-supported media network. Led entertainment strategy, created original programming, expanded into online and social channels. Production that directly generated ad revenue.",
  },
  {
    company: "Yahoo",
    description:
      "Led digital video content for Yahoo Movies, Yahoo Style, and Yahoo Fitness. Content plans, scripts, daily video production, editorial team management.",
  },
  {
    company: "TV Guide Network",
    description:
      "Senior producer for daily entertainment news show hosted by Chris Harrison. Produced 500+ shows. Breaking news on deadline.",
  },
  {
    company: "Endemol / Icon Network",
    description:
      "Part of the team that launched Michelle Phan\u2019s Icon Network on YouTube. Concept development, scripts, trend curation.",
  },
];

function ProductionSection() {
  return (
    <section id="production" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#3D7C47] mb-4 font-semibold">
          Entertainment &amp; Production
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-4">
          A decade behind{" "}
          <span className="text-light">the camera.</span>
        </h2>
        <p className="text-lg text-med max-w-[700px] mb-16 font-body font-light leading-relaxed">
          Before I was a brand copywriter, I spent over a decade writing and
          producing video content for major entertainment and media companies.
          This background means I write scripts that are shootable, I understand
          on-set needs, and I deliver under daily broadcast deadlines. Most
          copywriters can&rsquo;t say that.
        </p>

        <div className="flex flex-col">
          {PRODUCTION_CREDITS.map((credit, i) => (
            <div
              key={credit.company}
              className={`py-8 ${
                i < PRODUCTION_CREDITS.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <h3 className="text-xl font-normal font-editorial text-charcoal mb-2">
                {credit.company}
              </h3>
              <p className="text-[15px] leading-relaxed text-med font-body font-light max-w-[800px]">
                {credit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function WriterAbout() {
  return (
    <section id="about" className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[900px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#3D7C47] mb-12 font-semibold">
          About
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start">
          <div className="shrink-0">
            <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden border-4 border-linen shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/portfolio/tina-s-profile-pic-2025-2-dOqD394V1VsyO441.avif"
                alt="Tina Brenkus"
                width={520}
                height={520}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 text-[17px] leading-[1.8] text-med font-editorial text-center md:text-left">
            <p>
              I&rsquo;ve spent my career writing for brands and cameras — from
              the writers&rsquo; room at E!&nbsp;Networks to building brand
              voice for national companies. I think in campaigns, not just
              executions. I write copy that&rsquo;s built for production, not
              just presentation.
            </p>
            <p>
              And I care more about the work being right than being right about
              the work.
            </p>
            <p className="text-light italic">
              Based in North Texas. Available for full-time, contract, and
              remote roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function WriterContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xgolyzly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[700px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#8B6914] mb-4 font-semibold">
          Contact
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-4">
          Let&rsquo;s work <span className="italic">together.</span>
        </h2>
        <p className="text-lg text-med mb-12 font-body font-light leading-relaxed">
          Looking for a senior copywriter who can own brand voice, lead
          campaigns, and deliver across every channel? I&rsquo;d love to hear
          from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] tracking-[2px] uppercase text-light mb-2 font-body font-semibold">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-linen border border-border px-4 py-3.5 text-dark text-[15px] font-body outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-[11px] tracking-[2px] uppercase text-light mb-2 font-body font-semibold">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-linen border border-border px-4 py-3.5 text-dark text-[15px] font-body outline-none transition-colors duration-300 focus:border-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] tracking-[2px] uppercase text-light mb-2 font-body font-semibold">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-linen border border-border px-4 py-3.5 text-dark text-[15px] font-body outline-none resize-y transition-colors duration-300 focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-accent text-white px-10 py-4 text-sm font-body tracking-[2px] uppercase font-semibold transition-all duration-300 hover:opacity-90 disabled:opacity-60 border-none cursor-pointer"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-[#3D7C47] font-body text-sm font-medium">
              Message sent! I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-accent font-body text-sm font-medium">
              Something went wrong. Please email me directly at
              tinalbrenkus@gmail.com
            </p>
          )}
        </form>

        {/* Contact info bar — no GitHub */}
        <div className="mt-12 pt-8 border-t border-border flex gap-10 flex-wrap">
          {[
            {
              label: "Email",
              value: "tinalbrenkus@gmail.com",
              href: "mailto:tinalbrenkus@gmail.com",
            },
            {
              label: "Phone",
              value: "310-867-3732",
              href: "tel:3108673732",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/tinabrenkus",
              href: "https://linkedin.com/in/tinabrenkus",
            },
          ].map((link) => (
            <div key={link.label}>
              <div className="text-[11px] tracking-[2px] uppercase text-light mb-1.5 font-body">
                {link.label}
              </div>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-dark no-underline text-[15px] font-body border-b border-transparent hover:border-accent transition-colors duration-300"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function WriterPage() {
  return (
    <>
      <WriterNav />
      <WriterHero />
      <BrandWorkSection />
      <EditorialSection />
      <ProductionSection />
      <WriterAbout />
      <WriterContact />
      <footer className="px-6 md:px-10 py-10 bg-linen border-t border-border flex justify-center">
        <div className="text-[13px] text-light font-body">
          &copy; 2026 Tina Brenkus
        </div>
      </footer>
    </>
  );
}
