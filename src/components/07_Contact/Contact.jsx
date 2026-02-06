
import React from 'react'
import styles from "@/components/07_Contact/Contact.module.css"

export default function Contact() {
  return (
    <div className={styles.component}>
        <div className={styles.contact}>
                <span>Calle Goya 4, Madrid</span>
                <span>+34 111 222 333</span>
                <span>
                    <a href='mailto:info@gorural.com'>info@gorural.com</a>
                </span>
            <div>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2605173473544!2d-3.6875003000000315!3d40.425229900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422897339fe995%3A0x2c4fd086280388eb!2sCalle%20de%20Goya%2C%204%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1769424562027!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
