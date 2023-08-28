import { useProducts } from '@/hooks/useProducts'

export default function ProductList() {
  const { data } = useProducts()
  console.log(data)
  return <></>
}
