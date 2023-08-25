import { useLocalStorage } from '@/hooks/useLocalStorage'
import BagBar from '../BagBar'
import CarCount from '../CarCount'

export default function CardController() {
  const { value } = useLocalStorage('card-items')

  return (
    <div>
      <BagBar />
      {value.length && <CarCount />}
    </div>
  )
}
