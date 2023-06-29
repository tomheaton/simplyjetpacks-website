import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabric | Simply Jetpacks",
};

export default async function Page() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Simply Jetpacks 2 (Fabric)</h1>
      <br />
      <div className="flex justify-center">
        <img
          src="https://cf.way2muchnoise.eu/simply-jetpacks-2-fabric.svg"
          alt="CF SJ2 fabric downloads"
          className="mr-4"
        />
        <img
          src="https://cf.way2muchnoise.eu/versions/simply-jetpacks-2-fabric.svg"
          alt="CF SJ2 fabric version"
        />
      </div>
      <br />
      <p>
        Downloads for this mod can be found{" "}
        <a
          href="https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2-fabric"
          rel="noopener noreferrer"
          target="_blank"
          className="text-sj2orange hover:font-bold"
        >
          here
        </a>
      </p>
      <br />
      <Link href="/">
        <button className="rounded bg-sj2orange px-4 py-2 font-bold text-white">Return Home</button>
      </Link>
    </main>
  );
}
