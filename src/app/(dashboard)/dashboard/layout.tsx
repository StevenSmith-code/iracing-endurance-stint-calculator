import React from 'react';

import { Navbar } from '@/components/navbar';
import Sidebar from '@/components/sidebar';

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-20">
        <Sidebar />
        <main className="">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
