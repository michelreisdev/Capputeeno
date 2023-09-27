import { BagIcon } from '../icons/BagIcon'
import { Product } from '@/types/product'
import { useCart } from '@/hooks/useCart'
import SumItemCart from '@/utils/sum-item-cart'
import { TagButtonAddToCart } from './styles'

interface ButtonAddToCartProps {
  product: Product
}

export default function ButtonAddToCart({ product }: ButtonAddToCartProps) {
  const { setQtdItems } = useCart()

  function handleAddToCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart-items') || '[]')
    const itemIndex = cartItems.findIndex(
      (item: Product) => item.id === product.id,
    )

    if (itemIndex >= 0) {
      cartItems[itemIndex].quantity += 1
    } else {
      cartItems.push({ ...product, quantity: 1 })
    }

    localStorage.setItem('cart-items', JSON.stringify(cartItems))
    setQtdItems(SumItemCart())
  }

  return (
    <TagButtonAddToCart onClick={handleAddToCart}>
      <BagIcon buttonAddCard />
      Adicionar ao carrinho
    </TagButtonAddToCart>
  )
}
