import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block mb-4 text-sm font-medium text-primary bg-highlight-blue px-3 py-1 rounded-full">
            Gestión financiera simple
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Controla tus pagos,
            <br />
            <span className="text-primary">sin complicaciones</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            FinFlow te ayuda a gestionar clientes, pagos y reportes desde un
            solo lugar. Diseñado para profesionales que quieren orden sin
            fricción.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Inicia sesión
            </Link>

            <span className="text-sm text-gray-400">
              Sin tarjetas · Sin fricción
            </span>
          </div>
        </div>

        {/* Visual placeholder */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-surface border border-gray-200 shadow-sm flex items-center justify-center">
            <span className="text-gray-400">Dashboard Preview</span>
          </div>
        </div>
      </div>
    </section>
  )
}
