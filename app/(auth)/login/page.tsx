'use client'

import Image from 'next/image'

import { supabase } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import GoogleIcon from '@/components/svgs/GoogleIcon'

export const LoginPage = () => {
  const signIn = async (provider: 'google' | 'azure') => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log('SESSION', data.session)
    })
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-surface border border-gray-200 rounded-xl p-8">
        <div className="flex justify-center mb-6">
          <Image
            className="ml-3 mt-3 cursor-pointer"
            src="/finflow-logo.svg"
            alt="Next.js logo"
            onClick={() => {
              redirect('/')
            }}
            width={200}
            height={60}
            priority
          />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-6">
          Selecciona un proveedor
        </h1>

        <div className="space-y-3">
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg py-2 hover:bg-highlight-blue transition"
          >
            <GoogleIcon />
            <span>Continuar con Google</span>
          </button>

          {/* <button
            onClick={() => signIn('azure')}
            className="w-full border border-gray-200 rounded-lg py-2 hover:bg-highlight-blue transition"
          >
            Continuar con Microsoft
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default LoginPage
