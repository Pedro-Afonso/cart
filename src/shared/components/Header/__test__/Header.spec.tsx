import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'

import { Header } from '..'

describe('Header', () => {
  it('should render a logo', () => {
    renderWithProviders(<Header />)

    const logo = screen.getByRole('heading', {
      name: /mks/i
    })

    expect(logo).toBeInTheDocument()
  })

  it("should render a 'CartButton' component", () => {
    renderWithProviders(<Header />)

    const cartButton = screen.getByTestId('cart-button-id')

    expect(cartButton).toBeInTheDocument()
  })
})
