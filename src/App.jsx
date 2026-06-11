import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import SteelBuildingConstruction from './pages/SteelBuildingConstruction';
import PebConstruction from './pages/PebConstruction';
import RoofingSolutions from './pages/RoofingSolutions';
import SteelFabrication from './pages/SteelFabrication';
import WarehouseConstruction from './pages/WarehouseConstruction';
import FactoryBuildingConstruction from './pages/FactoryBuildingConstruction';
import AuditoriumConstruction from './pages/AuditoriumConstruction';
import StructuralSteelProjects from './pages/StructuralSteelProjects';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/steel-building-construction" element={<SteelBuildingConstruction />} />
            <Route path="/peb-construction" element={<PebConstruction />} />
            <Route path="/roofing-solutions" element={<RoofingSolutions />} />
            <Route path="/steel-fabrication" element={<SteelFabrication />} />
            <Route path="/warehouse-construction" element={<WarehouseConstruction />} />
            <Route path="/factory-building" element={<FactoryBuildingConstruction />} />
            <Route path="/auditorium-construction" element={<AuditoriumConstruction />} />
            <Route path="/structural-steel" element={<StructuralSteelProjects />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
