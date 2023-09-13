import { formatPrice } from './format-price'

interface Product {
  price_in_cents: number
  quantity: number
}

type Products = Product[]

export function sumTotalCart(products: Products): string {
  let sum = 0
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price_in_cents * products[i].quantity
  }
  return formatPrice(sum)
}
