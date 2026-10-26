import { create } from "zustand";
import type { Campaign } from "./campaigns";

// Solo se usa en desarrollo local: permite forzar una temática desde el selector.
const useCampaignStore = create<{
  current: Campaign;
  setCurrent: (current: Campaign) => void;
  override: Campaign | null;
  setOverride: (override: Campaign | null) => void;
}>()((set) => ({
  current: "default",
  setCurrent: (current) => set({ current }),
  override: null,
  setOverride: (override) => set({ override }),
}));

export const isLocalhost = (): boolean =>
  ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);

export default useCampaignStore;
