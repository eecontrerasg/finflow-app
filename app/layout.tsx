import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FinFlow',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-gray-900">
        {children}
      </body>
    </html>
  )
}
