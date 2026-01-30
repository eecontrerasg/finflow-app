'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'
import { supabase } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'

type UserProfile = {
  id: string
  full_name: string | null
  email: string | null
  avatar_url: string | null
  is_pro?: boolean
}

type UserContextType = {
  user: UserProfile | null
  loading: boolean
  signOut: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  async function loadUser() {
    const {
      data: { session }
    } = await supabase.auth.getSession()

    if (!session) {
      setUser(null)
      setLoading(false)
      return
    }

    const { data } = await supabase
      .from('profiles')
      .select('id, full_name, email, avatar_url')
      .single()

    setUser(data ?? null)
    setLoading(false)
  }

  useEffect(() => {
    loadUser()

    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange(() => {
      loadUser()
    })

    return () => subscription.unsubscribe()
  }, [])

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    redirect('/login')
  }

  return (
    <UserContext.Provider value={{ user, loading, signOut }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within UserProvider')
  }
  return context
}
