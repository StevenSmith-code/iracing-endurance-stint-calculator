"use client";
import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useToast } from '@/components/ui/use-toast';
import { useEventStore } from '@/context/event-name-store';
import {
  EventSubmitionProps,
  EventSubmitionSchema,
} from '@/schemas/event.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useEventForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const setEventForm = useEventStore((state) => state.setEventDetails);

  const methods = useForm<EventSubmitionProps>({
    resolver: zodResolver(EventSubmitionSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (values: EventSubmitionProps) => {
      console.log("Form submission initiated with values:", values);
      setLoading(true);
      try {
        setEventForm({
          trackId: values.trackId,
          carId: values.carId,
          presetName: values.presetName,
          raceDuration: values.raceDuration,
          sessionStartGMT: values.sessionStartGMT,
          raceStartTimeOfDay: values.raceStartTimeOfDay,
          greenFlagOffset: values.greenFlagOffset,
          pitDuration: values.pitDuration,
          stdStintFuelLaptime: values.stdStintFuelLaptime,
          stdStintFuelPerLap: values.stdStintFuelPerLap,
          fuelSaveStintLapTime: values.fuelSaveStintLapTime,
          fuelSaveStintFuelPerLap: values.fuelSaveStintFuelPerLap,
        });
        console.log(useEventStore.getState());
      } catch (error: any) {
        const errorMessage =
          error?.errors?.[0]?.longMessage || "An unknown error occurred";
        toast({
          title: "Error",
          description: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    }
  );

  return {
    methods,
    onHandleSubmit,
    loading,
  };
};
