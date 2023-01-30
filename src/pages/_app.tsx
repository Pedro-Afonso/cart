import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/shared/config/store'
import { Provider } from 'react-redux'

const App: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
