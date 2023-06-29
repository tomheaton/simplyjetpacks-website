import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Terraria: NextPage = () => {
  return (
    <div className={"w-full"}>
      <Head>
        <title>Terraria | Simply Jetpacks</title>
        <meta name="description" content="Simply Jetpacks - Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"flex w-full flex-1 flex-col items-center justify-center"}>
        <h1 className={"text-4xl font-bold"}>Simply Jetpacks (Terraria)</h1>
        <br />
        <p>Oops, this version of Simply Jetpacks is under construction... 🏗️</p>
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

export default Terraria;
