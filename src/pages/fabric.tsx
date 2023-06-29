import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Fabric: NextPage = () => {
  return (
    <div className={"w-full"}>
      <Head>
        <title>Fabric | Simply Jetpacks</title>
        <meta name="description" content="Simply Jetpacks - Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"flex w-full flex-1 flex-col items-center justify-center"}>
        <h1 className={"text-4xl font-bold"}>Simply Jetpacks 2 (Fabric)</h1>
        <br />
        <div className={"flex justify-center"}>
          <img
            src={"https://cf.way2muchnoise.eu/simply-jetpacks-2-fabric.svg"}
            alt={"CF SJ2 fabric downloads"}
            className={"mr-4"}
          />
          <img
            src={"https://cf.way2muchnoise.eu/versions/simply-jetpacks-2-fabric.svg"}
            alt={"CF SJ2 fabric version"}
          />
        </div>
        <br />
        <p>
          Downloads for this mod can be found{" "}
          <a
            href={"https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2-fabric"}
            rel={"noopener noreferrer"}
            target={"_blank"}
            className={"text-[#FDC51E] hover:font-bold"}
          >
            here
          </a>
        </p>
        <br />
        <Link href={"/"}>
          <button className={"rounded bg-[#FDC51E] px-4 py-2 font-bold text-white"}>
            Return Home
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Fabric;
