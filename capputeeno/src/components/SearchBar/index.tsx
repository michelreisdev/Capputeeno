import { InputHTMLAttributes } from 'react'
import { SearchIcon } from '../icons/searchIcon'
import { Input, SearchBarInputContainer } from './styles'
import { useFilter } from '@/hooks/useFilter'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export default function SearchBar(props: InputProps) {
  const { setSearch, search } = useFilter()
  return (
    <SearchBarInputContainer>
      <Input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </SearchBarInputContainer>
  )
}
