import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";

const Index: NextPage = () => {

    return (
        <div className={"w-full"}>
            <Head>
                <title>Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex flex-1 flex-col items-center justify-center w-full"}>
                {/*<h1 className={"font-bold text-6xl text-center"}>
                    Simply Jetpacks
                </h1>*/}

                <div className={"w-4/5 lg:w-1/2 grid grid-cols-1 lg:grid-cols-2"}>
                    <Link href={"/forge"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold text-3xl"}>
                                Forge
                            </h2>
                            {/*<p>Find out more!</p>*/}
                        </div>
                    </Link>
                    <Link href={"/fabric"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold text-3xl"}>
                                Fabric
                            </h2>
                            {/*<p>Find out more!</p>*/}
                        </div>
                    </Link>
                    <Link href={"/bedrock"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold text-3xl"}>
                                Bedrock
                            </h2>
                            {/*<p>Find out more!</p>*/}
                        </div>
                    </Link>
                    <Link href={"/terraria"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold text-3xl"}>
                                Terraria
                            </h2>
                            {/*<p>Find out more!</p>*/}
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Index;
