import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Empieza a usar FinFlow hoy
        </h2>
        <p className="text-gray-600 mb-8">
          Accede a tu panel y empieza a ordenar tus finanzas.
        </p>

        <Link
          href="/login"
          className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-medium transition"
        >
          Inicia sesión
        </Link>
      </div>
    </section>
  )
}
