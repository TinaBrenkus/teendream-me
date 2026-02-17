import Link from "next/link";

const WRITING_PROJECTS = [
  { name: "New Western", slug: "new-western" },
  { name: "Dallas Market Center", slug: "dallas-market-center" },
  { name: "Authoritive", slug: "authoritive" },
  { name: "A Pep Filled Life", slug: "a-pep-filled-life" },
  { name: "Cooler Rest", slug: "cooler-rest" },
  { name: "Beach Box", slug: "beach-box" },
  { name: "Ranch Hand", slug: "ranch-hand" },
  { name: "Women's Wear Daily", slug: "wwd" },
];

export default function WritingSection() {
  return (
    <section id="writing" className="py-[120px] px-6 md:px-10 bg-linen">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-[#2E6B8A] mb-12 font-semibold">
          Writing Portfolio
        </div>

        <div className="flex flex-col">
          {WRITING_PROJECTS.map((project, i) => (
            <Link
              key={project.slug}
              href={`/writing/${project.slug}`}
              className="group flex justify-between items-center py-5 no-underline transition-colors duration-300 hover:text-accent"
              style={{
                borderBottom:
                  i < WRITING_PROJECTS.length - 1
                    ? "1px solid rgba(44,44,44,0.1)"
                    : "none",
              }}
            >
              <span className="font-editorial text-2xl md:text-3xl text-charcoal group-hover:text-accent transition-colors duration-300">
                {project.name}
              </span>
              <span className="text-light group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
