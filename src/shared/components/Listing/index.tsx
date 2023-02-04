import { useGetAllProductsQuery } from '@/services'
import { Card } from '../Card'
import { Grid } from './styles'

export const Listing = () => {
  const { data } = useGetAllProductsQuery()
  const products = data?.products ?? []

  return (
    <Grid>
      {products &&
        products.map(product => <Card key={product.id} product={product} />)}
    </Grid>
  )
}
