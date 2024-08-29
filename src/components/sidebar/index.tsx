import React from 'react';

import { SIDE_BAR_MENU } from '@/constants/menu';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-muted h-[calc(100vh-80px)] lg:w-[250px] p-4">
      {SIDE_BAR_MENU.map((item) => (
        <div className="flex mb-4 text-foreground" key={item.path}>
          <span className="mr-2">{item.icon}</span>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
