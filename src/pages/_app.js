import '@/styles/globals.css'
import Navbar from '@/components/00_Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

import React from 'react'
import { useRouter } from 'next/router'

export default function Myapp({ Component, pageProps }) {

  const router= useRouter()

  const hideNavbarRoutes = ["/BookingPage"]
  const hideNavbar = hideNavbarRoutes.includes(router.pathname)

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
