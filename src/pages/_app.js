import '@/styles/globals.css'
import Navbar from '@/components/00_Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

import React from 'react'

export default function Myapp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
