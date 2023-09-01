'use client'

import ButtonAddToCart from '@/components/ButtonAddToCart'
import ButtonBack from '@/components/ButtonBack'
import { DefaultPageLayout } from '@/components/Layout'
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
const ProductInfo = styled.div``

interface proposProduct {
  id: number
}

export default function Product(searchParams: proposProduct) {
  return (
    <DefaultPageLayout>
      <Container>
        <ButtonBack />
        <section>
          <img src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg" />
          <div>
            <ProductInfo>
              <span>Caneca</span>
              <h2>Caneca preto fosco</h2>
              <span>R$ 40,00</span>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>
              <div>
                <h3>Descrição</h3>
                <p>
                  Aqui vem um texto descritivo do produto, esta caixa de texto
                  servirá apenas de exemplo para que simule algum texto que
                  venha a ser inserido nesse campo, descrevendo tal produto.
                </p>
              </div>
            </ProductInfo>
            <ButtonAddToCart />
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}
