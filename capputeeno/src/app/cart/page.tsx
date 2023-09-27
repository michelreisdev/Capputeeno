'use client'
import React from 'react'
import BtnPurchase from '@/components/BtnPurchase'
import ButtonBack from '@/components/ButtonBack'
import CardItemCart from '@/components/CardItemCart'
import { DefaultPageLayout } from '@/components/Layout'
import OrderSummaryCardItem from '@/components/OrderSummaryCardItem'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { formatPrice } from '@/utils/format-price'
import { ProductInCart } from '@/types/product'

import {
  CardItems,
  Container,
  OrderSummaryCard,
  OrderSummaryCardFooter,
  OrderSummaryCardFooterItems,
  OrderEmpty,
} from './styles'

const Cart: React.FC = () => {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  )
  const freeShipping = 0
  const shipping = 4000
  const priceShipping = value.length ? shipping : freeShipping
  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0,
    )
  }

  function handleUpdateQuantity(id: string, quantity: number) {
    const updatedItems = value.map((item) =>
      item.id === id ? { ...item, quantity } : item,
    )
    updateLocalStorage(updatedItems)
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
            Total ({value.length} produtos){' '}
            <span>{formatPrice(calculateTotal(value))}</span>
          </p>
          {value.length ? (
            value.map((item) => (
              <CardItemCart
                key={item.id}
                product={item}
                onChange={handleUpdateQuantity}
                onRemove={handleRemoveProduct}
                quantity={item.quantity}
              />
            ))
          ) : (
            <OrderEmpty>Seu carrinho está vazio</OrderEmpty>
          )}
        </CardItems>
        <OrderSummaryCard>
          <p>RESUMO DO PEDIDO</p>
          <OrderSummaryCardItem
            title="Subtotal do produto"
            price={calculateTotal(value)}
          />
          <OrderSummaryCardItem title="Entrega" price={priceShipping} />
          <OrderSummaryCardItem
            title="Total"
            price={calculateTotal(value) + priceShipping}
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

export default Cart
