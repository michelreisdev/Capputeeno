export interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
  category: string
  description: string
  quantity: number
  price: number
}

export interface ProductFetchResponse {
  data: {
    Product: Product
  }
}
