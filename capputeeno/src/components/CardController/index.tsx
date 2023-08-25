import { useLocalStorage } from '@/hooks/useLocalStorage'
import BagBar from '../BagBar'
import CarCount from '../CarCount'
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

  return (
    <Container>
      <BagBar />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
