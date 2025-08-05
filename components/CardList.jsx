"use client";
import Image from "next/image";
import product from "../data/data.json";
import ToggleBtn from "./ui/ToggleBtn";
import { useStore } from "./store";
import { useEffect } from "react";

export default function CardList() {
  const dark = useStore((state) => state.dark);

  const lists = useStore((state) => state.lists);
  const setLists = useStore((state) => state.setLists);
  const removeItem = useStore((state) => state.removeItem);

  useEffect(() => {
    setLists(product);
  }, [setLists]);

  const filter = useStore((state) => state.filter);

  const filteredUsers = lists.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return item.isActive === true;
    if (filter === "inactive") return item.isActive === false;
  });

  return (
    <div className="flex flex-col gap-3 md:flex-row md:grid md:grid-cols-3">
      {filteredUsers.map((item) => (
        <div
          key={item.id}
          className={`border-[1px] rounded-[12px] p-4 ${
            dark
              ? "bg-[var(--neutral-800)] border-[var(--neutral-600)]"
              : "bg-[var(--neutral-0)] border-[var(--neutral-100)]"
          }`}
        >
          <div className="flex items-start">
            <Image
              src={`${item.logo}`}
              alt={`${item.name}`}
              width={60}
              height={60}
              className="mr-3.5 mt-0.5"
            ></Image>
            <div>
              <h2
                className={`${
                  dark ? "text-[var(--neutral-0)]" : "text-[var(--neutral-700)]"
                } `}
              >
                {item.name}
              </h2>
              <p
                className={`${
                  dark
                    ? "text-[var(--neutral-300)]"
                    : "text-[var(--neutral-600)]"
                } `}
              >
                {item.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              className={`px-3 font-medium py-1 border rounded-[32px] hover:text-[var(--neutral-0)] hover:bg-[var(--red-500)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--red-500)] focus:bg-[var(--neutral-100)] focus:border-white ${
                dark
                  ? "hover:text-[var(--neutral-900)] border-[var(--neutral-600)]"
                  : "text-[var(--neutral-700)] border-[var(--neutral-300)]"
              }`}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
            <ToggleBtn boolean={item.isActive} id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
