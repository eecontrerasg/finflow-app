import { useEffect, useState } from 'react'
import { Client } from '@/types/client'
import { ClientTagId } from '@/lib/constants/clientTags'
import { normalizeClientTags } from '@/lib/utils/normalizeClientTags'
import TagsSelector from './TagsSelector'

type Props = {
  open: boolean
  client?: Client | null
  onClose: () => void
  onSave: (data: Partial<Client>) => void
}

export const ClientModal = ({ open, client, onClose, onSave }: Props) => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [tags, setTags] = useState<ClientTagId[]>([])

  useEffect(() => {
    if (!client) return

    setName(client.name)
    setCompany(client.company ?? '')
    setEmail(client.email ?? '')
    setPhone(client.phone ?? '')
    setNotes(client.notes ?? '')
    setTags(normalizeClientTags(client.tags))
  }, [client])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-lg font-semibold">
          {client ? 'Editar cliente' : 'Nuevo cliente'}
        </h2>

        <div className="space-y-4">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nombre *"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <input
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Empresa"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Teléfono"
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Notas"
            rows={3}
            className="w-full rounded-lg border px-3 py-2 text-sm"
          />

          <div>
            <div className="mb-2 text-xs font-semibold uppercase text-gray-500">
              Tags
            </div>
            <TagsSelector value={tags} onChange={setTags} />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-8">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 cursor-pointer"
          >
            Cancelar
          </button>

          <button
            disabled={!name}
            onClick={() =>
              onSave({
                id: client?.id,
                name,
                company,
                email,
                phone,
                notes,
                tags
              })
            }
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white disabled:opacity-50 cursor-pointer"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  )
}
