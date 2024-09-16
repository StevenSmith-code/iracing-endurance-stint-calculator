import { create } from 'zustand';

interface EventState {
  trackId: number;
  carId: number;
  presetName: string;
  raceDuration: string;
  sessionStartGMT: string;
  raceStartTimeOfDay: string;
  greenFlagOffset: string;
  pitDuration: string;
  stdStintFuelLaptime: string;
  stdStintFuelPerLap: string;
  fuelSaveStintLapTime: string;
  fuelSaveStintFuelPerLap: string;
  setEventDetails: (details: Partial<EventState>) => void;
}

export const useEventStore = create<EventState>((set) => ({
  trackId: 0,
  carId: 0,
  presetName: "",
  raceDuration: "",
  sessionStartGMT: "",
  raceStartTimeOfDay: "",
  greenFlagOffset: "",
  pitDuration: "",
  stdStintFuelLaptime: "",
  stdStintFuelPerLap: "",
  fuelSaveStintLapTime: "",
  fuelSaveStintFuelPerLap: "",
  setEventDetails: (details) => set((state) => ({ ...state, ...details })),
}));
