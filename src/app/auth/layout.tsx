import React from 'react';

import { redirect } from 'next/navigation';

import Logo from '@/components/logo';
import { currentUser } from '@clerk/nextjs/server';

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <Logo />
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold">
          Welcome! Let&apos;s get you ready to manage your next endurance race.
        </h2>
        <p className="text-iridium md:text-sm mb-10">
          This is a reimagined version of the Sassy Enduro Manager
        </p>
        {/* <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        /> add image of dashboard */}
      </div>
    </div>
  );
};

export default Layout;
