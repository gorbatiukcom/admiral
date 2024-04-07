import { MetadataRoute } from "next";

import { PortfolioProjects } from "@/constants/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolio = PortfolioProjects.map((project) => ({
    url: `https://admiralinterior.com/portfolio/${project.projectId}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://admiralinterior.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://admiralinterior.com/services",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://admiralinterior.com/portfolio",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://admiralinterior.com/contacts",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...portfolio,
  ];
}

// yearly monthly weekly
// priority 0.7 — default
