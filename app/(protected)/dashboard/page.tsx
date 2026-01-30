import AppShell from '@/components/layouts/AppShell'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardLayout() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )

  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <Card title="Ingresos del mes" value="$1,250" bg="bg-highlight-green" />
        <Card title="Pagos pendientes" value="3" bg="bg-highlight-blue" />
        <Card title="Errores" value="1" bg="bg-red-50" />
      </div>
    </>
  )
}

function Card({ title, value, bg }: any) {
  return (
    <div className={`rounded-xl p-4 border border-gray-200 ${bg}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}
