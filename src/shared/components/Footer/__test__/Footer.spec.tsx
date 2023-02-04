import { renderWithProviders } from '@/providers'

import { screen } from '@testing-library/react'

import { Footer } from '..'

describe('Footer', () => {
  it('should render a copyright text', () => {
    renderWithProviders(<Footer />)

    const text = screen.getByText(
      /MKS sistemas © Todos os direitos reservados/i
    )

    expect(text).toBeInTheDocument()
  })
})
