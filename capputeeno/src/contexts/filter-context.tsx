import { FilterType } from '@/types/filter-types'
import { PriorityTypes } from '@/types/priority-types'
import { ReactNode, createContext, useState } from 'react'

interface FilterContextProps {
  search: string
  page: number
  type: FilterType
  priority: PriorityTypes
  setPriority: (value: PriorityTypes) => void
  setSearch: (value: string) => void
  setPage: (value: number) => void
  setType: (value: FilterType) => void
}

export const FilterContext = createContext<FilterContextProps>({
  search: '',
  page: 0,
  type: FilterType.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: () => {},
  setSearch: () => {},
  setPage: () => {},
  setType: () => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterType.ALL)
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

  const value = {
    search,
    page,
    type,
    priority,
    setPriority,
    setSearch,
    setPage,
    setType,
  }

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}
