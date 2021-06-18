import '../styles/globals.css'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 750,
      easing: 'ease-out-quart',
    })
  })
  return <Component {...pageProps} />
}

export default MyApp
