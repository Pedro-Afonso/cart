import { useAppSelector } from '@/shared/hooks'

export const Cart = () => {
  const cart = useAppSelector(state => state.cart)

  return <h1>{cart.total}</h1>
}
