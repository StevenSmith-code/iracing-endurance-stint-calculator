import React from 'react';

import { getUserData } from '@/actions/dashboard';

import { EventBreadcrumb } from './_components/event-breadcrumb';
import EventConfig from './_components/event-config';

type Props = {};

const DashboardPage = async (props: Props) => {
  const user = await getUserData();
  return (
    <div className="px-10 py-4">
      <EventBreadcrumb user={user![0]} />
      <section className="grid xl:grid-cols-4">
        <EventConfig />
      </section>
    </div>
  );
};

export default DashboardPage;
