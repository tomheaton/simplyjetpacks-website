import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Simply Jetpacks</title>
        <meta name="description" content="Simply Jetpacks - Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center">
        {/* <h1 className="text-center text-6xl font-bold">Simply Jetpacks</h1> */}

        <div className="grid w-4/5 grid-cols-1 lg:w-1/2 lg:grid-cols-2">
          <Link href="/forge">
            <div className="m-2 cursor-pointer rounded border-2 border-[#eaeaea] p-8 text-center hover:border-sj2orange">
              <h2 className="text-3xl font-bold">Forge</h2>
              {/*<p>Find out more!</p>*/}
            </div>
          </Link>
          <Link href="/fabric">
            <div className="m-2 cursor-pointer rounded border-2 border-[#eaeaea] p-8 text-center hover:border-sj2orange">
              <h2 className="text-3xl font-bold">Fabric</h2>
              {/*<p>Find out more!</p>*/}
            </div>
          </Link>
          <Link href="/bedrock">
            <div
              className={
                "m-2 cursor-pointer rounded border-2 border-[#eaeaea] p-8 text-center hover:border-sj2orange"
              }
            >
              <h2 className="text-3xl font-bold">Bedrock</h2>
              {/*<p>Find out more!</p>*/}
            </div>
          </Link>
          <Link href="/terraria">
            <div className="m-2 cursor-pointer rounded border-2 border-[#eaeaea] p-8 text-center hover:border-sj2orange">
              <h2 className="text-3xl font-bold">Terraria</h2>
              {/*<p>Find out more!</p>*/}
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
