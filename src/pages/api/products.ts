// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { productData } from '@/config/productData'

type Data = {
  products: typeof productData
  count: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { rows, page } = getQuery(req.query)

  let products: typeof productData

  // Pagination
  if (rows && +rows <= 50 && page) {
    const startIndex = (page - 1) * rows
    const endIndex = page * rows
    products = productData.slice(startIndex, endIndex)
  } else {
    products = productData.slice(0, 8)
  }

  const count = products.length

  res.status(200).json({ products, count })
}

function getQuery(
  query: Partial<{
    [key: string]: string | string[]
  }>
) {
  const rows = Array.isArray(query.rows) ? query.rows[0] : query.rows ?? 0
  const page = Array.isArray(query.page) ? query.page[0] : query.page ?? 0

  return { rows: Number(rows), page: Number(page) }
}
