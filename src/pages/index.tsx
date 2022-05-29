import {NextPage} from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "@components/Footer";

const Index: NextPage = () => {

    return (
        <div className={"h-screen"}>
            <Head>
                <title>Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"flex flex-1 flex-col items-center justify-between w-full h-full"}>
                <div className={"mt-[50px] w-full lg:w-1/2"}>
                    <img src={"/logo.png"} alt={"Simply Jetpacks Logo"} className={"w-full"} />
                </div>

                {/*<h1 className={"font-bold text-6xl text-center"}>
                    Simply Jetpacks
                </h1>*/}

                <div className={"w-4/5 lg:w-1/2 grid grid-cols-1 lg:grid-cols-2"}>
                    <Link href={"/forge"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold"}>
                                Forge
                            </h2>
                            <p>Find out more!</p>
                        </div>
                    </Link>
                    <Link href={"/fabric"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold"}>
                                Fabric
                            </h2>
                            <p>Find out more!</p>
                        </div>
                    </Link>
                    <Link href={"/bedrock"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold"}>
                                Bedrock
                            </h2>
                            <p>Find out more!</p>
                        </div>
                    </Link>
                    <Link href={"/terraria"}>
                        <div className={"rounded m-2 border-2 border-[#eaeaea] p-8 hover:border-[#FDC51E] text-center cursor-pointer"}>
                            <h2 className={"font-bold"}>
                                Terraria
                            </h2>
                            <p>Find out more!</p>
                        </div>
                    </Link>
                </div>

                {/*TODO: fix styling so this can be removed from main tag*/}
                <Footer />
            </main>
        </div>
    )
}

export default Index;
