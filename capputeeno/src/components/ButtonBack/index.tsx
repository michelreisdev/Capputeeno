import { styled } from 'styled-components'
import IconButtonBack from '../icons/button-back'

const TagButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 100%;
  width: 72px;
  margin-bottom: 23px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: var(--secondary-text);
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
`

export default function ButtonBack() {
  return (
    <TagButtonBack>
      <IconButtonBack />
      Voltar
    </TagButtonBack>
  )
}
