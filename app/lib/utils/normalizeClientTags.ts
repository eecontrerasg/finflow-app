import { ClientTagId } from '@/lib/constants/clientTags'

export const normalizeClientTags = (
  tags: number[] | null | undefined
): ClientTagId[] => {
  if (!tags) return []

  return tags.filter((tag): tag is ClientTagId =>
    Object.values(ClientTagId).includes(tag as ClientTagId)
  )
}
