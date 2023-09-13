import styled from 'styled-components'
import { BagIcon } from '../icons/BagIcon'
import { Product } from '@/types/product'

const TagButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  background-color: var(--bg-btn-primary);
  height: 44px;
  width: 448px;
  border-radius: 4px;
  padding: 10px 0px;
  color: #f5f5fa;
  mix-blend-mode: multiply;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`

interface ButtonAddToCartProps {
  product?: Product
}

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
}

export default function ButtonAddToCart(props: ButtonAddToCartProps) {
  const { product } = props
  return (
    <TagButtonAddToCart onClick={() => handleAddToCar(product)}>
      <BagIcon buttonAddCard />
      Adicionar ao carrinho
    </TagButtonAddToCart>
  )
}
