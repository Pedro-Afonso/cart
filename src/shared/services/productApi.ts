import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export interface IProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface IGetAllProductsRes {
  products: IProduct[]
  total: number
  skip: number
  limit: number
}

export const productApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: [],
  endpoints: builder => ({
    getAllProducts: builder.query<IGetAllProductsRes, void>({
      query: () => 'products/'
    })
  })
})

// Export hooks for usage in functional components
export const { useGetAllProductsQuery } = productApi

// export endpoints for use in SSR
export const { getAllProducts } = productApi.endpoints
