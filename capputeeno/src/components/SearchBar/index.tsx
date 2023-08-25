import { SearchIcon } from './searchIcon'
import { SearchBarInput, SearchBarInputContainer } from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export default function SearchBar(props: InputProps) {
  return (
    <SearchBarInputContainer>
      <SearchBarInput {...props} />
      <SearchIcon />
    </SearchBarInputContainer>
  )
}
