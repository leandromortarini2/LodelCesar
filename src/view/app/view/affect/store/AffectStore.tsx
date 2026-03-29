import { create } from "zustand";
import type { IAffectation } from "../../../interface/IAffectation";
import { dataPerson } from "../../../mock/dataPerson";

interface IAffectStore {
  dataPerson: IAffectation | null;
  setDataPerson: (dataPerson: IAffectation | null) => void;
  updateDataPerson: (partialData: Partial<IAffectation>) => void;
}

export const useAffectStore = create<IAffectStore>()((set) => ({
  dataPerson: dataPerson,
  setDataPerson: (dataPerson: IAffectation | null) => set({ dataPerson }),
  updateDataPerson: (partialData) =>
    set((state) => ({
      dataPerson: state.dataPerson
        ? { ...state.dataPerson, ...partialData }
        : null,
    })),
}));
