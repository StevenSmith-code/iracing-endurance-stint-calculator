import React from 'react';

import { SIDE_BAR_MENU } from '@/constants/menu';

import SidebarItem from './sidebar-item';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-accent h-[calc(100vh-56px)] lg:w-[200px]">
      {SIDE_BAR_MENU.map((item) => (
        <SidebarItem
          key={item.path}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Sidebar;
