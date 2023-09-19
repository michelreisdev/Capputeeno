import BagBar from '../BagBar'
import { styled } from 'styled-components'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  background-color: var(--delete-color);
  color: white;
  margin-left: -10px;
`

const Container = styled.div`
  position: relative;
  cursor: pointer;
`

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
