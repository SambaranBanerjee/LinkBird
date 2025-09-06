import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      <main className="ml-0 lg:ml-80 pt-16">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}