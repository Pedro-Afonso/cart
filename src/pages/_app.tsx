import type { AppProps } from 'next/app'
import { setupStore } from '@/shared/config/store'
import { Provider } from 'react-redux'
import { ResetCss } from '../styles/ResetCss'
import { ThemeProvider } from 'styled-components'
import { light } from '@/shared/themes'
import { SkeletonTheme } from 'react-loading-skeleton'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={setupStore()}>
      <ThemeProvider theme={light}>
        <SkeletonTheme baseColor="#888888" highlightColor="#e5e5e5">
          <ResetCss />
          <Component {...pageProps} />
        </SkeletonTheme>
      </ThemeProvider>
    </Provider>
  )
}

export default App
