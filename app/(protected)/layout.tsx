'use client'

import { useUser } from '@/lib/context/UserContext'
import Topbar from '@/components/layouts/Topbar'
import Sidebar from '@/components/layouts/Sidebar'

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useUser()

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-500 text-sm">Cargando…</span>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 p-6 mt-2">{children}</main>
      </div>
    </div>
  )
}
