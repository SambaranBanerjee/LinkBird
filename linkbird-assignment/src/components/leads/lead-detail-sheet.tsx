"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Lead, Interaction } from "@/types/lead"
import { X, Mail, Phone, Calendar, Linkedin, MessageSquare } from "lucide-react"
import { useState } from "react"

interface LeadDetailSheetProps {
  lead: Lead | null
  onClose: () => void
}

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "contacted", label: "Contacted" },
  { value: "responded", label: "Responded" },
  { value: "converted", label: "Converted" },
]

const mockInteractions: Interaction[] = [
  {
    id: 1,
    leadId: 1,
    type: "email",
    message: "Hi Dlibag. I'm building consultative...",
    date: "2024-01-15T10:30:00Z",
    status: "sent"
  },
  {
    id: 2,
    leadId: 1,
    type: "linkedin",
    message: "Connection request sent",
    date: "2024-01-15T11:15:00Z",
    status: "delivered"
  },
  {
    id: 3,
    leadId: 1,
    type: "email",
    message: "Follow-up: Hey, did you get a chance to go into...",
    date: "2024-01-16T09:45:00Z",
    status: "read"
  },
  {
    id: 4,
    leadId: 1,
    type: "email",
    message: "Hi Dlibag, just following up on my message...",
    date: "2024-01-17T14:20:00Z",
    status: "replied"
  }
]

export function LeadDetailSheet({ lead, onClose }: LeadDetailSheetProps) {
  const [currentStatus, setCurrentStatus] = useState(lead?.status || "pending")
  const [interactions] = useState<Interaction[]>(mockInteractions)

  if (!lead) return null

  const statusVariants = {
    pending: "outline",
    contacted: "secondary",
    responded: "warning",
    converted: "success",
  } as const

  const interactionIcons = {
    email: Mail,
    call: Phone,
    meeting: Calendar,
    linkedin: Linkedin,
    other: MessageSquare,
  }

  return (
    <Sheet open={!!lead} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="sm:max-w-md lg:max-w-lg overflow-y-auto">
        <SheetHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <SheetTitle>Lead Profile</SheetTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </SheetHeader>

        <div className="space-y-6">
          {/* Lead Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{lead.name}</h2>
              <Badge variant={statusVariants[currentStatus as keyof typeof statusVariants]}>
                {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
              </Badge>
            </div>
            {lead.title && <p className="text-muted-foreground">{lead.title}</p>}
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{lead.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground">Company:</span>
                <span>{lead.company}</span>
              </div>
              {lead.linkedinUrl && (
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                  <a href={lead.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Campaign Information */}
          <div className="space-y-3">
            <h3 className="font-semibold">Campaign Information</h3>
            <div className="flex items-center space-x-2 p-3 bg-muted rounded-md">
              <span className="font-medium">{lead.campaignName}</span>
              <Badge variant="outline">Active</Badge>
            </div>
          </div>

          {/* Status Update */}
          <div className="space-y-3">
            <h3 className="font-semibold">Update Status</h3>
            <Select
              value={currentStatus}
              onValueChange={(value) => setCurrentStatus(value as typeof currentStatus)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Interaction History */}
          <div className="space-y-3">
            <h3 className="font-semibold">Interaction History</h3>
            <div className="space-y-3">
              {interactions.map((interaction) => {
                const IconComponent = interactionIcons[interaction.type]
                return (
                  <div key={interaction.id} className="flex items-start space-x-3 p-3 bg-muted rounded-md">
                    <IconComponent className="h-4 w-4 mt-1 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">{interaction.message}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(interaction.date).toLocaleDateString()} at{" "}
                        {new Date(interaction.date).toLocaleTimeString()}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {interaction.status}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button className="flex-1" variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
            <Button className="flex-1">
              <MessageSquare className="h-4 w-4 mr-2" />
              Update Status
            </Button>
          </div>

          {/* Notes */}
          {lead.notes && (
            <div className="space-y-3">
              <h3 className="font-semibold">Notes</h3>
              <p className="text-sm text-muted-foreground p-3 bg-muted rounded-md">
                {lead.notes}
              </p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}