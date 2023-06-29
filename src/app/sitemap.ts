import type { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://simplyjetpacks.com",
    },
    {
      url: "https://simplyjetpacks.com/forge",
    },
    {
      url: "https://simplyjetpacks.com/fabric",
    },
    {
      url: "https://simplyjetpacks.com/bedrock",
    },
    {
      url: "https://simplyjetpacks.com/terraria",
    },
  ];
}
