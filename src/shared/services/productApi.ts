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
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/'
  }),
  endpoints: builder => ({
    getAllProducts: builder.query<IGetAllProductsRes, void>({
      query: () => `products?page=1&rows=8&sortBy=id&orderBy=DESC`
    })
  })
})

// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productApi
