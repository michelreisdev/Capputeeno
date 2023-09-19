import SumItemCart from '@/utils/sum-item-cart'
import { useEffect, useState } from 'react'
import { useCart } from './useCart'

export function useLocalStorage<T>(item: string, initialValue: T) {
  const { setQtdItems } = useCart()
  const [value, setValue] = useState<T>(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const value = localStorage.getItem(item)
    if (value) setValue(JSON.parse(value))
    setQtdItems(SumItemCart())
  }, [item])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
    setQtdItems(SumItemCart())
  }

  return {
    value,
    updateLocalStorage,
  }
}
