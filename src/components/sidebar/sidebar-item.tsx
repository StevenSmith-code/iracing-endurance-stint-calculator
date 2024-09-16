"use client";
import React from 'react';

import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  icon: JSX.Element;
  path: string;
  label: string;
};

const SidebarItem = ({ icon, path, label }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/dashboard" && path === "/dashboard") ||
    pathname === path ||
    pathname?.startsWith(`${path}/`);
  const onClick = () => {
    if (isActive) return;
    router.push(path);
  };
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex mb-2 px-4 py-2 text-foreground hover:text-primary-foreground items-start justify-start text-sm hover:bg-primary hover:cursor-pointer transition duration-100 ease-out w-full",
        isActive && "bg-primary hover:bg-primary/40"
      )}
    >
      <span className="mr-2">{icon}</span>
      <p>{label}</p>
    </div>
  );
};

export default SidebarItem;
