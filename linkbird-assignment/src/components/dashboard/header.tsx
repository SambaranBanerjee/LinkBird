"use client"

import { Menu, Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useUIStore } from "@/stores/ui-store"

export function Header() {
  const { toggleSidebar } = useUIStore()

  return (
    <header className="h-16 border-b bg-background fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 pl-8"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}