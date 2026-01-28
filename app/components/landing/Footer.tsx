export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400 flex justify-between">
        <span>© {new Date().getFullYear()} FinFlow</span>
        <span>Hecho con foco en simplicidad</span>
      </div>
    </footer>
  )
}
