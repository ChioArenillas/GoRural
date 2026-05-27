import React from "react";
import styles from "@/components/07_Contact/Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Let’s plan your next rural getaway</h2>

      <div className={styles.contactContainer}>
        <div className={styles.left}>
          <p className={styles.description}>
            We’re here to help you organize an unforgettable experience. Send us
            a message, give us a call, or come visit us.
          </p>

          <div className={styles.contactInfo}>
            <a href="tel:+34111222333" className={styles.contactCard}>
              <span className={styles.icon}>📞</span>

              <div>
                <h4>Phone</h4>
                <p>+34 111 222 333</p>
              </div>
            </a>

            <a href="mailto:info@gorural.com" className={styles.contactCard}>
              <span className={styles.icon}>✉️</span>

              <div>
                <h4>Email</h4>
                <p>info@gorural.com</p>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Calle+Goya+4+Madrid"
              target="_blank"
              rel="noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.icon}>📍</span>

              <div>
                <h4>Address</h4>
                <p>Calle Goya 4, Madrid</p>
              </div>
            </a>
          </div>

          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2605173473544!2d-3.6875003000000315!3d40.425229900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422897339fe995%3A0x2c4fd086280388eb!2sCalle%20de%20Goya%2C%204%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1769424562027!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className={styles.right}>
          <form className={styles.form}>
            <h3>Send us a message</h3>

            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>

            <div className={styles.formGroup}>
              <label>Phone</label>
              <input type="tel" placeholder="+34 600 000 000" />
            </div>

            <div className={styles.formGroup}>
              <label>Message</label>
              <textarea rows="5" placeholder="Tell us how we can help you..." />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
