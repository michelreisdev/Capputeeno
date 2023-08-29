'use client'
// eslint-disable-next-line camelcase
import { Saira_Stencil_One } from 'next/font/google'
import SearchBar from '../SearchBar'
import CardController from '../CardController'
import { useFilter } from '@/hooks/useFilter'
import { Container, TegHeader, Logo } from './styles'

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Header() {
  const { setSearch, search } = useFilter()

  return (
    <TegHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <Container>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CardController />
      </Container>
    </TegHeader>
  )
}
