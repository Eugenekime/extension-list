"use client";
import Image from "next/image";
import product from "../data/data.json";
import ToggleBtn from "./ui/ToggleBtn";

export default function CardList() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:grid md:grid-cols-3">
      {product.map((item) => (
        <div
          key={item.id}
          className=" dark:bg-[#2c2f3e] border-[3px] border-[var(--neutral-100)] rounded-[12px] p-4 bg-[var(--neutral-0)]"
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
              <h2 className="text-[var(--neutral-700)] dark:text-[var(--neutral-0)]">
                {item.name}
              </h2>
              <p className="text-[var(--neutral-600)] ">{item.description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="px-3 font-medium py-1 border-2 border-[var(--neutral-300)] text-[var(--neutral-700)] rounded-[32px] hover:text-[var(--neutral-0)] dark:hover:text-[var(--neutral-900)] hover:bg-[var(--red-500)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--red-500)] focus:bg-[var(--neutral-100)] focus:border-white">
              Remove
            </button>
            <ToggleBtn boolean={item.isActive} />
          </div>
        </div>
      ))}
    </div>
  );
}
