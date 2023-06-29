import "@/styles/globals.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://simplyjetpacks.com"),
  title: "Simply Jetpacks",
  description: "Simply Jetpacks - Minecraft Mod",
  authors: {
    name: "Tom Heaton",
    url: "https://tomheaton.dev",
  },
  keywords:
    "simply jetpacks, simply jetpacks 2, minecraft mod, curseforge, fabric, forge, bedrock, terraria, minecraft",
  themeColor: "#FDC51E",
  openGraph: {
    title: "Simply Jetpacks",
    description: "Simply Jetpacks - Minecraft Mod",
    type: "website",
    url: "https://simplyjetpacks.com",
    images: {
      url: "/logo.png",
      alt: "Simply Jetpacks Logo",
    },
    locale: "en_GB",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@simplyjetpacks",
  //   creator: "@simplyjetpacks",
  //   title: "Simply Jetpacks",
  //   description: "Simply Jetpacks - Minecraft Mod",
  //   images: {
  //     url: "/logo.png",
  //     alt: "Simply Jetpacks Logo",
  //   },
  // },
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Simply Jetpacks",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://simplyjetpacks.com" />
      </head>
      <body>
        <div className={"flex min-h-screen w-full flex-col items-center justify-between"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
