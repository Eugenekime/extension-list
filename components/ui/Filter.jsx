import { useStore } from "../store";

export default function Filter() {
  const setFilter = useStore((state) => state.setFilter);
  const dark = useStore((state) => state.dark);

  return (
    <div className="flex gap-3 justify-center">
      <button
        className={`text-center text-[20px] font-medium py-1.5 px-5 rounded-3xl border-[1px] cursor-pointer hover:bg-[var(--red-700)] focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)] ${
          dark
            ? "bg-[var(--neutral-700)] border-[var(--neutral-600)] hover:text-[var(--neutral-700)]"
            : "bg-white text-[var(--neutral-700)] border-[var(--neutral-100)]  hover:text-white"
        } `}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`text-center text-[20px] font-medium py-1.5 px-5 rounded-3xl border-[1px] cursor-pointer hover:bg-[var(--red-700)] focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)] ${
          dark
            ? "bg-[var(--neutral-700)] border-[var(--neutral-600)] hover:text-[var(--neutral-700)]"
            : "bg-white text-[var(--neutral-700)] border-[var(--neutral-100)]  hover:text-white"
        } `}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`text-center text-[20px] font-medium py-1.5 px-5 rounded-3xl border-[1px] cursor-pointer hover:bg-[var(--red-700)] focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)] ${
          dark
            ? "bg-[var(--neutral-700)] border-[var(--neutral-600)] hover:text-[var(--neutral-700)]"
            : "bg-white text-[var(--neutral-700)] border-[var(--neutral-100)]  hover:text-white"
        } `}
        onClick={() => setFilter("inactive")}
      >
        Inactive
      </button>
    </div>
  );
}
