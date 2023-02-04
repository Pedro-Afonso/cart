import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'
import { data } from '@/mocks'

import { CartButton } from '..'

describe('CartButton', () => {
  const product = data.products[0]

  it('should render the quantity of products', async () => {
    renderWithProviders(<CartButton />, {
      preloadedState: {
        cart: { items: [{ product, quantity: 2 }] }
      }
    })

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent(/2/i)
  })

  it('should open the sidebar', async () => {
    const { store } = renderWithProviders(<CartButton />, {
      preloadedState: {
        cart: { items: [{ product, quantity: 3 }] }
      }
    })
    const button = screen.getByRole('button')

    fireEvent.click(button)

    const sidebar = store.getState().sidebar
    expect(button).toBeInTheDocument()
    expect(sidebar.isSidebarOpen).toBe(true)
  })
})
