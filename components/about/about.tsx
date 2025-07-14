import styles from './about.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className={styles.about}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/IMG-20250710-WA0021.jpg"
          alt="Hamid, expert PPF chez MK Detailing"
          fill
          priority
          className={styles.image}
        />
      </div>
      <section className={styles.content}>
        <h1>À propos de MK Detailing</h1>
        <p>
          MK Detailing est un garage d'exception basé à Azazga, spécialisé dans la protection et la mise en valeur des véhicules haut de gamme.  
          Fondé et dirigé par <strong>Hamid</strong>, expert reconnu en film de protection carrosserie (PPF), MK Detailing s'est forgé une réputation d'excellence grâce à une approche artisanale, précise et passionnée.
        </p>
        <p>
          Chaque véhicule est traité comme une œuvre d’art : soins minutieux, finitions parfaites, et choix des meilleurs produits. La satisfaction des clients est une priorité absolue, et le garage affiche un taux de <strong>100% de clients satisfaits</strong>.
        </p>
        <p>
          Derrière Hamid, une équipe soudée et qualifiée partage la même exigence de qualité et le même amour du détail. Chaque membre contribue à sublimer et protéger votre voiture avec un engagement total.
        </p>
      </section>

      <div className={styles.imageContainer}>
        <Image
          src="/images/IMG-20250713-WA0004.jpg"
          alt="L'équipe MK Detailing - Experts passionnés"
          fill
          priority
          className={styles.image}
        />
      </div>
    </main>
  );
}

