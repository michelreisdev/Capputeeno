import IconButtonBack from '../icons/button-back'
import { useRouter } from 'next/navigation'
import { TagButtonBack } from './styles'

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
