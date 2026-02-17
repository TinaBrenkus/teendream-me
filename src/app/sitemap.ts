import type { MetadataRoute } from "next";
import { WRITING_SAMPLES } from "@/data/writing-samples";

export default function sitemap(): MetadataRoute.Sitemap {
  const writingPages = WRITING_SAMPLES.map((sample) => ({
    url: `https://teendream.me/writing/${sample.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://teendream.me",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...writingPages,
  ];
}
