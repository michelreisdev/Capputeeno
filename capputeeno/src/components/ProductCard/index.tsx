'use client'
import { formatPrice } from '@/utils/format-price'
import { Card } from './styles'
import TagImage from '../Image'
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

  function pagProduct(key: string): void {
    router.push(`/product?id=${key}`)
  }

  return (
    <Card onClick={() => pagProduct(props.keyProduct)} role="button">
      <TagImage
        src={props.image}
        width={256}
        height={300}
        alt="Imagem Produto"
      />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  )
}
