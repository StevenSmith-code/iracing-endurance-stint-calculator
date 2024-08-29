import React from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-background">
      <Navbar />
      <main className=" pt-40 pb-20 ">{children}</main>
      <Footer />
    </div>
  );
}
