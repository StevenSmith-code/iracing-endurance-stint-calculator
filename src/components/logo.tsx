import React from 'react';

import localFont from 'next/font/local';
import Image from 'next/image';

import { cn } from '@/lib/utils';

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

export default function Logo() {
  return (
    <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex ">
      <Image src="/logo.svg" alt="logo" height={30} width={30} />
      <p
        className={cn("text-lg text-foreground mt-0.5", headingFont.className)}
      >
        Endurance Stint Calculator
      </p>
    </div>
  );
}
