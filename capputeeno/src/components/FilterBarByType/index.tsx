import { useFilter } from '@/hooks/useFilter'
import { FilterType } from '@/types/filter-types'
import { FilterList, FilterItem } from './styles'

export default function FilterBarByType() {
  const { setPage } = useFilter()
  const { type, setType } = useFilter()
  const handleChangeType = (value: FilterType) => {
    setPage(0)
    setType(value)
  }
  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}
