import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <Link href={"/"}>
      <div className={"mt-[50px] w-full cursor-pointer lg:w-1/2"}>
        <img src={"logo.png"} alt={"Simply Jetpacks Logo"} className={"w-full"} />
      </div>
    </Link>
  );
};

export default Header;
