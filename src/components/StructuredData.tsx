export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tina Brenkus",
    url: "https://teendream.me",
    jobTitle: "Writer & AI Builder",
    description:
      "27 years of professional writing meets AI-native development. Portfolio of brand campaigns, editorial work, and 7 websites built with Claude Code.",
    sameAs: [
      "https://github.com/TinaBrenkus",
      "https://linkedin.com/in/tinabrenkus",
    ],
    knowsAbout: [
      "Copywriting",
      "Brand Strategy",
      "Content Marketing",
      "AI Development",
      "Web Development",
      "Next.js",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TeenDream",
    url: "https://teendream.me",
    description:
      "Portfolio of Tina Brenkus — Writer & AI Builder",
    author: {
      "@type": "Person",
      name: "Tina Brenkus",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
