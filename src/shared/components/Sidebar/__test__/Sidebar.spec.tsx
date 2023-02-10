import mockRouter from 'next-router-mock'

import { renderWithProviders } from '@/providers'

import { Sidebar } from '..'
import { cleanup, screen } from '@testing-library/react'

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
  const spy = jest.spyOn(document, 'getElementById')
  const mockElement = document.createElement('span')
  spy.mockReturnValue(mockElement)
})

afterAll(() => {
  cleanup()
})

describe('Sidebar', () => {
  it('should render a title', () => {
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Test Title',
      children: <p>Conteúdo</p>
    }
    renderWithProviders(<Sidebar {...props} />)

    const title = screen.getByText('Test Title')

    expect(title).toBeInTheDocument()
  })

  it('should not render title', () => {
    const props = {
      onClose: jest.fn(),
      title: 'Test Title',
      children: <p>Conteúdo</p>
    }

    renderWithProviders(<Sidebar {...props} />)

    const title = screen.queryByText('Test Title')

    expect(title).not.toBeInTheDocument()
  })

  it('should not render', () => {
    mockRouter.isReady = false
    const props = {
      isOpen: true,
      onClose: jest.fn(),
      title: 'Test Title',
      children: <p>Conteúdo</p>
    }

    const { container } = renderWithProviders(<Sidebar {...props} />)

    expect(container).toBeInTheDocument()
  })
})
