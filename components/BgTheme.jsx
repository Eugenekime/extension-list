import { useStore } from "../../components/store";

export default function BgTheme({ children }) {
  const dark = useStore((state) => state.dark);
  return (
    <div
      className={`min-h-screen w-full  ${
        dark
          ? "bg-[image:var(--dark-gradient)]"
          : "bg-[image:var(--light-gradient)]"
      }`}
    >
      {children}
    </div>
  );
}
