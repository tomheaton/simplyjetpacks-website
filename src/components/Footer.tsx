import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex h-[100px] w-full items-center justify-center border-t border-[#eaeaea]">
      <div className="flex flex-col">
        <div className="flex items-center justify-center space-x-2 text-2xl">
          <a target="_blank" href="https://www.github.com/simplyjetpacks" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a target="_blank" href="https://discord.gg/v5qJysC" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </div>
        <p>&copy; Simply Jetpacks {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
