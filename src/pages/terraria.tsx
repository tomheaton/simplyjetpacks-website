import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";

const Fabric: NextPage = () => {

    const router = useRouter();

    return (
        <div className={"container"}>
            <Head>
                <title>Terraria | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Simply Jetpacks 2 (Terraria)</h1>
            <p>Oops, this page is under construction... 🏗️</p>
            <button className={"btn"} onClick={() => {router.push("/")}}>
                Return Home
            </button>
        </div>
    );
}

export default Fabric;