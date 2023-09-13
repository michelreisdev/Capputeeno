import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Product } from '@/types/product'

export default function addItemCart(item: Product) {
  const { value } = useLocalStorage('cart-items', [])
}
