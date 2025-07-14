import Image from 'next/image';
import styles from './Services.module.css';

const services = [
  {
    title: 'Protection PPF',
    description: 'Protection longue durée contre les agressions extérieures.',
    image: '/images/IMG-20250710-WA0008.jpg',
  },
  {
    title: 'Rénovation de peinture',
    description: 'Correction des micro-rayures et polissage pour un éclat maximal.',
    image: '/images/IMG-20250710-WA0002.jpg',
  },
  {
    title: 'Lavage extérieur complet',
    description: 'Nettoyage approfondi de la carrosserie, jantes et vitres.',
    image: '/images/IMG-20250710-WA0025 (1).jpg',
  },
  {
    title: 'Nettoyage intérieur',
    description: 'Désinfection, aspiration et soin des surfaces intérieures.',
    image: '/images/cap-carwash-herstal-7.jpg',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>Nos services</h2>
      <div className={styles.list}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={`MK Detailing - ${service.title}`}
                fill
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.content}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

