'use client'

import ButtonBack from '@/components/ButtonBack'
import CardItemCart from '@/components/CardItemCart'
import { DefaultPageLayout } from '@/components/Layout'
import OrderSummaryCardItem from '@/components/OrderSummaryCardItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Product } from '@/types/product'
import { sumTotalCart } from '@/utils/cart-sum'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  gap: 32px;
`
export const CardItems = styled.div`
  height: 100%;

  p:nth-child(2n + 0) {
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    width: 175px;
    height: 36px;
    top: 151px;
    left: 160px;
  }
  p:nth-child(2n + 1) {
    width: max-content;
    height: 24px;
    top: 193px;
    left: 160px;

    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 23px;
  }
  p:nth-child(2n + 1) span {
    font-size: 16px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`
export const OrderSummaryCard = styled.div`
  width: 352px;
  height: 700px;
  padding-left: 24px;
  background: var(--shapes-01);
  > p {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-01);
    margin: 16px auto 29px;
  }
`

export default function Cart() {
  const { value } = useLocalStorage('cart-items', [])
  const priceTotal = sumTotalCart(value)

  return (
    <DefaultPageLayout>
      <Container>
        <CardItems>
          <ButtonBack navigateTo="/" />
          <p>SEU CARRINHO</p>
          <p>
            Total ({value.length} produtos) <span>{priceTotal}</span>
          </p>
          {value.map((item) => (
            <CardItemCart key={item.id} product={item} />
          ))}
        </CardItems>
        <OrderSummaryCard>
          <p>RESUMO DO PEDIDO</p>
          <OrderSummaryCardItem title="Subtotal do produto" price={16100} />
          <OrderSummaryCardItem title="Entrega" price={4000} />
          <OrderSummaryCardItem title="Total" price={20100} total={true} />
        </OrderSummaryCard>
      </Container>
    </DefaultPageLayout>
  )
}
