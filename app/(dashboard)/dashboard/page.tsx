"use client";
import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { EventConfigCard } from "./_components/EventConfigCard";
import { FuelStintTimesCard } from "./_components/FuelStintTimesCard";
import { FuelStintConfigCard } from "./_components/FuelStintConfigCard";
import { TimeOfDayFactorsCard } from "./_components/TimeOfDayFactorsCard";
import { ManualFuelCalculatorCard } from "./_components/ManualFuelCalculatorCard";
import { FinalFuelCalculatorCard } from "./_components/FinalFuelCalculatorCard";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(dayjs().utc().format("HH:mm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs().utc().format("HH:mm"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">
        Manage your race strategy and fuel calculations
      </p>
      <p>PLEASE ONLY USE GALLONS</p>
      <div className="flex items-center justify-center gap-2 border border-gray-600 rounded-md p-2">
        <Clock className="w-4 h-4" />
        <p className="text-primary xl:text-lg">Current GMT: {currentTime}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <EventConfigCard />
        <FuelStintTimesCard />
        <FuelStintConfigCard />
        <TimeOfDayFactorsCard />
        <ManualFuelCalculatorCard />
      </div>
      <FinalFuelCalculatorCard />
    </div>
  );
}
