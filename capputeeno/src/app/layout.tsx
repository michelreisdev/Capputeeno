import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/filter-context'

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
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
