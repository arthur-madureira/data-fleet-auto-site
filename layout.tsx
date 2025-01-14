import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Data Fleet Auto - Transformando dados em eficiência para sua frota automotiva",
  description: "Oferecemos soluções inteligentes para toda a cadeia automotiva, entregando o sistema de gestão mais completo do setor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

