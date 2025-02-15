import Link from "next/link"
import { Home, BarChart3, Settings, Clock, Flag } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-background border-r border-border">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-4 py-3">
          <Flag className="h-6 w-6 text-red-500" />
          <span className="text-lg font-bold text-foreground">FuelStint</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="text-foreground hover:text-red-500 transition-colors">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/fuel-calculator" className="text-foreground hover:text-red-500 transition-colors">
                <BarChart3 className="h-4 w-4" />
                <span>Fuel Calculator</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/stint-planner" className="text-foreground hover:text-red-500 transition-colors">
                <Clock className="h-4 w-4" />
                <span>Stint Planner</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/settings" className="text-foreground hover:text-red-500 transition-colors">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

