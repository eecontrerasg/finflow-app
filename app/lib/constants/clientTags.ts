export enum ClientTagId {
  Monthly = 1,
  VIP = 2,
  Overdue = 3,
  Retainer = 4
}

export const clientTagsMap: Record<
  ClientTagId,
  {
    label: string
    className: string
  }
> = {
  [ClientTagId.Monthly]: {
    label: 'Mensual',
    className: 'bg-blue-100 text-blue-700'
  },
  [ClientTagId.VIP]: {
    label: 'VIP',
    className: 'bg-purple-100 text-purple-700'
  },
  [ClientTagId.Overdue]: {
    label: 'Atrasado',
    className: 'bg-red-100 text-red-700'
  },
  [ClientTagId.Retainer]: {
    label: 'Retainer',
    className: 'bg-green-100 text-green-700'
  }
}
