import { ClientTagId, clientTagsMap } from '@/lib/constants/clientTags'

type Props = {
  value: ClientTagId[]
  onChange: (tags: ClientTagId[]) => void
}

export const TagsSelector = ({ value, onChange }: Props) => {
  const toggleTag = (tag: ClientTagId) => {
    if (value.includes(tag)) {
      onChange(value.filter(t => t !== tag))
    } else {
      onChange([...value, tag])
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(clientTagsMap).map(([key, tag]) => {
        const tagId = Number(key) as ClientTagId
        const active = value.includes(tagId)

        return (
          <button
            key={tagId}
            type="button"
            onClick={() => toggleTag(tagId)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer
              ${
                active
                  ? tag.className
                  : 'bg-gray-100 text-gray-600 border-gray-200'
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

export default TagsSelector
