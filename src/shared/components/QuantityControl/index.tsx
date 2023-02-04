import { FC } from 'react'

import { addProduct, subProduct } from '@/slices/cartSlice'
import { useAppDispatch } from '@/hooks'
import { IProduct } from '@/services'
import { Button, Container, Quantity } from './styles'

interface IQuantityControlProps {
  product: IProduct
  quantity: number
}

export const QuantityControl: FC<IQuantityControlProps> = ({
  product,
  quantity
}) => {
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
      <Quantity data-testid="quantity-id">{quantity}</Quantity>
      <Button onClick={handleAddProduct}>+</Button>
    </Container>
  )
}
