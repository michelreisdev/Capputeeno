'use client'

import ButtonBack from '@/components/ButtonBack'
import CardItemCart from '@/components/CardItemCart'
import { DefaultPageLayout } from '@/components/Layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { sumTotalCart } from '@/utils/cart-sum'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
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
        <div>
          <ButtonBack navigateTo="/" />
        </div>
      </Container>
    </DefaultPageLayout>
  )
}
