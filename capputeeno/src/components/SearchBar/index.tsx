import { InputHTMLAttributes } from 'react'
import { SearchIcon } from '../icons/searchIcon'
import { SearchBarInput, SearchBarInputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export default function SearchBar(props: InputProps) {
  return (
    <SearchBarInputContainer>
      <SearchBarInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </SearchBarInputContainer>
  )
}
