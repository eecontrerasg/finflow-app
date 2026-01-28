'use client'

export function Tooltip({
  label,
  children,
  show
}: {
  label: string
  children: React.ReactNode
  show: boolean
}) {
  if (!show) return <>{children}</>

  return (
    <div className="relative group">
      {children}
      <div
        className="
          absolute left-full top-1/2 -translate-y-1/2 ml-3
          opacity-0 group-hover:opacity-100
          transition
          pointer-events-none
        "
      >
        <div className="bg-dark text-white text-xs px-2 py-1 rounded-md shadow">
          {label}
        </div>
      </div>
    </div>
  )
}
