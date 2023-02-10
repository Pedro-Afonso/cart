import { screen } from '@testing-library/react'

import { renderWithProviders } from '@/providers'

import { BasicLayout } from '@/layouts'

describe('BasicLayout', () => {
  it('should render BasicLayout', () => {
    const props = {
      children: <p>Conteúdo da página</p>
    }
    renderWithProviders(<BasicLayout {...props} />)

    const childrenTest = screen.getByText('Conteúdo da página')

    expect(childrenTest).toBeInTheDocument()
  })
})
