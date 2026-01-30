'use client'

import { useUser } from '@/lib/context/UserContext'

export default function Topbar() {
  const { user, loading, signOut } = useUser()

  return (
    <header className="h-14 bg-surface border-b border-gray-200 flex items-center justify-between px-6">
      <span className="text-sm text-gray-600">Panel principal</span>

      <div className="flex items-center gap-3">
        {!loading && user && (
          <>
            <div className="text-sm text-gray-700">
              {user.full_name ?? user.email}
            </div>

            {user.avatar_url ? (
              <img src={user.avatar_url} className="h-8 w-8 rounded-full" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                {user.full_name?.[0] ?? 'U'}
              </div>
            )}
          </>
        )}
      </div>

      <button
        onClick={signOut}
        className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
      >
        Cerrar sesión
      </button>
    </header>
  )
}
