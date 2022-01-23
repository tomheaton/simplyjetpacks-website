import {NextPage} from "next";
import {useRouter} from "next/router";
import Head from "next/head";
import styles from "../styles/Main.module.css";

const SimplyJetpacks: NextPage = () => {

    const router = useRouter();

    return (
        <div className={"container"}>
            <Head>
                <title>Forge | Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.main}>
                <h1>Simply Jetpacks 2 (Forge)</h1>
                <div className={styles.badgeContainer}>
                    <img src={"https://cf.way2muchnoise.eu/simply-jetpacks-2.svg"}
                         alt={"CF SJ2 forge downloads"}/>
                    <img src={"https://cf.way2muchnoise.eu/versions/simply-jetpacks-2.svg"}
                         alt={"CF SJ2 forge version"}/>
                </div>
                <p>
                    Downloads for this mod can be found
                    {" "}
                    <a href={"https://www.curseforge.com/minecraft/mc-mods/simply-jetpacks-2"}
                       className={styles.here}>
                        here
                    </a>
                </p>
                <br/>
                <button className={"btn"} onClick={() => {router.push("/")}}>
                    Return Home
                </button>
            </div>
        </div>
    );
}

export default SimplyJetpacks;