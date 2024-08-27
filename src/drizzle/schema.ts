import {
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const type = pgEnum("type", ["owner", "user"]);

// Users Table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: varchar("clerkId").notNull().unique(),
  driverName: varchar("driverName").notNull(),
  type: text("type").notNull(),
  prefDriverColor: text("prefDriverColor"),
  gmtOffset: integer("gmtOffset"),
  iRating: integer("iRating"),
  role: text("role").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});
// Event Table
export const event = pgTable("event", {
  id: serial("id").primaryKey(),
  trackId: integer("trackId")
    .references(() => track.id)
    .notNull(),
  carId: integer("carId")
    .references(() => car.id)
    .notNull(),
  presetName: varchar("presetName").notNull(),
  raceDuration: integer("raceDuration").notNull(),
  sessionStartGMT: integer("sessionStartGMT").notNull(),
  raceStartTimeOfDay: integer("raceStartTimeOfDay").notNull(),
  greenFlagOffset: integer("greenFlagOffset").notNull(),
  pitDuration: integer("pitDuration").notNull(),
  fuelTankSize: doublePrecision("fuelTankSize").notNull(),
  stdStintFuelLaptime: integer("stdStintFuelLaptime").notNull(),
  stdStintFuelPerLap: integer("stdStintFuelPerLap").notNull(),
  fuelSaveStintLaptime: integer("fuelSaveStintLaptime").notNull(),
  fuelSaveStintFuelPerLap: doublePrecision("fuelSaveStintFuelPerLap").notNull(),
});

// Track Table
export const track = pgTable("track", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

// Car Table
export const car = pgTable("car", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  fuelTankCapacity: doublePrecision("fuelTankCapacity").notNull(),
});

// Car Track Laptime Table
export const carTrackLaptime = pgTable("car_track_laptime", {
  id: serial("id").primaryKey(),
  trackId: integer("trackId")
    .references(() => track.id)
    .notNull(),
  carId: integer("carId")
    .references(() => car.id)
    .notNull(),
  fuelPerLap: doublePrecision("fuelPerLap").notNull(),
  avgLaptime: integer("avgLaptime").notNull(),
});

// User Event Table
export const userEvent = pgTable("user_event", {
  id: serial("id").primaryKey(),
  userId: integer("userId")
    .references(() => users.id)
    .notNull(),
  eventId: integer("eventId")
    .references(() => event.id)
    .notNull(),
  avgLaptime: integer("avgLaptime").notNull(),
});
