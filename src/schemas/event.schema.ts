import {
  z,
  ZodType,
} from 'zod';

export type EventSubmitionProps = {
  trackId: number;
  carId: number;
  presetName: string;
  raceDuration: string;
  sessionStartGMT: string;
  raceStartTimeOfDay: string;
  greenFlagOffset: string;
  pitDuration: string;
  fuelTankSize: string;
  stdStintFuelLaptime: string;
  stdStintFuelPerLap: string;
  fuelSaveStintLapTime: string;
  fuelSaveStintFuelPerLap: string;
};

export const EventSubmitionSchema: ZodType<EventSubmitionProps> = z.object({
  trackId: z.number(),
  carId: z.number(),
  presetName: z.string().min(4, { message: "Event name is too short" }),
  raceDuration: z.string(),
  sessionStartGMT: z.string(),
  raceStartTimeOfDay: z.string(),
  greenFlagOffset: z.string(),
  pitDuration: z.string(),
  fuelTankSize: z.string(),
  stdStintFuelLaptime: z.string(),
  stdStintFuelPerLap: z.string(),
  fuelSaveStintLapTime: z.string(),
  fuelSaveStintFuelPerLap: z.string(),
});
