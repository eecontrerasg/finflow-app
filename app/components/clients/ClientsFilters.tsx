import { ClientTagId, clientTagsMap } from '@/lib/constants/clientTags'

type Props = {
  activeTag?: ClientTagId
  onChange: (tag?: ClientTagId) => void
}

export const ClientsFilters = ({ activeTag, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(clientTagsMap).map(([key, tag]) => {
        const tagId = Number(key) as ClientTagId
        const active = activeTag === tagId

        return (
          <button
            key={tagId}
            onClick={() => onChange(active ? undefined : tagId)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium border transition
              ${
                active
                  ? tag.className
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }
            `}
          >
            {tag.label}
          </button>
        )
      })}
    </div>
  )
}

export default ClientsFilters
