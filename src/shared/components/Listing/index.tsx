import { useGetAllProductsQuery } from '@/services'
import { Card } from '../Card'
import { CardSkeleton } from '../CardSkeleton'
import { Grid } from './styles'

export const Listing = () => {
  const { data, isLoading } = useGetAllProductsQuery()
  const products = data?.products ?? []

  return (
    <Grid>
      {!!products &&
        products.map(product => <Card key={product.id} product={product} />)}
      {isLoading &&
        Array(8)
          .fill(1)
          .map((i, key) => <CardSkeleton key={key} />)}
    </Grid>
  )
}
