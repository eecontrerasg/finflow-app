'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Client } from '@/types/client'

type ContextType = {
  clients: Client[]
  loading: boolean
  saveClient: (data: Partial<Client>) => Promise<void>
}

const ClientsContext = createContext<ContextType | null>(null)

export const ClientsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('clients')
      .select('*')
      .then(({ data }) => {
        setClients(data ?? [])
        setLoading(false)
      })
  }, [])

  const saveClient = async (data: Partial<Client>) => {
    if (data.id) {
      const { data: updated } = await supabase
        .from('clients')
        .update(data)
        .eq('id', data.id)
        .select()
        .single()

      setClients(prev => prev.map(c => (c.id === updated.id ? updated : c)))
    } else {
      const { data: created } = await supabase
        .from('clients')
        .insert(data)
        .select()
        .single()

      setClients(prev => [created, ...prev])
    }
  }

  return (
    <ClientsContext.Provider value={{ clients, loading, saveClient }}>
      {children}
    </ClientsContext.Provider>
  )
}

export const useClients = () => {
  const ctx = useContext(ClientsContext)
  if (!ctx) throw new Error('useClients must be used inside ClientsProvider')
  return ctx
}
