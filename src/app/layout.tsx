import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amigo Oculto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-white text-gray-100">{children}</body>
    </html>
  )
}
