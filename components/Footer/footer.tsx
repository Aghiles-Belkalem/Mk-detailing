import SocialMedia from '../socialMedia/SocialMedia';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialMedia/>
      <p>© {new Date().getFullYear()} MK Detailing. Tous droits réservés.</p>
    </footer>
  );
}
