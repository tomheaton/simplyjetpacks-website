import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedrock | Simply Jetpacks",
};

export default async function Page() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Simply Jetpacks 2 (Bedrock)</h1>
      <br />
      <p>Oops, this version of Simply Jetpacks is under construction... 🏗️</p>
      <br />
      <Link href="/">
        <button className="rounded bg-sj2orange px-4 py-2 font-bold text-white">Return Home</button>
      </Link>
    </main>
  );
}
