'use client'
import React from 'react'
import ButtonAddToCart from '@/components/ButtonAddToCart'
import ButtonBack from '@/components/ButtonBack'
import { DefaultPageLayout } from '@/components/Layout'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import TagImage from '@/components/Image'
import { Container, ProductInfo } from './styles'
import { Product } from '@/types/product'

interface ProductProps {
  searchParams: { id: string }
}

const ProductPage: React.FC<ProductProps> = ({ searchParams }) => {
  const { data } = useProduct(searchParams.id)
  const price = formatPrice(data?.price_in_cents ?? 0)

  return (
    <DefaultPageLayout>
      <Container>
        <ButtonBack navigateTo="/" />
        <section>
          {data?.image_url && (
            <TagImage
              src={data.image_url ?? ''}
              alt="Imagem do produto"
              width={640}
              height={580}
            />
          )}
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
            <ButtonAddToCart product={data as Product} />{' '}
          </div>
        </section>
      </Container>
    </DefaultPageLayout>
  )
}

export default ProductPage
