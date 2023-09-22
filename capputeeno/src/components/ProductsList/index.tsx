import { useProducts } from '@/hooks/useProducts'
import ProductCard from '../ProductCard'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;

  margin-top: 32px;
`

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
