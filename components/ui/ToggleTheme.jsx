"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ToggleTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-[var(--neutral-100)] dark:bg-[var(--neutral-700)] p-1 flex justify-center rounded-[12px] w-[45px] h-[45px] focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-white"
    >
      <Image
        src={isDark ? "/icon-sun.svg" : "/icon-moon.svg"}
        alt={isDark ? "sun icon" : "moon icon"}
        width={20}
        height={20}
      />
    </button>
  );
}
