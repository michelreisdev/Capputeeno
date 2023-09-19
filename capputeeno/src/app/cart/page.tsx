'use client'

import BtnPurchase from '@/components/BtnPurchase'
import ButtonBack from '@/components/ButtonBack'
import CardItemCart from '@/components/CardItemCart'
import { DefaultPageLayout } from '@/components/Layout'
import OrderSummaryCardItem from '@/components/OrderSummaryCardItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductFetchResponse, ProductInCart } from '@/types/product'
import { sumTotalCart } from '@/utils/cart-sum'
import { formatPrice } from '@/utils/format-price'
import { ChangeEvent, useState } from 'react'
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
  padding: 0 24px 24px 24px;
  display: flex;
  flex-direction: column;
  background: var(--shapes-01);
  > p {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark-01);
    margin: 16px auto 29px 0;
  }
`

export const OrderSummaryCardFooter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  flex-direction: column;
  gap: 12px;
`
export const OrderSummaryCardFooterItems = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #737380;
  cursor: pointer;
  text-decoration: underline;
  text-transform: uppercase;
`

export default function Cart() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  )
  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0,
    )
  }

  const cartTotalInCents = calculateTotal(value)
  const cartTotal = formatPrice(cartTotalInCents)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })
    updateLocalStorage(newValue)
  }
  const handleRemoveProduct = (id: string) => {
    const newValue = value.filter((item) => item.id !== id)
    updateLocalStorage(newValue)
  }

  return (
    <DefaultPageLayout>
      <Container>
        <CardItems>
          <ButtonBack navigateTo="/" />
          <p>SEU CARRINHO</p>
          <p>
            Total ({value.length} produtos) <span>{cartTotal}</span>
          </p>
          {value.map((item) => (
            <CardItemCart
              key={item.id}
              product={item}
              onchanch={handleUpdateQuantity}
              onRemove={handleRemoveProduct}
              quantity={item.quantity}
            />
          ))}
        </CardItems>
        <OrderSummaryCard>
          <p>RESUMO DO PEDIDO</p>
          <OrderSummaryCardItem
            title="Subtotal do produto"
            price={cartTotalInCents}
          />
          <OrderSummaryCardItem title="Entrega" price={4000} />
          <OrderSummaryCardItem
            title="Total"
            price={cartTotalInCents + 4000}
            total={true}
          />
          <BtnPurchase />
          <OrderSummaryCardFooter>
            <OrderSummaryCardFooterItems>Ajuda</OrderSummaryCardFooterItems>
            <OrderSummaryCardFooterItems>
              reembolsos
            </OrderSummaryCardFooterItems>
            <OrderSummaryCardFooterItems>
              entregas e frete
            </OrderSummaryCardFooterItems>
            <OrderSummaryCardFooterItems>
              trocas e devoluções
            </OrderSummaryCardFooterItems>
          </OrderSummaryCardFooter>
        </OrderSummaryCard>
      </Container>
    </DefaultPageLayout>
  )
}
