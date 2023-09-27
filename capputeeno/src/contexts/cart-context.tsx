import SumItemCart from '@/utils/sum-item-cart'
import { createContext, ReactNode, useState } from 'react'

interface CartContextProps {
  qtdItems: number
  setQtdItems: (value: number) => void
}

export const CartContext = createContext<CartContextProps>({
  qtdItems: 0,
  setQtdItems: () => {},
})

interface ProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ProviderProps) {
  const [qtdItems, setQtdItems] = useState(SumItemCart())

  const value = { qtdItems, setQtdItems }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
