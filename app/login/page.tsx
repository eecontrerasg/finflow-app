import Image from 'next/image'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-surface border border-gray-200 rounded-xl p-8 shadow-sm">
        <div className="flex justify-center mb-6">
          <Image
            className="ml-3 mt-3"
            src="/finflow-logo.svg"
            alt="Next.js logo"
            width={200}
            height={60}
            priority
          />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">
          Bienvenido de vuelta
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Inicia sesión para continuar
        </p>

        <form className="space-y-4">
          <input
            placeholder="Email"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary"
          />
          <button className="w-full bg-primary hover:bg-primary-hover text-white rounded-lg py-2 font-medium transition">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
