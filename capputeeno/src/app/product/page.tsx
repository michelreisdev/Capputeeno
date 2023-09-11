'use client'

import ButtonAddToCart from '@/components/ButtonAddToCart'
import ButtonBack from '@/components/ButtonBack'
import { DefaultPageLayout } from '@/components/Layout'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 160px;
  padding-top: 25px;
  section {
    display: flex;
    align-items: center;
    gap: 32px;
    > div {
      height: 580px;
      width: 448px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span:first-child {
      }
    }
    image {
      width: 640px;
      height: 580px;
    }
  }
`
const ProductInfo = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 300;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--text-dark);
  }
  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--shapes-dark);
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 24px;
  }
  > div {
    h3 {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--text-dark);
      margin-top: 58px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--text-dark-2);
      margin-top: 8px;
    }
  }
`

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const { data } = useProduct(searchParams.id)
  const price = formatPrice(data?.price_in_cents ?? 0)
  return (
    <DefaultPageLayout>
      <Container>
        <ButtonBack navigateTo="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{price}</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <ButtonAddToCart />
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}
