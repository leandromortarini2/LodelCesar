import { create } from "zustand";

interface configState {
  code: number;
  entorno: string;
  modo: string;
  hostname: string;
  message: string;
  entornoApi: string;
  modoApi: string;
  setCode: (code: number) => void;
  setEntorno: (entorno: string) => void;
  setModo: (modo: string) => void;
  setHostname: (hostname: string) => void;
  setMessage: (message: string) => void;
  setEntornoApi: (entornoApi: string) => void;
  setModoApi: (modoApi: string) => void;
}

export const useConfigStore = create<configState>()((set) => ({
  code: 0,
  entorno: "",
  modo: "",
  hostname: "",
  message: "",
  entornoApi: "",
  modoApi: "",
  setCode: (code: number) => set({ code: code }),
  setEntorno: (entorno: string) => set({ entorno: entorno }),
  setModo: (modo: string) => set({ modo: modo }),
  setHostname: (hostname: string) => set({ hostname: hostname }),
  setMessage: (message: string) => set({ message: message }),
  setEntornoApi: (entornoApi: string) => set({ entornoApi: entornoApi }),
  setModoApi: (modoApi: string) => set({ modoApi: modoApi }),
}));
