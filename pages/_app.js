import '../styles/globals.css'

import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import { GeistProvider } from '@geist-ui/react'

const theme = {
  "palette": {
    "success": "#0A84FF"
  }
}
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <GeistProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </GeistProvider>
  )
}