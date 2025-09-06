"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  Users, 
  Megaphone, 
  MessageSquare, 
  Linkedin, 
  Settings, 
  Activity,
  UserCheck,
  ChevronDown,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useUIStore } from "@/stores/ui-store"
import { useState } from "react"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Leads", href: "/dashboard/leads", icon: Users },
  { name: "Campaign", href: "/dashboard/campaigns", icon: Megaphone },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "LinkedIn Accounts", href: "/dashboard/linkedin", icon: Linkedin },
]

const settingsItems = [
  { name: "Setting & Billing", href: "/dashboard/settings", icon: Settings },
]

const adminItems = [
  { name: "Activity logs", href: "/dashboard/activity-logs", icon: Activity },
  { name: "User logs", href: "/dashboard/user-logs", icon: UserCheck },
]

const campaigns = [
  "Just Herbs",
  "Jukey chemistry",
  "Hyugailfe 2",
  "Honeyveda",
  "HempStreet",
  "HealthyHey 2"
]

const linkedinAccounts = [
  { name: "Pulkit Garg", email: "1999pakgarg@gmail.com" },
  { name: "Jiveish Lakhani", email: "jiveish@gmail.com" },
  { name: "Infantil Sahani", email: "infantil.sahani@gmail.com" },
  { name: "Bhawan", email: "bhanyan@kandid.blogspot.com" }
]

const recentActivity = [
  "Onn Satyarthy Regional Head",
  "Dr. Bhuvaneshwari",
  "Fertility & Women's Health + A...",
  "Sundeep Singh Building Product-led SEO Crowt...",
  "Dihoag Singh Manager Marketing & Communication...",
  "Vanshy Jain (yavveda) | primary intention...",
  "Suni Pal Helping Fashion & Ufestyle Br...",
  "Utkarah K. Airbnb Host | Ex-The Skin Slon...",
  "Shreya Ramakrishna Deputy Manager - Founders Off...",
  "Deepak Kumar Deputy Manager"
]

const statusItems = [
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Sent 7 mins ago" },
  { status: "Pending Approval", time: "Pending Approval" },
  { status: "Do Not Contact", time: "Do Not Contact" },
  { status: "Followup", time: "10 mins ago" }
]

export function Sidebar() {
  const pathname = usePathname()
  const { isSidebarOpen } = useUIStore()
  const [showCampaigns, setShowCampaigns] = useState(true)
  const [showLinkedIn, setShowLinkedIn] = useState(true)
  const [showActivity, setShowActivity] = useState(true)
  const [showStatus, setShowStatus] = useState(true)

  if (!isSidebarOpen) {
    return (
      <div className="w-16 bg-background border-r h-screen fixed left-0 top-0 pt-16">
        <div className="flex flex-col items-center py-4 space-y-4">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                size="icon"
                asChild
              >
                <Link href={item.href}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 bg-background border-r h-screen fixed left-0 top-0 pt-16 overflow-y-auto">
      <div className="p-6">
        {/* Personal Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">LinkBird</h1>
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Kandid</p>
              <p className="text-sm text-muted-foreground">Personal</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Main Navigation */}
        <div className="space-y-1 mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">Overview</h3>
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Settings Navigation */}
        <div className="space-y-1 mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">Settings</h3>
          {settingsItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Admin Navigation */}
        <div className="space-y-1 mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">Admin Panel</h3>
          {adminItems.map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.name}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            )
          })}
        </div>

        <Separator className="my-6" />

        {/* Campaigns Section */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="w-full justify-between px-2"
            onClick={() => setShowCampaigns(!showCampaigns)}
          >
            <span className="font-semibold">Campaigns</span>
            {showCampaigns ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {showCampaigns && (
            <div className="mt-2 space-y-1">
              {campaigns.map((campaign) => (
                <Button
                  key={campaign}
                  variant="ghost"
                  className="w-full justify-start text-sm font-normal"
                >
                  {campaign}
                </Button>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* LinkedIn Accounts Section */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="w-full justify-between px-2"
            onClick={() => setShowLinkedIn(!showLinkedIn)}
          >
            <span className="font-semibold">LinkedIn Accounts</span>
            {showLinkedIn ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {showLinkedIn && (
            <div className="mt-2 space-y-3">
              {linkedinAccounts.map((account, index) => (
                <div key={index} className="flex items-center space-x-3 px-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{account.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{account.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{account.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Recent Activity Section */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="w-full justify-between px-2"
            onClick={() => setShowActivity(!showActivity)}
          >
            <span className="font-semibold">Recent Activity</span>
            {showActivity ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {showActivity && (
            <div className="mt-2 space-y-1">
              <p className="text-sm text-muted-foreground px-2 mb-2">Lead</p>
              {recentActivity.slice(0, 6).map((activity, index) => (
                <div key={index} className="text-sm px-2 py-1 truncate">
                  {activity}
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator className="my-6" />

        {/* Status Section */}
        <div className="mb-6">
          <Button
            variant="ghost"
            className="w-full justify-between px-2"
            onClick={() => setShowStatus(!showStatus)}
          >
            <span className="font-semibold">Research</span>
            {showStatus ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
          {showStatus && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-muted-foreground px-2">Media Recent</p>
              <p className="text-sm font-semibold px-2">Status</p>
              {statusItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm px-2">
                  <span>{item.status}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}