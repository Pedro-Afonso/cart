import { selectItems } from '@/slices/cartSlice'
import { useAppSelector } from '@/hooks'

export const useCartValues = () => {
  const items = useAppSelector(selectItems)

  let totalQuantity = 0
  let totalPrice = 0

  items.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += Number(item.product.price) * item.quantity
  })

  return { totalQuantity, totalPrice }
}
