import React from 'react'
import Image from 'next/image'
import styles from "./Hero.module.css"
import HeroPicture from "../../../public/assets/Hero/HeroPicture.jpg"

export default function Hero() {

  return (
    <div className={styles.hero} >
      <Image className={styles.heroimg} src={HeroPicture} alt="HeroImagen" />
      <div className={styles.text}>
          <h2 className={styles.title}>Enjoy a 10% discount on your first rural experience.</h2>
          <h3 className={styles.heroSubtitle}>CODE: GORURAL10</h3>
      </div>
    </div>
  )
}
