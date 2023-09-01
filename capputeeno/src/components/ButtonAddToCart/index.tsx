import styled from 'styled-components'
import { BagIcon } from '../icons/BagIcon'

const TagButtonAddToCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: none;
  background-color: var(--bg-btn-primary);
  height: 44px;
  width: 448px;
  border-radius: 4px;
  padding: 10px 0px;
  color: #f5f5fa;
  mix-blend-mode: multiply;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`

export default function ButtonAddToCart() {
  return (
    <TagButtonAddToCart>
      <BagIcon buttonAddCard />
      Adicionar ao carrinho
    </TagButtonAddToCart>
  )
}
