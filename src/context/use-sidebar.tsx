"use client";
import { useState } from 'react';

import {
  usePathname,
  useRouter,
} from 'next/navigation';

import { useClerk } from '@clerk/nextjs';

const useSideBar = () => {
  const [expand, setExpand] = useState<boolean | undefined>(undefined);
  const router = useRouter();
  const pathname = usePathname();

  const page = pathname.split("/").pop();
  const { signOut } = useClerk();

  const onSignOut = () => signOut(() => router.push("/"));

  const onExpand = () => setExpand((prev) => !prev);

  return {
    expand,
    onExpand,
    page,
    onSignOut,
  };
};

export default useSideBar;
