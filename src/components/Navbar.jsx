import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/#about" },
    { name: "Services", to: "/#services" },
    { name: "Projects", to: "/#projects" },
    { name: "Contact", to: "/#contact" },
  ];

  const servicesLinks = [
    { name: "Steel Building", to: "/steel-building-construction" },
    { name: "PEB Construction", to: "/peb-construction" },
    { name: "Roofing Solutions", to: "/roofing-solutions" },
    { name: "Steel Fabrication", to: "/steel-fabrication" },
    { name: "Warehouse Construction", to: "/warehouse-construction" },
    { name: "Factory Building", to: "/factory-building" },
    { name: "Auditorium Construction", to: "/auditorium-construction" },
    { name: "Structural Steel", to: "/structural-steel" },
  ];

  return (
    <>
      <header className="fixed z-50 w-full left-0 right-0 flex justify-center pointer-events-none transition-all duration-500 ease-out">
        <nav 
          className={`pointer-events-auto w-full transition-all duration-500 ease-out flex items-center justify-between
            ${scrolled 
              ? 'bg-[#030914]/90 backdrop-blur-xl border-b border-white/5 py-3 px-6 md:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.6)] top-0 rounded-none transform-none' 
              : 'bg-white/5 backdrop-blur-lg border border-white/10 py-4 px-6 md:px-8 lg:max-w-7xl mx-4 mt-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
            }`}
        >
          {/* LEFT: Logo with subtle green glow */}
          <div className="flex items-center cursor-pointer relative group">
            <img 
              src="https://static.wixstatic.com/media/6eacb8_6c031563f034436ba10301f5aeab54af~mv2.png/v1/fill/w_232,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%205_4x.png" 
              alt="TwinLine Logo" 
              className="h-10 md:h-12 object-contain relative z-10 brightness-0 invert"
            />
            {/* Subtle logo glow */}
            <div className="absolute inset-0 bg-brand-primary/40 blur-xl scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
          </div>
          
          {/* CENTER: Navigation Links */}
          <div className="hidden md:flex space-x-1 lg:space-x-4 items-center relative">
            {navLinks.map((link) => (
              <div key={link.name} className="px-2 lg:px-4 group relative">
                <Link 
                  to={link.to} 
                  className="nav-link uppercase"
                >
                  {link.name}
                </Link>
                {/* Services Dropdown */}
                {link.name === "Services" && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-[#030914]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                    {servicesLinks.map(s => (
                      <Link key={s.name} to={s.to} className="block px-4 py-3 text-sm text-gray-300 hover:text-brand-primary hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/#contact" 
              className="relative group overflow-hidden bg-gradient-to-r from-brand-primary to-green-500 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(32,191,85,0.4)] hover:shadow-[0_8px_25px_rgba(32,191,85,0.6)] uppercase tracking-wider text-sm cursor-pointer block"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
            </Link>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-brand-primary transition-colors focus:outline-none relative w-8 h-8 flex flex-col justify-center items-center"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-current rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1.5'}`}></span>
              <span className={`w-6 h-0.5 bg-current rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-current rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1.5'}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed inset-x-0 z-40 md:hidden overflow-hidden origin-top rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]
              ${scrolled ? 'top-[60px]' : 'top-[80px] mx-4'}
            `}
          >
            <div className="bg-[#030914]/95 backdrop-blur-2xl border-x border-b border-white/10 p-6 flex flex-col space-y-4 rounded-b-2xl h-full">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.to} 
                    onClick={() => setIsOpen(false)} 
                    className="block px-4 py-3 font-semibold text-white hover:text-brand-primary hover:bg-white/5 rounded-lg uppercase text-sm tracking-wider transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                  {link.name === "Services" && (
                    <div className="pl-8 flex flex-col space-y-1 border-l border-white/10 ml-6">
                      {servicesLinks.map(s => (
                        <Link key={s.name} to={s.to} onClick={() => setIsOpen(false)} className="py-2 text-sm text-gray-400 hover:text-brand-primary">
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 w-full">
                <Link 
                  to="/#contact" 
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-gradient-to-r from-brand-primary to-green-500 text-white font-bold py-3 rounded-lg shadow-[0_4px_15px_rgba(32,191,85,0.4)] uppercase tracking-wider cursor-pointer"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu to catch clicks */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
