import { create } from "zustand";
import product from "../data/data.json";

export const useStore = create((set) => ({
  dark: false,
  switchMode: () => set((state) => ({ dark: !state.dark })),
  filter: "all",
  setFilter: (filter) => set(() => ({ filter })),
  lists: product,
  setLists: (lists) => {
    set({ lists });
  },
  toggleStatus: (id) =>
    set((state) => {
      const updated = state.lists.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      );
      return { lists: updated };
    }),
  removeItem: (id) =>
    set((state) => {
      const updated = state.lists.filter((item) => item.id !== id);
      return { lists: updated };
    }),
}));
