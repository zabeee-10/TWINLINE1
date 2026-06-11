import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home = () => {
  const { hash } = useLocation();

  // Handle scroll to hash when navigating from another page to home
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <SEO 
        title="Leading Steel Building Contractor & PEB Contractor in Kerala"
        description="Twinline Group is Kerala's leading pre-engineered steel building (PEB) manufacturer & sports infrastructure contractor. Expert in steel structures, roofing solutions, warehouse & factory construction."
      />
      <Hero />
      <main id="main-content" role="main">
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
    </>
  );
};

export default Home;
