import type { MetadataRoute } from "next";

export default function Robots(): MetadataRoute.Robots {
  return {
    sitemap: "https://simplyjetpacks.com/sitemap.xml",
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
