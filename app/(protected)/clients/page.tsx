'use client'

import { useState } from 'react'
import { ClientModal } from '@/components/clients/ClientModal'
import { ClientsTable } from '@/components/clients/ClientsTable'
import { ClientsFilters } from '@/components/clients/ClientsFilters'
import { ClientsEmptyState } from '@/components/clients/ClientsEmptyState'
import { Client } from '@/types/client'
import { ClientTagId } from '@/lib/constants/clientTags'
import { useClients } from '@/lib/context/ClientsContex'

export const ClientsPage = () => {
  const { clients, saveClient } = useClients()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<Client | null>(null)
  const [filterTag, setFilterTag] = useState<ClientTagId | undefined>()

  const filteredClients = filterTag
    ? clients.filter(client => client.tags?.includes(filterTag))
    : clients

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Clientes</h1>

        <button
          onClick={() => {
            setEditing(null)
            setOpen(true)
          }}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm cursor-pointer"
        >
          Nuevo cliente
        </button>
      </div>

      {/* Filters */}
      {clients.length > 0 && (
        <div className="mb-4">
          <ClientsFilters activeTag={filterTag} onChange={setFilterTag} />
        </div>
      )}

      {/* Content */}
      {filteredClients.length === 0 ? (
        <ClientsEmptyState
          onCreate={() => {
            setEditing(null)
            setOpen(true)
          }}
        />
      ) : (
        <ClientsTable
          clients={filteredClients}
          onEdit={client => {
            setEditing(client)
            setOpen(true)
          }}
        />
      )}

      <ClientModal
        open={open}
        client={editing}
        onClose={() => setOpen(false)}
        onSave={async data => {
          await saveClient(data)
          setOpen(false)
        }}
      />
    </>
  )
}

export default ClientsPage
