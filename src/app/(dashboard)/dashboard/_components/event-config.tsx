"use client";
import React from 'react';

import { FormProvider } from 'react-hook-form';

import { Loader } from '@/components/loader';
import { useEventForm } from '@/hooks/use-event';

import EventConfigCard from './event-card';

const EventConfig = () => {
  const { methods, onHandleSubmit, loading } = useEventForm();

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>
              <EventConfigCard />
            </Loader>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default EventConfig;
