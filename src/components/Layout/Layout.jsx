import React from 'react'
import styles from "./Layout.module.css"
import Navbar from '@/components/00_Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  const router = useRouter()

  const hideNavbarRoutes = ["/BookingPage", "/PersonalDataPage"]
  const hideNavbar = hideNavbarRoutes.includes(router.pathname)

  return (
    <div className={styles.layout}>
      {!hideNavbar && <Navbar />}
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}