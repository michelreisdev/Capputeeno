import { ProductInCart } from '@/types/product'

export default function SumItemCart(): number {
  const value = JSON.parse(localStorage.getItem('cart-items') ?? '[]')

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => (sum += parseInt(item.quantity)), 0)
  }
  const cartTotalInCents = calculateTotal(value)
  return cartTotalInCents
}
