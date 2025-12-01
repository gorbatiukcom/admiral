import { MetadataRoute } from "next";

import { PortfolioProjects } from "../constants/portfolio";
import { getBlogPosts } from "../utils/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  const blogUrl = "https://budcor.com/blog";

  const blogPostsSitemap = posts.map((post) => ({
    url: `${blogUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const portfolioProjectsSitemap = PortfolioProjects.map((project) => ({
    url: `https://budcor.com/portfolio/${project.projectId}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://budcor.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://budcor.com/uslugi",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://budcor.com/uslugi/uslugi-budowlane",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://budcor.com/uslugi/remont-pod-klucz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://budcor.com/uslugi/projektowanie-wnetrz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://budcor.com/contacts",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: blogUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPostsSitemap,
    ...portfolioProjectsSitemap,
  ];
}

// yearly monthly weekly
// priority 0.7 — default
