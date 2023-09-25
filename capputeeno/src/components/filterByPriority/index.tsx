import { ArrowIcon } from '../icons/arrow-icon'
import { useState } from 'react'
import { PriorityTypes } from '@/types/priority-types'
import { useFilter } from '@/hooks/useFilter'
import { FilterContainer, PriorityFilter } from './styles'

export default function FilterBarByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()
  const handleOpen = () => setIsOpen((prev) => !prev)
  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
