export interface Lead {
    id: number
    name: string
    email: string
    company: string
    campaignId: number
    campaignName: string
    status: 'pending' | 'contacted' | 'responded' | 'converted'
    lastContactDate: string
    title?: string
    linkedinUrl?: string
    notes?: string
  }
  
  export interface Interaction {
    id: number
    leadId: number
    type: 'email' | 'call' | 'meeting' | 'linkedin' | 'other'
    message: string
    date: string
    status: 'sent' | 'delivered' | 'read' | 'replied' | 'failed'
  }
  
  export interface Campaign {
    id: number
    name: string
    status: 'draft' | 'active' | 'paused' | 'completed'
    totalLeads: number
    successfulLeads: number
  }