"use client"

import type React from "react"

import { AppSidebar } from "@/app/(dashboard)/dashboard/_components/sidebar"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { open } = useSidebar()

  return (
    <div className="flex h-screen bg-background w-full">
      <AppSidebar />
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${open ? "md:ml-4" : "md:ml-16"}`}>
        <header className="sticky top-0 z-10 flex h-16 items-center bg-background px-4 border-b border-border">
          <SidebarTrigger />
          <h1 className="ml-4 text-2xl font-bold">Race Dashboard</h1>
        </header>
        <main className="flex-1 overflow-auto p-4 ">{children}</main>
      </div>
    </div>
  )
}

