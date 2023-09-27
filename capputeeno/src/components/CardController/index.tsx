import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import { Container, CartCount } from './styles'
import { BagIcon } from '../icons/BagIcon'

export default function CardController() {
  const { qtdItems } = useCart()
  const router = useRouter()
  const handleNavigateTo = () => {
    router.push('/cart')
  }
  return (
    <Container onClick={handleNavigateTo}>
      <BagIcon />
      <CartCount>{qtdItems}</CartCount>
    </Container>
  )
}
