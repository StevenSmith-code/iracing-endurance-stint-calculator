import React from 'react';

import { getUserData } from '@/actions/dashboard';

import { EventBreadcrumb } from './_components/event-breadcrumb';
import EventConfig from './_components/event-config';
import FinalFuelStintCalculatorCard
  from './_components/final-fuel-stint-calculator-card';
import FuelStintAvgTimesCard from './_components/fuel-stint-avg-times-card';
import RealTimeDeltasCard from './_components/realtime-deltas-card';

type Props = {};

const DashboardPage = async (props: Props) => {
  const user = await getUserData();
  return (
    <div className="px-10 py-4">
      <EventBreadcrumb user={user![0]} />
      <section className="grid xl:grid-cols-6">
        <EventConfig />
        <div className="flex flex-col xl:col-span-4 xl:col-start-3 justify-around">
          <FuelStintAvgTimesCard className={"xl:h-1/4"} />
          <FinalFuelStintCalculatorCard />
          <RealTimeDeltasCard className="xl:h-1/4" />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
