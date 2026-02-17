import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://teendream.me"),
  title: "Tina Brenkus — Writer & AI Builder",
  description:
    "27 years of professional writing meets AI-native development. Portfolio of brand campaigns, editorial work, and 7 websites built with Claude Code.",
  openGraph: {
    title: "Tina Brenkus — Writer & AI Builder",
    description:
      "27 years of professional writing meets AI-native development. Portfolio of brand campaigns, editorial work, and 7 websites built with Claude Code.",
    type: "website",
    siteName: "TeenDream",
    url: "https://teendream.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tina Brenkus — Writer & AI Builder",
    description:
      "27 years of professional writing meets AI-native development. Portfolio of brand campaigns, editorial work, and 7 websites built with Claude Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
