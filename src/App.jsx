import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility & SEO */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Skip to main content
      </a>

      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="opacity-100 transition-opacity duration-1000">
          <Navbar />
          <Hero />
          <main id="main-content" role="main">
            <About />
            <Services />

            <Projects />
            <Clients />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
