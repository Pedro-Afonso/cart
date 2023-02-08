import { FC } from 'react'

import { addProduct, subProduct } from '@/slices/cartSlice'
import { useAppDispatch } from '@/hooks'
import { IProduct } from '@/services'
import { Button, Container, CounterDisplay } from './styles'

interface ICounterProps {
  product: IProduct
  quantity: number
}

export const CounterControl: FC<ICounterProps> = ({ product, quantity }) => {
  const dispatch = useAppDispatch()

  const isSubButtonDisabled = quantity <= 1

  const handleAddProduct = () => {
    dispatch(addProduct(product))
  }

  const handleSubProduct = () => {
    if (!isSubButtonDisabled) {
      dispatch(subProduct(product.id))
    }
  }

  return (
    <Container>
      <Button onClick={handleSubProduct} disabled={isSubButtonDisabled}>
        -
      </Button>
      <CounterDisplay data-testid="quantity-id">{quantity}</CounterDisplay>
      <Button onClick={handleAddProduct}>+</Button>
    </Container>
  )
}
