import React from 'react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-secondary">
      <div className="max-w-screen-sm md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full text-foreground">
          <Button size={"sm"} variant={"ghost"}>
            Privacy Policy
          </Button>
          <Button size={"sm"} variant={"ghost"}>
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
}
