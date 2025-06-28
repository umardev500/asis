import { create } from "zustand";

export type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

export type PresentType = "pagi" | "istirahat" | "sore";

type PresentStore = {
  coordinates?: Coordinates;
  setCoordinates: (long: number, lat: number) => void;
  presentType?: PresentType;
  setPresentType: (presentType: PresentType) => void;
};

export const usePresentStore = create<PresentStore>((set) => ({
  setCoordinates: (long, lat) =>
    set({ coordinates: { longitude: long, latitude: lat } }),
  setPresentType: (presentType: PresentType) => {
    set({ presentType });
  },
}));
