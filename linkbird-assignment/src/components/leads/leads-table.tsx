"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Lead } from "@/types/lead"
import { LeadDetailSheet } from "@/components/leads/lead-detail-sheet"

interface LeadsTableProps {
  leads: Lead[]
  isLoading: boolean
  hasMore: boolean
  loadMore: () => void
}

const statusVariants = {
  pending: "outline",
  contacted: "secondary",
  responded: "warning",
  converted: "success",
} as const

const statusLabels = {
  pending: "Pending",
  contacted: "Contacted",
  responded: "Responded",
  converted: "Converted",
} as const

export function LeadsTable({ leads, isLoading, hasMore, loadMore }: LeadsTableProps) {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight
    if (bottom && hasMore && !isLoading) {
      loadMore()
    }
  }

  return (
    <>
      <div className="rounded-md border overflow-hidden">
        <div className="h-[600px] overflow-y-auto" onScroll={handleScroll}>
          <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
              <TableRow>
                <TableHead>Lead Name/Contact</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Contact Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow 
                  key={lead.id} 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => setSelectedLead(lead)}
                >
                  <TableCell className="font-medium">
                    <div>
                      <div>{lead.name}</div>
                      {lead.title && (
                        <div className="text-sm text-muted-foreground">{lead.title}</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{lead.email}</TableCell>
                  <TableCell>{lead.company}</TableCell>
                  <TableCell>{lead.campaignName}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[lead.status]}>
                      {statusLabels[lead.status]}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {lead.lastContactDate ? new Date(lead.lastContactDate).toLocaleDateString() : 'Never'}
                  </TableCell>
                </TableRow>
              ))}
              
              {isLoading && (
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={`skeleton-${index}`}>
                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                    <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                    <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  </TableRow>
                ))
              )}
              
              {!hasMore && leads.length > 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No more leads to load
                  </TableCell>
                </TableRow>
              )}
              
              {leads.length === 0 && !isLoading && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No leads found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <LeadDetailSheet 
        lead={selectedLead} 
        onClose={() => setSelectedLead(null)} 
      />
    </>
  )
}