import { selectIsSidebarOpen, toggleSidebar } from '@/slices/sidebarSlice'
import { useAppDispatch, useAppSelector, useCartValues } from '@/hooks'
import { Sidebar } from '@/components'
import { formatPrice } from '@/utils'

import { CheckoutButton, Content, Total } from './styles'
import { selectItems } from '@/slices/cartSlice'
import { MiniCard } from '../MiniCard'

export const CartSidebar = () => {
  const dispatch = useAppDispatch()

  const items = useAppSelector(selectItems)

  const isOpen = useAppSelector(selectIsSidebarOpen)

  const { totalPrice } = useCartValues()

  const onCheckout = () => {
    alert(
      'Parabéns! Você adquiriu:\n\n' +
        items.map(item => item.quantity + ' x ' + item.product.name).join('\n')
    )
  }

  const onClose = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Sidebar
      title={
        <>
          Carrinho <br /> de compras
        </>
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      <Content>
        {items.map(item => (
          <MiniCard
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </Content>
      <Total>
        <span>Total:</span>
        <span>{formatPrice(totalPrice)}</span>
      </Total>
      <CheckoutButton onClick={onCheckout}>Finalizar Compra</CheckoutButton>
    </Sidebar>
  )
}
