"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useStore } from "../store";

export default function ToggleTheme() {
  const dark = useStore((state) => state.dark);
  const switchMode = useStore((state) => state.switchMode);

  return (
    <button
      onClick={switchMode}
      className={` dark: p-1 flex justify-center rounded-[12px] w-[45px] h-[45px] focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-white ${
        dark ? "bg-[var(--neutral-700)]" : "bg-[var(--neutral-100)]"
      }`}
    >
      <Image
        src={dark ? "/icon-sun.svg" : "/icon-moon.svg"}
        alt={dark ? "sun icon" : "moon icon"}
        width={20}
        height={20}
      />
    </button>
  );
}
