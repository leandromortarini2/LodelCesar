import { create } from "zustand";

export type IState = "I" | "C" | "M";

interface IEstadoStore {
  status: IState;
  setStatus: (state: IState) => void;
}

export const useRecordStatusStore = create<IEstadoStore>()((set) => ({
  status: "I" as IState,
  setStatus: (state) => set({ status: state }),
}));
