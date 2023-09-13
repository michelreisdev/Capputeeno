import TagImage from '../Image'
import DeleteItem from '../icons/Delete-item'
import { formatPrice } from '@/utils/format-price'
import {
  Container,
  InfoProduct,
  CardItemTop,
  CardItemBottom,
  SelectQuantity,
  PriceItem,
} from './styles'
import { ChangeEvent, useState } from 'react'
import { Product } from '@/types/product'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface CardItemCartProps {
  product: Product
}
export default function CardItemCart({ product }: CardItemCartProps) {
  const [value, setValue] = useState(product.quantity)
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    product.quantity = Number(e.target.value)
    setValue(Number(e.target.value))
    addItemCart(product)
  }
  return (
    <Container>
      <TagImage
        src={product.image_url}
        alt="Imagem do produto"
        width={256}
        height={211}
      />
      <InfoProduct>
        <CardItemTop>
          <p>{product.name}</p>
          <div>
            <DeleteItem />
          </div>
        </CardItemTop>
        <p>{product.description}</p>
        <CardItemBottom>
          <SelectQuantity value={value} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <PriceItem>
            {formatPrice(product.price_in_cents * product.quantity)}
          </PriceItem>
        </CardItemBottom>
      </InfoProduct>
    </Container>
  )
}

function addItemCart(item: Product) {
  const cartItems = localStorage.getItem('cart-items')
  const cartItemsParsed = JSON.parse(cartItems || '[]')
  const indexProduct = cartItemsParsed.findIndex(
    (items) => items.id === item.id,
  )
  cartItemsParsed[indexProduct].quantity = item.quantity

  localStorage.setItem('cart-items', JSON.stringify(cartItemsParsed))
}
