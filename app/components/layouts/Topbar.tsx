'use client'

import { useState } from 'react'
import { useUser } from '@/lib/context/UserContext'
import { UserDropdown } from '../ui/UserDropdown'

export default function Topbar() {
  const { user, loading } = useUser()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-40 mx-4 h-14 rounded-xl bg-white/80 backdrop-blur shadow-sm flex items-center justify-between px-6">
      {/* Left */}
      <span className="text-sm font-medium text-gray-700">Panel principal</span>

      {/* Right */}
      {!loading && user && <UserDropdown />}
    </header>
  )
}
