import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const Fabric: NextPage = () => {

    return (
        <div className={"h-screen"}>
            <Head>
                <title>Fabric | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex flex-1 flex-col items-center justify-center w-full h-full"}>
                <h1 className={"font-bold text-4xl"}>
                    Simply Jetpacks 2 (Fabric)
                </h1>
                <br/>
                <div className={"flex justify-center"}>
                    <img src={"https://cf.way2muchnoise.eu/simply-jetpacks-2-fabric.svg"}
                         alt={"CF SJ2 fabric downloads"}
                         className={"mr-4"}
                    />
                    <img src={"https://cf.way2muchnoise.eu/versions/simply-jetpacks-2-fabric.svg"}
                         alt={"CF SJ2 fabric version"}
                    />
                </div>
                <br/>
                <p>
                    Downloads for this mod can be found
                    {" "}
                    <a href={"https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2-fabric"}
                       rel={"noopener noreferrer"} target={"_blank"}
                       className={"text-[#FDC51E] hover:font-bold"}
                    >
                        here
                    </a>
                </p>
                <br/>
                <Link href={"/"}>
                    <button className={"text-white font-bold rounded py-2 px-4 bg-[#FDC51E]"}>
                        Return Home
                    </button>
                </Link>
            </main>
        </div>
    );
}

export default Fabric;