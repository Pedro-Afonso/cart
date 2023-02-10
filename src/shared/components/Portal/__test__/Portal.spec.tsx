import { renderWithProviders } from '@/providers'

import { EPortalLocation, Portal } from '..'

jest.mock('next/router', () => require('next-router-mock'))

jest.mock('react-dom', () => {
  return {
    ...jest.requireActual('react-dom'),
    createPortal: (element: React.ReactNode) => {
      return element
    }
  }
})

describe('Portal', () => {
  const spy = jest.spyOn(document, 'getElementById')

  it('should render a Portal', () => {
    const mockElement = null
    spy.mockReturnValue(mockElement)

    const props = {
      portalLocation: EPortalLocation.SIDEBAR,
      wrapper: <p>Conteudo do portal</p>
    }

    expect(() => renderWithProviders(<Portal {...props} />)).toThrow(
      `Can't locate DOM node "${EPortalLocation.SIDEBAR}". Make sure it is defined in index.html.`
    )
  })
})
