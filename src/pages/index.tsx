import type {NextPage} from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useRouter} from "next/router";

const Home: NextPage = () => {

    const router = useRouter();

    const handleLink = (url: string) => {
        router.push(url);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Simply Jetpacks</title>
                <meta name="description" content="Simply Jetpacks - Website"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <img src={"/logo.png"} alt={"Simply Jetpacks Logo"}/>
                {/*<h1 className={styles.title}>Simply Jetpacks</h1>*/}

                <div className={styles.grid}>
                    <div className={styles.card} onClick={() => {handleLink("/simplyjetpacks2")}}>
                        <h2>Simply Jetpacks 2</h2>
                        <p>Find out more!</p>
                    </div>

                    <div className={styles.card} onClick={() => {handleLink("/fabric")}}>
                        <h2>Fabric</h2>
                        <p>Find out more!</p>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}

export default Home;
