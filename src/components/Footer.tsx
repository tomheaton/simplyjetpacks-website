import React from "react";

const Footer: React.FC = () => {

    return (
        <footer className={"w-full h-[100px] flex justify-center items-center border-t border-[#eaeaea]"}>
            <div className={"flex flex-col"}>
                <div className={"text-center text-2xl"}>
                    <a target={"_blank"} href={"https://www.github.com/simplyjetpacks"} rel={"noopener noreferrer"}>
                        <i className={"bi bi-github mr-4"} aria-label={"Github"}/>
                    </a>
                    <a target={"_blank"} href={"https://discord.gg/v5qJysC"} rel={"noopener noreferrer"}>
                        <i className={"bi bi-discord"} aria-label={"Discord"}/>
                    </a>
                </div>
                <p>&copy; Simply Jetpacks {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
