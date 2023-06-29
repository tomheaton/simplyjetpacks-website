/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  async redirects() {
    return [
      {
        source: "/curseforge",
        destination: "https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/simplyjetpacks",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/invite/v5qJysC",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
