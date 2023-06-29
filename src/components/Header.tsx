import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <Link href="/">
      <div className="mx-auto mt-[50px] w-full cursor-pointer lg:w-1/2">
        <Image src="/logo.png" alt="Simply Jetpacks Logo" width={800} height={170} />
      </div>
    </Link>
  );
};

export default Header;
