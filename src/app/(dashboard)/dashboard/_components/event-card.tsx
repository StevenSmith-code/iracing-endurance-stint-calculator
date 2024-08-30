"use client";
import React from 'react';

import { useFormContext } from 'react-hook-form';

import FormGenerator from '@/components/form-generator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EVENT_CONFIG_FORM } from '@/constants/forms';

const EventConfigCard = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //   const carsAndTracks = await getCarsAndTracks();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overall Event Config</CardTitle>
        <CardDescription>
          Set the time configurations for the event.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {EVENT_CONFIG_FORM.map((field) => (
          <FormGenerator
            key={field.id}
            {...field}
            errors={errors}
            register={register}
            name={field.name}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default EventConfigCard;
