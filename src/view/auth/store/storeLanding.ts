import { create } from "zustand";
import type { Product } from "../view/landing/ProductsView/types";

const useLandingStore = create<{
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;

  disabled: boolean;
  setDisabled: (disabled: boolean) => void;

  cart: Product[];
  setCart: (cart: Product[]) => void;
}>()((set) => ({
  openModal: false,
  setOpenModal: (openModal: boolean) => set({ openModal }),

  disabled: true,
  setDisabled: (disabled: boolean) => set({ disabled }),

  cart: [],
  setCart: (cart: Product[]) => set({ cart }),
}));

export default useLandingStore;
