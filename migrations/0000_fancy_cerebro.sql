DO $$ BEGIN
 CREATE TYPE "public"."type" AS ENUM('owner', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "car" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"fuelTankCapacity" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "car_track_laptime" (
	"id" serial PRIMARY KEY NOT NULL,
	"trackId" integer NOT NULL,
	"carId" integer NOT NULL,
	"fuelPerLap" double precision NOT NULL,
	"avgLaptime" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "event" (
	"id" serial PRIMARY KEY NOT NULL,
	"trackId" integer NOT NULL,
	"carId" integer NOT NULL,
	"presetName" text NOT NULL,
	"raceDuration" integer NOT NULL,
	"sessionStartGMT" integer NOT NULL,
	"raceStartTimeOfDay" integer NOT NULL,
	"greenFlagOffset" integer NOT NULL,
	"pitDuration" integer NOT NULL,
	"fuelTankSize" double precision NOT NULL,
	"stdStintFuelLaptime" integer NOT NULL,
	"stdStintFuelPerLap" integer NOT NULL,
	"fuelSaveStintLaptime" integer NOT NULL,
	"fuelSaveStintFuelPerLap" double precision NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "track" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_event" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"eventId" integer NOT NULL,
	"avgLaptime" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerkId" text NOT NULL,
	"fullname" text NOT NULL,
	"type" text NOT NULL,
	"prefDriverColor" text,
	"gmtOffset" integer,
	"iRating" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "users_clerkId_unique" UNIQUE("clerkId")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "car_track_laptime" ADD CONSTRAINT "car_track_laptime_trackId_track_id_fk" FOREIGN KEY ("trackId") REFERENCES "public"."track"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "car_track_laptime" ADD CONSTRAINT "car_track_laptime_carId_car_id_fk" FOREIGN KEY ("carId") REFERENCES "public"."car"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event" ADD CONSTRAINT "event_trackId_track_id_fk" FOREIGN KEY ("trackId") REFERENCES "public"."track"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "event" ADD CONSTRAINT "event_carId_car_id_fk" FOREIGN KEY ("carId") REFERENCES "public"."car"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_event" ADD CONSTRAINT "user_event_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_event" ADD CONSTRAINT "user_event_eventId_event_id_fk" FOREIGN KEY ("eventId") REFERENCES "public"."event"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
