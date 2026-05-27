import '@/styles/globals.css'

import React from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout/Layout'

export default function Myapp({ Component, pageProps }) {

  const router= useRouter()

  const hideNavbarRoutes = ["/BookingPage", "/PersonalDataPage"]
  const hideNavbar = hideNavbarRoutes.includes(router.pathname)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
