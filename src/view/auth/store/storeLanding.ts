import { create } from "zustand";

const useLandingStore = create<{
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}>()((set) => ({
  openModal: false,
  setOpenModal: (openModal: boolean) => set({ openModal }),
  disabled: true,
  setDisabled: (disabled: boolean) => set({ disabled }),
}));

export default useLandingStore;
