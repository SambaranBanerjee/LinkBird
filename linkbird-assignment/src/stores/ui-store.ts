import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  selectedLead: number | null;
  selectedCampaign: number | null;
  searchQuery: string;
  filters: Record<string, unknown>;
  toggleSidebar: () => void;
  setSelectedLead: (leadId: number | null) => void;
  setSelectedCampaign: (campaignId: number | null) => void;
  setSearchQuery: (query: string) => void;
  setFilters: (filters: Record<string, unknown>) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  selectedLead: null,
  selectedCampaign: null,
  searchQuery: '',
  filters: {},
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSelectedLead: (leadId) => set({ selectedLead: leadId }),
  setSelectedCampaign: (campaignId) => set({ selectedCampaign: campaignId }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (filters) => set({ filters }),
}));