import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const Forge: NextPage = () => {

    return (
        <div className={"w-full"}>
            <Head>
                <title>Forge | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex flex-1 flex-col items-center justify-center w-full"}>
                <h1 className={"font-bold text-4xl"}>
                    Simply Jetpacks 2 (Forge)
                </h1>
                <br/>
                <div className={"flex justify-center"}>
                    <img src={"https://cf.way2muchnoise.eu/simply-jetpacks-2.svg"}
                         alt={"CF SJ2 forge downloads"}
                         className={"mr-4"}
                    />
                    <img src={"https://cf.way2muchnoise.eu/versions/simply-jetpacks-2.svg"}
                         alt={"CF SJ2 forge version"}
                    />
                </div>
                <br/>
                <p>
                    Downloads for this mod can be found
                    {" "}
                    <a href={"https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2"}
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

export default Forge;