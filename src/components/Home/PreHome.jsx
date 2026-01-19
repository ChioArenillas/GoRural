import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./Home.module.css"

export default function PreHome() {


  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Book authentic rural experiences and support local tourism.</h1>
        <img src="/assets/Home/GIF.png" alt="GIF-imagen" />
          <button className={styles.btn}>
            <Link className={styles.btnLink} href={'../../HomePage'}>GoRural</Link>
          </button>
    </div>
  )
}




