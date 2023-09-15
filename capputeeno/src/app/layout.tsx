import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { DefaultProviders } from '@/components/DefaultProviders/default-providers'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Capputeeno',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
