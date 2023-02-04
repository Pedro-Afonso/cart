import type { AppProps } from 'next/app'
import { setupStore } from '@/shared/config/store'
import { Provider } from 'react-redux'
import { ResetCss } from '../styles/ResetCss'
import { ThemeProvider } from 'styled-components'
import { light } from '@/shared/themes'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={setupStore()}>
      <ThemeProvider theme={light}>
        <ResetCss />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
