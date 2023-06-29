import type { MetadataRoute } from "next";

export default function Manifest(): MetadataRoute.Manifest {
  return {
    name: "Simply Jetpacks - Minecraft Mod",
    short_name: "Simply Jetpacks",
    start_url: "https://simplyjetpacks.com",
    display: "standalone",
    theme_color: "#FDC51E",
    background_color: "#FFFFFF",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
