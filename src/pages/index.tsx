import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from "next/router";

const Index: NextPage = () => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"styles.main"}>
                <div className={"styles.imageWrapper"}>
                    <img src={"/logo.png"} alt={"Simply Jetpacks Logo"} className={"styles.logo"} />
                </div>
                {/*<h1 className={styles.title}>Simply Jetpacks</h1>*/}

                <div className={"styles.grid"}>
                    <div className={"styles.card"} onClick={() => {router.push("/forge")}}>
                        <h2>Forge</h2>
                        <p>Find out more!</p>
                    </div>

                    {/*<div className={styles.card} onClick={() => {router.push("/fabric")}}>
                        <h2>Fabric</h2>
                        <p>Find out more!</p>
                    </div>*/}

                    {/*<div className={styles.card} onClick={() => {router.push("/bedrock")}}>
                        <h2>Bedrock</h2>
                        <p>Find out more!</p>
                    </div>*/}

                    {/*<div className={styles.card} onClick={() => {router.push("/terraria")}}>
                        <h2>Terraria</h2>
                        <p>Find out more!</p>
                    </div>*/}
                </div>
            </main>

            <footer className={"styles.footer"}>
                <div className={"styles.footerWrapper"}>
                    <div className={"styles.socials"}>
                        <a target={"_blank"} href={"https://www.github.com/simplyjetpacks"} rel={"noopener noreferrer"}>
                            <i className={"bi bi-github"} aria-label={"Github"}/>
                        </a>
                        <a target={"_blank"} href={"https://discord.gg/v5qJysC"} rel={"noopener noreferrer"}>
                            <i className={"bi bi-discord"} aria-label={"Discord"}/>
                        </a>
                    </div>
                    <p>&copy; Simply Jetpacks {new Date().getFullYear()}</p>
                </div>
            </footer>
        </div>
    )
}

export default Index;
