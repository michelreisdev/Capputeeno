'use client'
import SumItemCart from '@/utils/sum-item-cart'
import { ReactNode, createContext, useState } from 'react'

export const CartContext = createContext({
  qtdItems: 0,
  setQtdItems: (value: number) => {},
})

interface ProviderProps {
  children: ReactNode
}
export function CartContextProvider({ children }: ProviderProps) {
  const [qtdItems, setQtdItems] = useState(SumItemCart())

  return (
    <CartContext.Provider
      value={{
        qtdItems,
        setQtdItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
