import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'
import { AuthProvider } from '@/contexts'
import { CartProvider } from '@/contexts/CartContext'

export default function App({ Component, pageProps }) {
  return  (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  )
}
