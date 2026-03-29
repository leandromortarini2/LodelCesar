import { create } from "zustand";

interface LoaderStore {
  loader: boolean;
  setLoader: (value: boolean) => void;

  loaderKey: string;
  setLoaderKey: (value: string) => void;
}

export const useLoaderStore = create<LoaderStore>()((set) => ({
  loader: false,
  setLoader: (value: boolean) => set({ loader: value }),

  loaderKey: "",
  setLoaderKey: (value) => set({ loaderKey: value }),
}));
