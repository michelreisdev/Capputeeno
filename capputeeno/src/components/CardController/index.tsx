import { useLocalStorage } from '@/hooks/useLocalStorage'
import BagBar from '../BagBar'
import { styled } from 'styled-components'

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
`

export default function CardController() {
  const { value } = useLocalStorage('cart-items', [])
  const accumulator = 0
  const sum = value.reduce(function (accumulator, object) {
    return accumulator + object.quantity
  }, 0)

  return (
    <Container>
      <BagBar />
      <CartCount>{sum}</CartCount>
    </Container>
  )
}
