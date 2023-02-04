import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { ResetCss } from '../../../styles/ResetCss'
import { light } from '@/themes'
import { Provider } from 'react-redux'
import { AppStore, RootState, setupStore } from '@/config/store'
import { PreloadedState } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren /* <{}> */): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider theme={light}>
          <ResetCss />
          {children}
        </ThemeProvider>
      </Provider>
    )
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
