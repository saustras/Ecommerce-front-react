import 'semantic-ui-css/semantic.min.css'
import '@/scss/global.scss'
import { AuthProvider } from '@/contexts'

export default function App({ Component, pageProps }) {
  return  (
    <AuthProvider> 
     <Component {...pageProps} />
    </AuthProvider>  
  )
}
