import { BagIcon } from '../icons/BagIcon'
import { Product } from '@/types/product'
import { useCart } from '@/hooks/useCart'
import SumItemCart from '@/utils/sum-item-cart'
import { TagButtonAddToCart } from './styles'

interface ButtonAddToCartProps {
  product?: Product
}

export default function ButtonAddToCart(props: ButtonAddToCartProps) {
  const { setQtdItems } = useCart()
  const { product } = props
  function handleAddToCar(props?: Product) {
    const idItem = props?.id || []
    const cartItems = localStorage.getItem('cart-items')
    let cartItemsParsed = JSON.parse(cartItems || '[]')

    const queryItem = cartItemsParsed.findIndex(
      (item: Product) => item.id === idItem,
    )

    if (queryItem >= 0) {
      cartItemsParsed[queryItem].quantity += 1
    } else {
      cartItemsParsed = [
        ...cartItemsParsed,
        {
          id: props?.id,
          name: props?.name,
          price_in_cents: props?.price_in_cents,
          quantity: 1,
          image_url: props?.image_url,
          category: props?.category,
          description: props?.description,
        },
      ]
    }

    localStorage.setItem('cart-items', JSON.stringify(cartItemsParsed))
    setQtdItems(SumItemCart())
  }
  return (
    <TagButtonAddToCart onClick={() => handleAddToCar(product)}>
      <BagIcon buttonAddCard />
      Adicionar ao carrinho
    </TagButtonAddToCart>
  )
}
