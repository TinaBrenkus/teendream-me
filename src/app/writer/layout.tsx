import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tina Brenkus — Senior Copywriter & Brand Storyteller",
  description:
    "Senior copywriter with 8+ years of brand campaign experience at New Western, Dallas Market Center, E! Networks, and Best Buy. Writing portfolio and production credits.",
  openGraph: {
    title: "Tina Brenkus — Senior Copywriter & Brand Storyteller",
    description:
      "Senior copywriter with 8+ years of brand campaign experience at New Western, Dallas Market Center, E! Networks, and Best Buy. Writing portfolio and production credits.",
    type: "website",
    siteName: "Tina Brenkus",
    url: "https://teendream.me/writer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tina Brenkus — Senior Copywriter & Brand Storyteller",
    description:
      "Senior copywriter with 8+ years of brand campaign experience at New Western, Dallas Market Center, E! Networks, and Best Buy.",
  },
};

export default function WriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
