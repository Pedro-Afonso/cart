import { TiShoppingCart } from 'react-icons/ti'
import { FC } from 'react'

import { useAppDispatch, useCartValues } from '@/hooks'
import { toggleSidebar } from '@/slices/sidebarSlice'

import { Button } from './styles'

export const CartButton: FC = () => {
  const dispatch = useAppDispatch()
  const { totalQuantity } = useCartValues()

  const onClick = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Button data-testid="cart-button-id" onClick={onClick}>
      <TiShoppingCart />
      {totalQuantity}
    </Button>
  )
}
