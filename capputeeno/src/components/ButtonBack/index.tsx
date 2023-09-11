import { styled } from 'styled-components'
import IconButtonBack from '../icons/button-back'
import { useRouter } from 'next/navigation'

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
interface ButtonBackProps {
  navigateTo: string
}
export default function ButtonBack({ navigateTo }: ButtonBackProps) {
  const router = useRouter()

  const handleNavigateTo = () => {
    router.push(navigateTo)
  }

  return (
    <TagButtonBack onClick={handleNavigateTo}>
      <IconButtonBack />
      Voltar
    </TagButtonBack>
  )
}
