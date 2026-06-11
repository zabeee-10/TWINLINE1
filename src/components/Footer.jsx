import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <span className="text-3xl font-bold font-heading text-brand-primary tracking-tighter">TwinLine</span>
            <p className="text-gray-400 leading-relaxed pr-4">
              Building the future with innovation and excellence. Comprehensive pre-engineered steel building (PEB) solutions for residential, commercial, and sports infrastructure projects across Kerala and India.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="text-lg font-bold font-heading mb-6 uppercase tracking-wider relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/#projects" className="text-gray-400 hover:text-brand-primary transition-colors">Projects</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services links">
            <h4 className="text-lg font-bold font-heading mb-6 uppercase tracking-wider relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/steel-building-construction" className="text-gray-400 hover:text-brand-primary transition-colors">Steel Building Construction</Link></li>
              <li><Link to="/peb-construction" className="text-gray-400 hover:text-brand-primary transition-colors">PEB Construction</Link></li>
              <li><Link to="/roofing-solutions" className="text-gray-400 hover:text-brand-primary transition-colors">Roofing Solutions</Link></li>
              <li><Link to="/steel-fabrication" className="text-gray-400 hover:text-brand-primary transition-colors">Steel Fabrication</Link></li>
              <li><Link to="/warehouse-construction" className="text-gray-400 hover:text-brand-primary transition-colors">Warehouse Construction</Link></li>
              <li><Link to="/factory-building" className="text-gray-400 hover:text-brand-primary transition-colors">Factory Building</Link></li>
              <li><Link to="/auditorium-construction" className="text-gray-400 hover:text-brand-primary transition-colors">Auditorium Construction</Link></li>
              <li><Link to="/structural-steel" className="text-gray-400 hover:text-brand-primary transition-colors">Structural Steel Projects</Link></li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 uppercase tracking-wider relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-brand-primary"></span>
            </h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter to receive latest news and updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-l text-white focus:outline-none focus:border-brand-primary" />
              <button type="submit" className="bg-brand-primary hover:bg-green-600 px-4 py-3 rounded-r transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} TwinLine Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-500 hover:text-brand-primary cursor-pointer transition-colors text-sm">Privacy Policy</span>
            <span className="text-gray-500 hover:text-brand-primary cursor-pointer transition-colors text-sm">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
