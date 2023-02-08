import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'
import { data } from '@/mocks'

import { CounterControl } from '..'

describe('CounterControl', () => {
  const product = data.products[0]
  const quantity = 2

  it('should show the quantity of the product', async () => {
    renderWithProviders(
      <CounterControl quantity={quantity} product={product} />
    )

    const quantityIndicator = screen.getByTestId('quantity-id')

    expect(quantityIndicator).toHaveTextContent(quantity.toString())
  })

  it('should increase the quantity of products', async () => {
    const { store } = renderWithProviders(
      <CounterControl quantity={quantity} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity }] }
        }
      }
    )
    const button = screen.getByRole('button', { name: /\+/i })

    fireEvent.click(button)

    const item = store.getState().cart.items[0]
    expect(item.product).toBe(product)
    expect(item.quantity).toBe(quantity + 1)
  })

  it('should decrease the quantity of products', async () => {
    const { store } = renderWithProviders(
      <CounterControl quantity={quantity} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity }] }
        }
      }
    )
    const button = screen.getByRole('button', { name: /-/i })

    fireEvent.click(button)

    const item = store.getState().cart.items[0]
    expect(item.product).toBe(product)
    expect(item.quantity).toBe(quantity - 1)
  })

  it('should not decrease the quantity of products', async () => {
    const { store } = renderWithProviders(
      <CounterControl quantity={1} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity: 1 }] }
        }
      }
    )
    const button = screen.getByRole('button', { name: /-/i })

    fireEvent.click(button)

    const item = store.getState().cart.items[0]
    expect(item.product).toBe(product)
    expect(item.quantity).toBe(1)
  })

  it('should have a disabled button', async () => {
    renderWithProviders(<CounterControl quantity={1} product={product} />)
    const button = screen.getByRole('button', { name: /-/i })

    expect(button).toBeDisabled()
  })
})
