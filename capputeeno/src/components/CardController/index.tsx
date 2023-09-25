import BagBar from '../BagBar'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import { Container, CartCount } from './styles'

export default function CardController() {
  const { qtdItems } = useCart()
  const router = useRouter()
  const handleNavigateTo = () => {
    router.push('/cart')
  }
  return (
    <Container onClick={handleNavigateTo}>
      <BagBar />
      <CartCount>{qtdItems}</CartCount>
    </Container>
  )
}
