import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'
import { data } from '@/mocks'

import { Card } from '..'

describe('Card', () => {
  const product = data.products[0]

  it('should render the product name', async () => {
    renderWithProviders(<Card product={product} />)

    const heading = screen.getByRole('heading', {
      level: 3,
      name: product.name
    })

    expect(heading).toHaveTextContent(product.name)
  })

  it('should render the product image', async () => {
    renderWithProviders(<Card product={product} />)

    const image = screen.getByRole('img')

    // expect(image).toHaveAttribute('src', product.photo)
    expect(image).toHaveAttribute('alt', product.name)
  })

  it('should render the product description', async () => {
    renderWithProviders(<Card product={product} />)

    const description = screen.getByRole('heading', {
      level: 4,
      name: product.description
    })

    expect(description).toBeInTheDocument()
  })

  it('should render the price of the product', async () => {
    renderWithProviders(<Card product={product} />)

    const price = screen.getByTestId('price-id')

    expect(price).toBeInTheDocument()
  })

  it('should render a button', async () => {
    const { store } = renderWithProviders(<Card product={product} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const item = store.getState().cart.items[0]

    expect(item.product).toBe(product)
    expect(item.quantity).toBe(1)
    expect(item.quantity).not.toBe(2)
  })
})
