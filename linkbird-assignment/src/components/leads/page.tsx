"use client"

import { useState, useEffect } from "react"
import { LeadsTable } from "@/components/leads/leads-table"
import { LeadsFilters } from "@/components/leads/leads-filters"
import { Lead } from "@/types/lead"
import { useUIStore } from "@/stores/ui-store"

// Mock data for demonstration
const mockLeads: Lead[] = [
  {
    id: 1,
    name: "Dilbag Singh",
    email: "dilbag@cynoveda.com",
    company: "Cynoveda",
    campaignId: 1,
    campaignName: "Cynoveda",
    status: "contacted",
    lastContactDate: "2024-01-15T10:30:00Z",
    title: "Manager Marketing & Communication",
    linkedinUrl: "https://linkedin.com/in/dilbag",
    notes: "Author: 🌟 🌟 🌟"
  },
  {
    id: 2,
    name: "On Satyarthy",
    email: "on@regionalhead.com",
    company: "Cynoveda",
    campaignId: 1,
    campaignName: "Cynoveda",
    status: "pending",
    lastContactDate: "",
    title: "Regional Head"
  },
  {
    id: 3,
    name: "Dr. Bhuvaneshwari",
    email: "bhuvaneshwari@fertility.com",
    company: "Cynoveda",
    campaignId: 1,
    campaignName: "Cynoveda",
    status: "contacted",
    lastContactDate: "2024-01-14T15:45:00Z",
    title: "Fertility & Women's Health Specialist"
  },
  {
    id: 4,
    name: "Sundeep Singh",
    email: "sundeep@seo.com",
    company: "Cynoveda",
    campaignId: 1,
    campaignName: "Cynoveda",
    status: "contacted",
    lastContactDate: "2024-01-14T16:20:00Z",
    title: "Building Product-led SEO Growth"
  },
  {
    id: 5,
    name: "Vanity Jain",
    email: "vanity@ayurveda.com",
    company: "Cynoveda",
    campaignId: 1,
    campaignName: "Cynoveda",
    status: "responded",
    lastContactDate: "2024-01-13T11:15:00Z",
    title: "Ayurveda | Primary Infertility Specialist"
  },
  {
    id: 6,
    name: "Sunil Pal",
    email: "sunil@digisidekick.com",
    company: "Digi Sidekick",
    campaignId: 2,
    campaignName: "Digi Sidekick",
    status: "pending",
    lastContactDate: "",
    title: "Helping Fashion & Lifestyle Brands"
  },
  {
    id: 7,
    name: "Utkarah K.",
    email: "utkarah@skinstory.com",
    company: "The Skin Story",
    campaignId: 3,
    campaignName: "The Skin Story",
    status: "converted",
    lastContactDate: "2024-01-12T09:30:00Z",
    title: "Airbnb Host | Ex-The Skin Star"
  },
  {
    id: 8,
    name: "Strenya Ramakrishna",
    email: "strenya@potomut.com",
    company: "Potomut",
    campaignId: 4,
    campaignName: "Potomut",
    status: "responded",
    lastContactDate: "2024-01-11T14:20:00Z",
    title: "Deputy Manager - Founders Office"
  },
  {
    id: 9,
    name: "Deepak Kumar",
    email: "deepak@requit.com",
    company: "Re'equit",
    campaignId: 5,
    campaignName: "Re'equit",
    status: "contacted",
    lastContactDate: "2024-01-10T16:45:00Z",
    title: "Deputy Manager Advertising"
  }
]

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [campaignFilter, setCampaignFilter] = useState("all")
  
  const { setSearchQuery: setGlobalSearchQuery } = useUIStore()

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLeads(mockLeads)
      setFilteredLeads(mockLeads)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setGlobalSearchQuery(searchQuery)
  }, [searchQuery, setGlobalSearchQuery])

  useEffect(() => {
    let result = leads

    // Apply search filter
    if (searchQuery) {
      result = result.filter(lead =>
        lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.campaignName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply status filter
    if (statusFilter !== "all") {
      result = result.filter(lead => lead.status === statusFilter)
    }

    // Apply campaign filter
    if (campaignFilter !== "all") {
      result = result.filter(lead => lead.campaignName.toLowerCase().includes(campaignFilter.toLowerCase()))
    }

    setFilteredLeads(result)
  }, [leads, searchQuery, statusFilter, campaignFilter])

  const loadMore = () => {
    if (isLoading || !hasMore) return
    
    setIsLoading(true)
    // Simulate loading more data
    setTimeout(() => {
      const newLeads = Array.from({ length: 5 }, (_, i) => ({
        ...mockLeads[i % mockLeads.length],
        id: leads.length + i + 1
      }))
      
      setLeads(prev => [...prev, ...newLeads])
      setIsLoading(false)
      
      // Stop loading more after 50 items for demo
      if (leads.length + newLeads.length >= 50) {
        setHasMore(false)
      }
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-muted-foreground">Manage and track your leads across all campaigns</p>
      </div>

      <LeadsFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        campaignFilter={campaignFilter}
        onCampaignFilterChange={setCampaignFilter}
      />

      <LeadsTable
        leads={filteredLeads}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
      />

      <div className="text-sm text-muted-foreground text-center">
        Showing {filteredLeads.length} of {leads.length} leads
        {searchQuery && ` matching "${searchQuery}"`}
      </div>
    </div>
  )
}