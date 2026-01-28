const features = [
  {
    icon: 'payments',
    title: 'Pagos claros',
    description: 'Registra y controla pagos sin perder tiempo.'
  },
  {
    icon: 'group',
    title: 'Gestión de clientes',
    description: 'Todo el historial en un solo lugar.'
  },
  {
    icon: 'bar_chart',
    title: 'Reportes simples',
    description: 'Entiende tu flujo de dinero fácilmente.'
  }
]

export default function Features() {
  return (
    <section className="bg-surface-muted py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Todo lo que necesitas, nada que sobre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(f => (
            <div
              key={f.title}
              className="bg-surface border border-gray-200 rounded-xl p-6"
            >
              <span className="material-icon text-primary text-3xl mb-4">
                {f.icon}
              </span>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
