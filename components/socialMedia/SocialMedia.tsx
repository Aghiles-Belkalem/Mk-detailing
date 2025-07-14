// components/SocialMedia/SocialMedia.tsx
"use client";

import styles from "./SocialMedia.module.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className={styles.socialFooter}>
        <a
          href="https://www.instagram.com/mk_detailing_garage/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram MK Detailing Garage"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/+213559815254"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp MK Detailing Garage"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/garageesthetiqueautomobile" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook MK Detailing Garage"
        >
          <FaFacebook />
        </a>
      </div>

      <a
        href="https://wa.me/+213559815254"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.floatingWhatsapp}
        aria-label="Contacter via WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
