"use client";
import { useStore } from "../store";
import { motion } from "framer-motion";

export default function ToggleBtn({ boolean, id }) {
  const dark = useStore((state) => state.dark);
  const toggleStatus = useStore((state) => state.toggleStatus);

  return (
    <button
      onClick={() => toggleStatus(id)}
      className={`relative focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-white ${
        boolean
          ? `bg-[var(--red-700)]`
          : dark
          ? `bg-[var(--neutral-600)]`
          : `bg-[var(--neutral-300)]`
      }  rounded-4xl w-[52px] h-[25px] cursor-pointer transition-colors duration-300 ease`}
    >
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: boolean ? 25 : 3 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-[22px] h-[20px] rounded-[50%]"
      ></motion.div>
    </button>
  );
}
