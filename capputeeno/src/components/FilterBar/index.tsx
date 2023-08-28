'use client'
import styled from 'styled-components'
import FilterBarByType from '../FilterBarByType'

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`

export default function FilterBar() {
  return (
    <FilterContainer>
      <FilterBarByType />
    </FilterContainer>
  )
}
