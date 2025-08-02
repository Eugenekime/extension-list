"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ToggleBtn({ boolean }) {
  const [isActive, setIsActive] = useState(boolean);

  const toggle = () => setIsActive((prev) => !prev);
  return (
    <button
      onClick={toggle}
      className={`relative focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-white ${
        isActive ? `bg-[var(--red-700)]` : `bg-[var(--neutral-300)]`
      }  rounded-4xl w-[52px] h-[25px] cursor-pointer transition-colors duration-300 ease`}
    >
      <motion.div
        initial={false}
        animate={{ opacity: 1, x: isActive ? 25 : 3 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-[22px] h-[20px] rounded-[50%]"
      ></motion.div>
    </button>
  );
}
