import {
  z,
  ZodType,
} from 'zod';

export type EventSubmitionProps = {
  trackId: number;
  carId: number;
  presetName: string;
  raceDuration: number;
  sessionStartGMT: number;
  raceStartTimeOfDay: number;
  greenFlagOffset: number;
  pitDuration: number;
  fuelTankSize: number;
  stdStintFuelLaptime: number;
  stdStintFuelPerLap: number;
  fuelSaveStintLapTime: number;
  fuelSaveStintFuelPerLap: number;
};

export const EventSubmitionSchema: ZodType<EventSubmitionProps> = z.object({
  trackId: z.number(),
  carId: z.number(),
  presetName: z.string().min(4, { message: "Event name is too short" }),
  raceDuration: z.number(),
  sessionStartGMT: z.number(),
  raceStartTimeOfDay: z.number(),
  greenFlagOffset: z.number(),
  pitDuration: z.number(),
  fuelTankSize: z.number(),
  stdStintFuelLaptime: z.number(),
  stdStintFuelPerLap: z.number(),
  fuelSaveStintLapTime: z.number(),
  fuelSaveStintFuelPerLap: z.number(),
});
