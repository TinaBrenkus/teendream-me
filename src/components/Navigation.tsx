"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = ["Projects", "Writing", "About", "Blog", "Contact"];

export default function Navigation() {
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
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] px-6 md:px-10 flex justify-between items-center transition-all duration-400 ${
        scrolled
          ? "bg-linen/92 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div
        className="font-editorial text-xl font-bold tracking-[3px] uppercase cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="text-accent">Teen</span>
        <span className="text-charcoal">Dream</span>
      </div>

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
