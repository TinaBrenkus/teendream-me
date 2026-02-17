"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
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
          Let&rsquo;s build <span className="italic">something.</span>
        </h2>
        <p className="text-lg text-med mb-12 font-body font-light leading-relaxed">
          Whether you need a brand writer, a content strategist, or someone who
          can do both and ship the website — I&rsquo;d love to hear from you.
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

        {/* Contact info bar */}
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
              label: "GitHub",
              value: "github.com/TinaBrenkus",
              href: "https://github.com/TinaBrenkus",
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
