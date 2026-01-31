import { Client } from '@/types/client'
import { clientTagsMap } from '@/lib/constants/clientTags'
import { normalizeClientTags } from '@/lib/utils/normalizeClientTags'

type Props = {
  clients: Client[]
  onEdit: (client: Client) => void
}

export const ClientsTable = ({ clients, onEdit }: Props) => {
  return (
    <div className="rounded-xl border bg-white">
      <table className="w-full text-sm">
        <tbody>
          {clients.map(client => {
            const tags = normalizeClientTags(client.tags)

            return (
              <tr
                key={client.id}
                onClick={() => onEdit(client)}
                className="cursor-pointer hover:bg-gray-50"
              >
                <td className="px-4 py-3 font-medium">{client.name}</td>

                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tagId => {
                      const tag = clientTagsMap[tagId]

                      return (
                        <span
                          key={tagId}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${tag.className}`}
                        >
                          {tag.label}
                        </span>
                      )
                    })}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsTable
