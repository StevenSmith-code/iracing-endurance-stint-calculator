import React from 'react';

import Link from 'next/link';

import { getUserData } from '@/actions/dashboard';
import { Button } from '@/components/ui/button';

import Logo from './logo';
import { ModeToggle } from './mode-toggle';

export async function Navbar() {
  const user = await getUserData();
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-sm bg-muted flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
          {!user ? (
            <Button
              size={"sm"}
              variant={"outline"}
              className="bg-primary"
              asChild
            >
              <Link className="text-foreground" href={"/auth/sign-in"}>
                Login
              </Link>
            </Button>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-md mr-4 text-center text-foreground">
                Welcome back {user[0].fullname}!
              </p>
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
