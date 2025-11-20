import { MetadataRoute } from "next";

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
  ];
}

// yearly monthly weekly
// priority 0.7 — default
