"use client";

import { useState } from "react";
import { PROJECTS } from "@/data/projects";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-[120px] px-6 md:px-10 bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="font-body text-[13px] tracking-[4px] uppercase text-accent mb-4 font-semibold">
          Shipped Projects
        </div>
        <h2 className="font-editorial text-[clamp(36px,5vw,56px)] font-normal leading-[1.1] text-charcoal mb-4">
          Built with Claude Code.{" "}
          <span className="text-light">Deployed on Vercel.</span>
        </h2>
        <p className="text-lg text-med max-w-[600px] mb-16 font-body font-light leading-relaxed">
          Every project below went from concept to live product — I wrote the
          specs, built with AI, managed Git workflows, configured deployments,
          and shipped.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit p-8 transition-all duration-400 cursor-pointer relative block"
              style={{
                background:
                  hoveredProject === i ? "#FFF8F0" : "#FAF0E6",
                border: `1px solid ${
                  hoveredProject === i
                    ? project.color + "30"
                    : "rgba(44,44,44,0.1)"
                }`,
                boxShadow:
                  hoveredProject === i
                    ? `0 8px 32px rgba(0,0,0,0.06), 0 0 0 1px ${project.color}20`
                    : "0 2px 8px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className="text-[11px] tracking-[2px] uppercase font-body font-semibold px-2.5 py-1"
                  style={{
                    color: project.color,
                    background: project.color + "10",
                  }}
                >
                  {project.tag}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    hoveredProject === i ? project.color : "#8A7F7F"
                  }
                  strokeWidth="2"
                  className="transition-all duration-300"
                  style={{
                    transform:
                      hoveredProject === i
                        ? "translate(2px, -2px)"
                        : "none",
                  }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              <h3
                className="text-2xl font-normal font-editorial mb-3 transition-colors duration-300"
                style={{
                  color:
                    hoveredProject === i ? "#1A1A2E" : "#2C2C2C",
                }}
              >
                {project.name}
              </h3>

              <p className="text-sm leading-relaxed text-med mb-5 font-body font-light">
                {project.desc}
              </p>

              <div className="text-xs text-light font-body tracking-[1px]">
                {project.stack}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
