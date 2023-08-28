'use client'
import styled from 'styled-components'
import FilterBarByType from '../FilterBarByType'
import FilterBarByPriority from '../filterByPriority'

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterBarByType />
      <FilterBarByPriority />
    </FilterContainer>
  )
}
