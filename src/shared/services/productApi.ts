import { Environment } from '@/config/environment'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export interface IGetAllProductsRes {
  products: IProduct[]
  count: number
}

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: Environment.URL_BASE
  }),
  endpoints: builder => ({
    getAllProducts: builder.query<IGetAllProductsRes, void>({
      query: () => `products?page=1&rows=10`
    })
  })
})

// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productApi
