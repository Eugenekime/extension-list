"use client";

import Image from "next/image";
import CardList from "../../components/CardList";
import ToggleTheme from "../../components/ui/ToggleTheme";
import Filter from "../../components/ui/Filter";
import { useStore } from "../../components/store";

export default function Home() {
  const dark = useStore((state) => state.dark);
  return (
    <main
      className={`mx-auto w-full max-w-[1440px] min-w-[250px] min-h-screen p-4 md:p-4`}
      style={{
        background: dark
          ? "bg-[image:var(--dark-gradient)]"
          : "bg-[image:var(--light-gradient)]",
      }}
    >
      <header
        className={`flex p-2.5 h-[60px] justify-between items-center rounded-[12px] border-[2px] ${
          dark
            ? "bg-[var(--neutral-800)] border-[var(--neutral-700)]"
            : "bg-[var(--neutral-0)] border-[var(--neutral-100)]"
        }`}
      >
        <Image
          src="/logo.svg"
          width={170}
          height={100}
          alt="logo extension"
          className="text-white"
        ></Image>
        <ToggleTheme></ToggleTheme>
      </header>
      <div className="flex flex-col gap-[10px] my-[30px] md:flex-row md:justify-between md:items-center">
        <h1
          className={`text-center text-[32px] font-bold  ${
            dark ? "text-[var(--neutral-100)]" : "text-[var(--neutral-700)]"
          }`}
        >
          Extensions List
        </h1>
        <Filter></Filter>
      </div>
      <CardList></CardList>
    </main>
  );
}
