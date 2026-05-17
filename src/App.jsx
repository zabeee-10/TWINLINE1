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
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="opacity-100 transition-opacity duration-1000">
          <Navbar />
          <Hero />
          <main>
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
