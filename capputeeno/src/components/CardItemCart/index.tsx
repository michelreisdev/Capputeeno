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
          <div onClick={() => onRemove(product.id)}>
            <DeleteItem />
          </div>
        </CardItemTop>
        <p>{product.description}</p>
        <CardItemBottom>
          <SelectQuantity
            value={quantity}
            onChange={(e) => onChange(product.id, parseInt(e.target.value))}
          >
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
