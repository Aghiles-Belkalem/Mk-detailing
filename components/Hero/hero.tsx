'use client';

import { useState } from 'react';
import styles from './Hero.module.css';
import Modal from '../modal/modal';
import ContactForm from '../ContactForm/ContactForm';

export default function Hero() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Expert PPF à Azazga — MK Detailing</h1>
        <p>
          Protégez et sublimez votre véhicule grâce au film de protection carrosserie (PPF). 
          MK Detailing Garage est reconnu comme l'un des meilleurs experts PPF en Algerie, avec 100% de clients satisfaits.
        </p>
        <button
          className={styles.cta}
          onClick={() => setOpenContact(true)}
        >
          Demander un devis / Contact
        </button>
      </div>

      {openContact && (
        <Modal onClose={() => setOpenContact(false)}>
          <ContactForm />
        </Modal>
      )}
    </section>
  );
}




