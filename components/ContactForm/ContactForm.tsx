"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mkdetailinggarage.azazga@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSent(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contactez-nous</h2>

      {isSent && <p className={styles.successMessage}>Votre demande a été envoyée avec succès !</p>}
      {isError && <p className={styles.errorMessage}>Une erreur s'est produite. Veuillez réessayer.</p>}

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="firstName" className={styles.label}>
          Prénom
          <input id="firstName" name="Prénom" type="text" className={styles.input} required />
        </label>

        <label htmlFor="lastName" className={styles.label}>
          Nom
          <input id="lastName" name="Nom" type="text" className={styles.input} required />
        </label>

        <label htmlFor="phone" className={styles.label}>
          Téléphone
          <input id="phone" name="Téléphone" type="tel" className={styles.input} required />
        </label>

        <label htmlFor="message" className={styles.label}>
          Message
          <textarea id="message" name="Message" className={styles.textarea} required></textarea>
        </label>

        <button type="submit" className={styles.button}>Envoyer</button>
      </form>
    </section>
  );
}

