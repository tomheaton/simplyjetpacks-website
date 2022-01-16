import {NextPage} from "next";
import {useRouter} from "next/router";

const SimplyJetpacks: NextPage = () => {

    const router = useRouter();

    return (
        <div className={"container"}>
            <h1>Simply Jetpacks 2</h1>
            <p>Oops, page is under construction... 🏗️</p>
            <button onClick={() => {router.push("/")}}>Return Home</button>
        </div>
    );
}

export default SimplyJetpacks;