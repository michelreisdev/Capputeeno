import { formatPrice } from '@/utils/format-price'
import { OrderDescription, Title, Price, Separator } from './styles'

interface OrderSummaryCardItemProps {
  title: string
  price: number
  total?: boolean
}

export default function OrderSummaryCardItem({
  title,
  price,
  total,
}: OrderSummaryCardItemProps) {
  return (
    <div>
      {total && <Separator></Separator>}
      <OrderDescription>
        <Title $total={total}>{title}</Title>
        <Price $total={total}>{formatPrice(price)}</Price>
      </OrderDescription>
    </div>
  )
}
