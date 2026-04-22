"use client";

import Image from "next/image";

const FEATURED_WORK = [
  {
    name: "Contrarian Thinking",
    slug: "contrarian-thinking",
    label: "Newsletter Writing",
    description:
      "Welcome newsletter for Codie Sanchez\u2019s AI Money publication reaching 1M+ subscribers.",
    image: null,
    imageStyle: undefined as string | undefined,
    bgColor: undefined as string | undefined,
    gradient: "from-[#E07A3A] to-[#c96425]",
    textColor: "text-white",
    span: "md:col-span-2",
    href: undefined as string | undefined,
  },
  {
    name: "HeyFarmer.farm",
    slug: null,
    href: "https://www.heyfarmer.farm",
    label: "Website + Brand",
    description:
      "Built the website, brand voice, and content for a North Texas farm-to-table marketplace.",
    image: "/images/portfolio/heyfarmer-logo.png",
    imageStyle: "contain",
    bgColor: "#f0e8d8",
    gradient: undefined as string | undefined,
    textColor: undefined as string | undefined,
    span: "",
  },
  {
    name: "Cooler Rest",
    slug: "cooler-rest",
    label: "Product Launch",
    description:
      "Named the products, wrote the origin story, and launched the entire brand for this outdoor cooler accessory.",
    image: "/images/portfolio/CoolerRestWebsiteHeader.avif",
    imageStyle: undefined as string | undefined,
    bgColor: undefined as string | undefined,
    gradient: undefined as string | undefined,
    textColor: undefined as string | undefined,
    span: "",
    href: undefined as string | undefined,
  },
  {
    name: "New Western",
    slug: "new-western",
    label: "Brand Copywriting",
    description:
      "First-ever copywriter for this national real estate marketplace. Built the brand voice from scratch across every channel.",
    image: "/images/portfolio/FlipSideReport.avif",
    imageStyle: undefined as string | undefined,
    bgColor: undefined as string | undefined,
    gradient: undefined as string | undefined,
    textColor: undefined as string | undefined,
    span: "",
    href: undefined as string | undefined,
  },
  {
    name: "Women\u2019s Wear Daily",
    slug: "wwd",
    label: "Ad Copy + Editorial",
    description:
      "High-conversion Facebook ads and a multi-part subscriber retrospective series for fashion\u2019s leading publication.",
    image: "/images/portfolio/WWDlogo.avif",
    imageStyle: "contain",
    bgColor: "#1a1a1a",
    gradient: undefined as string | undefined,
    textColor: "text-white",
    span: "",
    href: undefined as string | undefined,
  },
  {
    name: "Built in Texas Co.",
    slug: "built-in-texas-co",
    label: "Etsy Shop",
    description:
      "My own digital wall art shop \u2014 humor, Texas charm, and wordplay. I do the whole shebang.",
    image: "/images/portfolio/BuiltInTXCOEtsyBanner.jpg",
    imageStyle: undefined as string | undefined,
    bgColor: undefined as string | undefined,
    gradient: undefined as string | undefined,
    textColor: undefined as string | undefined,
    span: "md:col-span-2",
    href: undefined as string | undefined,
  },
];

export default function FeaturedWorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[3px] uppercase text-accent mb-4 font-semibold">
          Featured Work
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-6">
          Writing that builds{" "}
          <span className="italic text-light">brands.</span>
        </h2>
        <p className="text-lg text-med mb-14 font-body font-light leading-relaxed max-w-[640px]">
          From newsletters reaching a million subscribers to naming products in
          small-town Texas &mdash; here&rsquo;s a look at what I do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FEATURED_WORK.map((project) => {
            const href =
              project.href ||
              (project.slug ? `/writing/${project.slug}` : "#");
            const isExternal = !!project.href;

            return (
              <a
                key={project.name}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl no-underline transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${project.span || ""} ${
                  project.image ? "min-h-[280px]" : "min-h-[240px]"
                }`}
                style={{
                  background: project.bgColor || undefined,
                }}
              >
                {project.image && project.imageStyle === "contain" ? (
                  <>
                    <div className="flex items-center justify-center pt-8 pb-2 px-8">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={220}
                        height={120}
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-7 pt-2">
                      <span
                        className={`text-[11px] tracking-[2px] uppercase font-body font-semibold mb-2 block ${project.textColor ? project.textColor + "/70" : "text-med/70"}`}
                      >
                        {project.label}
                      </span>
                      <p
                        className={`text-sm font-body font-light leading-relaxed ${project.textColor ? project.textColor + "/80" : "text-med"}`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </>
                ) : project.image ? (
                  <>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <span className="text-[11px] tracking-[2px] uppercase font-body font-semibold text-white/70 mb-2 block">
                        {project.label}
                      </span>
                      <h3 className="font-editorial text-2xl md:text-3xl text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/80 font-body font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div
                    className={`h-full bg-gradient-to-br ${project.gradient || "from-cream to-linen"} p-7 flex flex-col justify-end`}
                  >
                    <span
                      className={`text-[11px] tracking-[2px] uppercase font-body font-semibold mb-2 block ${project.textColor ? project.textColor + "/70" : "text-light"}`}
                    >
                      {project.label}
                    </span>
                    <h3
                      className={`font-editorial text-2xl md:text-3xl mb-2 ${project.textColor || "text-charcoal"}`}
                    >
                      {project.name}
                    </h3>
                    <p
                      className={`text-sm font-body font-light leading-relaxed ${project.textColor ? project.textColor + "/80" : "text-med"}`}
                    >
                      {project.description}
                    </p>
                  </div>
                )}

                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm">&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
