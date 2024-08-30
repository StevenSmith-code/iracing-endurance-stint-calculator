"use client";
import React from 'react';

import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

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
    router.push(path);
  };
  return (
    <Button variant={"ghost"} onClick={onClick} type="button" asChild>
      <div
        className={cn(
          "flex mb-2 text-foreground justify-left text-sm hover:bg-primary hover:cursor-pointer transition duration-75 ease-in p-2 w-full",
          isActive && "bg-primary hover:bg-primary/40"
        )}
      >
        <span className="mr-2">{icon}</span>
        <p>{label}</p>
      </div>
    </Button>
  );
};

export default SidebarItem;
