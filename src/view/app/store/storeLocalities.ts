import { create } from "zustand";
import type { ILocalities } from "../interface/ILocalities";

interface LocalidadStore {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  localitiesByContext: Record<string, ILocalities | null>;
  setLocalityByContext: (context: string, data: ILocalities | null) => void;
  dataTabla: ILocalities[] | null;
  setDataTabla: (v: ILocalities[] | null) => void;
  dataOriginal: ILocalities[] | null;
  setDataOriginal: (v: ILocalities[] | null) => void;
  dataTablaSeleccionada: ILocalities | null;
  setDataTableSelect: (v: ILocalities | null) => void;
  errorBuscador: string | null;
  setErrorBuscador: (msg: string | null) => void;
  isSearched: boolean;
  lastSearchTerm: string;
  setIsSearched: (val: boolean) => void;
  setLastSearchTerm: (val: string) => void;
  resetContext: (context: string) => void;
  resetAll: () => void;
}

export const useLocalidadStore = create<LocalidadStore>()((set) => ({
  openModal: false,
  setOpenModal: (value) => set({ openModal: value }),
  localitiesByContext: {},
  setLocalityByContext: (context, data) =>
    set((state) => ({
      localitiesByContext: { ...state.localitiesByContext, [context]: data },
    })),
  dataTabla: null,
  setDataTabla: (v) => set({ dataTabla: v }),
  dataOriginal: null,
  setDataOriginal: (v) => set({ dataOriginal: v, dataTabla: v }),
  dataTablaSeleccionada: null,
  setDataTableSelect: (v) => set({ dataTablaSeleccionada: v }),

  errorBuscador: null,
  setErrorBuscador: (msg) => set({ errorBuscador: msg }),

  isSearched: false,
  lastSearchTerm: "",
  setIsSearched: (val) => set({ isSearched: val }),
  setLastSearchTerm: (val) => set({ lastSearchTerm: val }),

  resetContext: (context) =>
    set((state) => ({
      localitiesByContext: { ...state.localitiesByContext, [context]: null },
    })),
  resetAll: () =>
    set({
      localitiesByContext: {},
      dataTabla: null,
      dataOriginal: null,
      dataTablaSeleccionada: null,
      errorBuscador: null,
      isSearched: false,
      lastSearchTerm: "",
      openModal: false,
    }),
}));
