import styles from './Story.module.css';

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Notre passion pour l’automobile</h2>
        <p className={styles.paragraph}>
          Chez MK Detailing, chaque véhicule mérite une attention unique et un soin extrême. Nous redonnons vie à votre voiture
          grâce à notre expertise en correction de peinture, polissage et protections haut de gamme. Nous mettons un point d’honneur
          à faire ressortir l’éclat et la personnalité de votre véhicule, comme au premier jour.
        </p>
        <p className={styles.paragraph}>
          Confiance, exigence et passion guident chacun de nos gestes pour vous garantir un résultat irréprochable.
        </p>
      </div>
    </section>
  );
}

