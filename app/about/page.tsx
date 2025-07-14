import AboutPage from '@/components/about/about';
import Header from '@/components/Header/Header'; 
import Footer from '@/components/Footer/footer';

export default function About() { 
  return (
    <>
      <Header />
      <main>
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
