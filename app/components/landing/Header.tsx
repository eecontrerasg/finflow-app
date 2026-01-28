import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/finflow-icon.svg" alt="FinFlow" width={32} height={32} />
          <span className="font-semibold text-lg">FinFlow</span>
        </div>

        <Link
          href="/login"
          className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Inicia sesión
        </Link>
      </div>
    </header>
  )
}
