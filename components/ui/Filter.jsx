export default function Filter() {
  return (
    <div className="flex gap-3 justify-center">
      <button className="text-center text-[20px] bg-white text-[var(--neutral-700)] font-medium dark:bg-[var(--neutral-700)] py-1.5 px-5 rounded-3xl border-[2px] border-[var(--neutral-100)] dark:border-[var(--neutral-600)] cursor-pointer hover:bg-[var(--red-700)] hover:text-white focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)]">
        All
      </button>
      <button className="text-center text-[20px] bg-white text-[var(--neutral-700)] font-medium dark:bg-[var(--neutral-700)] py-1.5 px-5 rounded-3xl border-[2px] border-[var(--neutral-100)] dark:border-[var(--neutral-600)] cursor-pointer hover:bg-[var(--red-700)] hover:text-white focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)]">
        Active
      </button>
      <button className="text-center text-[20px] bg-white text-[var(--neutral-700)] font-medium dark:bg-[var(--neutral-700)] py-1.5 px-5 rounded-3xl border-[2px] border-[var(--neutral-100)] dark:border-[var(--neutral-600)] cursor-pointer hover:bg-[var(--red-700)] hover:text-white focus:outline-none focus:ring-2 focus:border-2 focus:ring-[var(--red-500)] focus:border-[var(--neutral-100)]">
        Inactive
      </button>
    </div>
  );
}
