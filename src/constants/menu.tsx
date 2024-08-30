import {
  Calendar,
  CogIcon,
  LayoutDashboard,
} from 'lucide-react';

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    path: "/dashboard",
  },
  {
    label: "Scheduling",
    icon: <Calendar size={20} />,
    path: "/scheduling",
  },
  {
    label: "Settings",
    icon: <CogIcon size={20} />,
    path: "/settings",
  },
];

// type TABS_MENU_PROPS = {
//   label: string;
//   icon?: JSX.Element;
// };

// export const TABS_MENU: TABS_MENU_PROPS[] = [
//   {
//     label: "unread",
//     icon: <EmailIcon />,
//   },
//   {
//     label: "all",
//     icon: <EmailIcon />,
//   },
//   {
//     label: "expired",
//     icon: <TimerIcon />,
//   },
//   {
//     label: "starred",
//     icon: <StarIcon />,
//   },
// ];
