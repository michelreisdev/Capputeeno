'use client'
// eslint-disable-next-line camelcase
import { Saira_Stencil_One } from 'next/font/google'
import { TegHeader, Logo } from './styles'
import SearchBar from '../SearchBar'
import CardController from '../CardController'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <TegHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <SearchBar placeholder="Procurando por algo específico?" />
      <CardController />
    </TegHeader>
  )
}
