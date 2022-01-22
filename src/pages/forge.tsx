import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";

const SimplyJetpacks: NextPage = () => {

    const router = useRouter();

    return (
        <div className={"container"}>
            <Head>
                <title>Forge | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Simply Jetpacks 2 (Forge)</h1>
            <p>Oops, page is under construction... 🏗️</p>
            <button onClick={() => {router.push("/")}}>
                Return Home
            </button>
        </div>
    );
}

export default SimplyJetpacks;