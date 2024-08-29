import React from 'react';

import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';

const headingFont = localFont({
  src: "../../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function MarketingPage() {
  const user = await currentUser();

  if (user) redirect("/dashboard");
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col mb-6",
          headingFont.className
        )}
      >
        <Badge className="mb-8 shadow-sm px-4 py-2 bg-primary text-foreground uppercase">
          New website launched
        </Badge>
        <h1 className="text-3xl md:text-6xl text-center text-foreground mb-4 max-w-4xl">
          Handle all your endurance scheduling and calculation needs with this
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-primary to-secondary text-foreground px-4 p-2 rounded-md pb-2 w-fit ">
          Stint Calculator.
        </div>
      </div>

      <div
        className={cn(
          " text-sm md:text-xl text-muted-foreground mt-4 max-w-xs md:max-w-2xl text-center w-fit",
          textFont.className
        )}
      >
        We help you with your planning for any endurance race from stint
        management, fuel calculations, and roster management
      </div>
      <Button className="mt-6 mb-40" size={"lg"} asChild>
        <Link className="text-foreground" href={"/auth/sign-up"}>
          Create an account for free.
        </Link>
      </Button>
    </div>
  );
}
