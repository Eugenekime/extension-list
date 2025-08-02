import Image from "next/image";
import CardList from "../../components/CardList";
import ToggleTheme from "../../components/ui/ToggleTheme";
import Filter from "../../components/ui/Filter";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1440px] min-w-[250px] min-h-screen p-4 md:p-4">
      <header className=" flex p-2.5 h-[60px] justify-between items-center rounded-[12px] bg-[var(--neutral-0)] border-[2px] border-[var(--neutral-100)] dark:bg-[var(--neutral-800)] ">
        <Image
          src="/logo.svg"
          width={170}
          height={100}
          alt="logo extension"
          className="text-[var(--neutral-0)]"
        ></Image>
        <ToggleTheme></ToggleTheme>
      </header>
      <div className="flex flex-col gap-[10px] my-[30px] md:flex-row md:justify-between md:items-center">
        <h1 className="text-center text-[32px] font-bold text-[var(--neutral-700)]">
          Extensions List
        </h1>
        <Filter></Filter>
      </div>
      <CardList></CardList>
    </main>
  );
}
