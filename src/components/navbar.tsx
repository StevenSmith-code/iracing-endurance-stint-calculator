"use client";
import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  UserButton,
  useUser,
} from '@clerk/nextjs';

import Logo from './logo';
import { ModeToggle } from './mode-toggle';

export function Navbar() {
  const { user } = useUser();
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-sm bg-background flex items-center">
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
              <Link className="text-foreground" href={"/sign-in"}>
                Login
              </Link>
            </Button>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-md mr-4 text-center text-foreground">
                Welcome back {user?.firstName}!
              </p>
              <UserButton />
            </div>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
