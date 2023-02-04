import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'
import { data } from '@/mocks'

import { MiniCard } from '..'

describe('MiniCard', () => {
  const product = data.products[0]
  const quantity = 1

  it('should render the product name', async () => {
    renderWithProviders(<MiniCard quantity={1} product={product} />)

    const heading = screen.getByRole('heading', {
      level: 3,
      name: product.name
    })

    expect(heading).toHaveTextContent(product.name)
  })

  it('should render the product image', async () => {
    renderWithProviders(<MiniCard quantity={1} product={product} />)

    const image = screen.getByRole('img')

    // expect(image).toHaveAttribute('src', product.photo)
    expect(image).toHaveAttribute('alt', product.name)
  })

  it('should render the price of the product', async () => {
    renderWithProviders(<MiniCard quantity={quantity} product={product} />)

    const price = screen.getByTestId('price-id')

    expect(price).toBeInTheDocument()
  })

  it('should increase the quantity of products', async () => {
    const { store } = renderWithProviders(
      <MiniCard quantity={quantity} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity }] }
        }
      }
    )
    const button = screen.getByRole('button', { name: /\+/i })

    fireEvent.click(button)

    const item = store.getState().cart.items[0]
    expect(button).toBeInTheDocument()
    expect(item.product).toBe(product)
    expect(item.quantity).toBe(2)
  })

  it('should decrease the quantity of products', async () => {
    const { store } = renderWithProviders(
      <MiniCard quantity={3} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity: 3 }] }
        }
      }
    )
    const button = screen.getByRole('button', { name: /-/i })

    fireEvent.click(button)

    const item = store.getState().cart.items[0]
    expect(button).toBeInTheDocument()
    expect(item.product).toBe(product)
    expect(item.quantity).toBe(2)
  })

  it('should remove item', async () => {
    global.confirm = () => true
    const { store } = renderWithProviders(
      <MiniCard quantity={3} product={product} />,
      {
        preloadedState: {
          cart: { items: [{ product, quantity: 3 }] }
        }
      }
    )
    const button = screen.getByTestId('remove-item-id')

    fireEvent.click(button)

    const items = store.getState().cart.items
    expect(button).toBeInTheDocument()
    expect(items).toHaveLength(0)
  })
})
