import { useProducts } from '@/hooks/useProducts'
import ProductCard from '../ProductCard'
import { ListContainer } from './styles'

export default function ProductList() {
  const { data } = useProducts()

  return (
    <ListContainer>
      {data?.map((product) => (
        <ProductCard
          keyProduct={product.id as unknown as string}
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
        />
      ))}
    </ListContainer>
  )
}
