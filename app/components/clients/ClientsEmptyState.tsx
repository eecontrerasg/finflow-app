export const ClientsEmptyState = ({ onCreate }: { onCreate: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Aún no tienes clientes
      </h3>

      <p className="text-sm text-gray-500 mb-6 max-w-sm">
        Agrega tu primer cliente para empezar a controlar cobros, pagos y fechas
        importantes sin usar Excel.
      </p>

      <button
        onClick={onCreate}
        className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 cursor-pointer"
      >
        Nuevo cliente
      </button>
    </div>
  )
}
