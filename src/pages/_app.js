import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'
import { AuthProvider } from '@/contexts'
import { CartProvider } from '@/contexts/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return  (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
        <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='dart'
        pauseOnHover
      />
      </CartProvider>
    </AuthProvider>
  )
}
