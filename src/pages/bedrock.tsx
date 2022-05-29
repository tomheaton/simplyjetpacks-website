import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const Bedrock: NextPage = () => {

    return (
        <div className={"w-full"}>
            <Head>
                <title>Bedrock | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex flex-1 flex-col items-center justify-center w-full"}>
                <h1 className={"font-bold text-4xl"}>
                    Simply Jetpacks 2 (Bedrock)
                </h1>
                <br/>
                <p>
                    Oops, this version of Simply Jetpacks is under construction... 🏗️
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

export default Bedrock;