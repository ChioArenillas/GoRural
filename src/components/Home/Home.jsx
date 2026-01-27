import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import Experiences from '../Experiences/Experiences'
import News from '../News/News'
import styles from "./Home.module.css"

export default function Home() {


  return (
        <div>
            <Hero />
      <div>
        <h1 className={styles.title}>EXPERIENCES</h1>
        <Experiences limit={5}/>
        <button className={styles.smallBtn}> <a href={'../../ExperiencesPage'}>ALL EXPERIENCES</a></button>
      </div>
            <div>
                <h1 className={styles.title}>NEWS</h1>
                <News limit={5} />
        <button className={styles.smallBtn}> <a href={'../../NewsPage'}>ALL NEWS</a></button>

            </div>

{/*             
            <Buscador />
            <Categories />
            <MostPopular />
            <ForFamilies />
            <Destinations />
            <Opiniones /> */}
        </div>

  )
}




