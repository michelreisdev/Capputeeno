import { formatPrice } from '@/utils/format-price'
import { Card } from './styles'
import { useRouter } from 'next/navigation'
interface ProductCardProps {
  image: string
  title: string
  price: number
  keyProduct: string
}

export default function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price)
  const router = useRouter()

  function pagProduct(key: number) {
    router.push(`/product?product=${props.keyProduct}`)
  }

  return (
    <Card onClick={() => pagProduct(props.keyProduct)}>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  )
}
