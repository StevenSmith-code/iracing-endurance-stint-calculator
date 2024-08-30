"use client";
import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useToast } from '@/components/ui/use-toast';
import {
  EventSubmitionProps,
  EventSubmitionSchema,
} from '@/schemas/event.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useEventForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const methods = useForm<EventSubmitionProps>({
    resolver: zodResolver(EventSubmitionSchema),
    mode: "onChange",
  });

  const onHandleSubmit = methods.handleSubmit(
    async (values: EventSubmitionProps) => {
      try {
      } catch (error: any) {
        const errorMessage =
          error?.errors?.[0]?.longMessage || "An unknown error occurred";
        toast({
          title: "Error",
          description: errorMessage,
        });
      }
    }
  );
  return {
    methods,
    onHandleSubmit,
    loading,
  };
};
