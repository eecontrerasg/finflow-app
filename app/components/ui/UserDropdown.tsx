'use client'

import { useEffect, useRef, useState } from 'react'
import { useUser } from '@/lib/context/UserContext'

export function UserDropdown() {
  const { user, signOut } = useUser()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (!user) return null

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-gray-100 transition cursor-pointer"
      >
        {user.avatar_url ? (
          <img src={user.avatar_url} className="h-8 w-8 rounded-full" />
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
            {user.full_name?.[0] ?? 'U'}
          </div>
        )}

        <span className="text-sm text-gray-700 hidden sm:block">
          {user.full_name ?? user.email}
        </span>
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute right-0 mt-2 w-56
          origin-top-right
          rounded-xl
          bg-white
          shadow-lg
          border border-gray-200
          transition-all duration-200 ease-out
          ${
            open
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}
      >
        <div className="px-4 py-3">
          <div className="text-sm font-medium text-gray-800">
            {user.full_name}
          </div>
          <div className="text-xs text-gray-500 truncate">{user.email}</div>
        </div>

        <div className="border-t border-gray-100" />

        <button
          onClick={signOut}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition rounded-b-xl cursor-pointer"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
