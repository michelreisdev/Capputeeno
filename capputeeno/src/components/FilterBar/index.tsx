'use client'

import FilterBarByType from '../FilterBarByType'
import FilterBarByPriority from '../filterByPriority'
import { FilterContainer } from './styles'

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterBarByType />
      <FilterBarByPriority />
    </FilterContainer>
  )
}
