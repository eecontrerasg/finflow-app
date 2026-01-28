export default function Topbar() {
  return (
    <header className="h-14 bg-surface border-b border-gray-200 flex items-center justify-between px-6">
      <span className="text-sm text-gray-600">Panel principal</span>

      <div className="flex items-center gap-3">
        <div className="text-sm text-gray-600">Dr. Juan Pérez</div>
        <div className="h-8 w-8 rounded-full bg-gray-200" />
      </div>
    </header>
  )
}
