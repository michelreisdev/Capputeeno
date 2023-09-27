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
import { Product } from '@/types/product'

interface CardItemCartProps {
  product: Product
  onChange: (id: string, quantity: number) => void
  quantity: number
  onRemove: (id: string) => void
}
export default function CardItemCart({
  product,
  quantity,
  onChange,
  onRemove,
}: CardItemCartProps) {
  function handleQuantityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newQuantity = parseInt(event.target.value)
    onChange(product.id, newQuantity)
  }
  function handleRemove() {
    onRemove(product.id)
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
          <div onClick={handleRemove}>
            <DeleteItem />
          </div>
        </CardItemTop>
        <p>{product.description}</p>
        <CardItemBottom>
          <SelectQuantity value={quantity} onChange={handleQuantityChange}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </SelectQuantity>
          <PriceItem>
            {formatPrice(product.price_in_cents * product.quantity)}
          </PriceItem>
        </CardItemBottom>
      </InfoProduct>
    </Container>
  )
}
