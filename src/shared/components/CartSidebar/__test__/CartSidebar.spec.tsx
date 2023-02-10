import { fireEvent, screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'
import { data } from '@/mocks'

import { CartSidebar } from '..'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: React.ReactNode) => {
      return element
    }
  }
})

beforeAll(() => {
  // here you create the element that the document.createElement will return
  // it might be even without an id
  const spy = jest.spyOn(document, 'getElementById')
  const mockElement = document.createElement('span')
  spy.mockReturnValue(mockElement)
})

describe('CartSidebar', () => {
  it('should render a title', () => {
    renderWithProviders(<CartSidebar />, {
      preloadedState: {
        sidebar: { isSidebarOpen: true }
      }
    })

    const heading = screen.getByRole('heading', {
      level: 2,
      name: /Carrinho de compras/i
    })

    expect(heading).toBeInTheDocument()
  })

  it("should have 2 'MiniCard' component", () => {
    renderWithProviders(<CartSidebar />, {
      preloadedState: {
        sidebar: { isSidebarOpen: true },
        cart: {
          items: [
            { product: data.products[0], quantity: 1 },
            { product: data.products[1], quantity: 1 }
          ]
        }
      }
    })

    const miniCards = screen.getAllByTestId('mini-card-id')

    expect(miniCards).toHaveLength(2)
  })

  it('should render a button', () => {
    renderWithProviders(<CartSidebar />, {
      preloadedState: {
        sidebar: { isSidebarOpen: true }
      }
    })

    const button = screen.getByRole('button', { name: /Finalizar Compra/i })

    expect(button).toBeInTheDocument()
  })

  it("should close 'CartSidebar' component", () => {
    const { store } = renderWithProviders(<CartSidebar />, {
      preloadedState: {
        sidebar: { isSidebarOpen: true }
      }
    })

    const button = screen.getByLabelText('close')
    const sidebarComponent = screen.getByTestId('sidebar-id')

    fireEvent.click(button)

    const sidebar = store.getState().sidebar
    expect(sidebar.isSidebarOpen).toBe(false)
    expect(sidebarComponent).not.toBeInTheDocument()
  })
})
