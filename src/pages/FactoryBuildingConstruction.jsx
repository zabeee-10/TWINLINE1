import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const FactoryBuildingConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Factory Building Contractor in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "TwinLine Group is the most reliable factory building contractor in Kerala, providing turnkey industrial shed construction."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Best Factory Building Contractor in Kerala | TwinLine Group"
        description="TwinLine Group is Kerala's trusted factory building contractor. We specialize in industrial building, PEB factory sheds, and commercial construction."
        keywords="Factory Building Contractor, Industrial Building Contractor, Industrial Shed Construction, Factory Shed Construction, Kerala"
        schema={schema}
      />
      
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8 text-white relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Best Factory Building Contractor in Kerala
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We build state-of-the-art industrial sheds and factories designed to handle heavy machinery, EOT cranes, and massive production lines.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(32,191,85,0.4)]">
            Schedule a Site Visit
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex gap-4">
            <img src="https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_800,h_600,q_90/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg" alt="Factory Building Construction" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Industrial Shed Construction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a leading Industrial Building Contractor, TwinLine Group provides robust PEB steel structures designed specifically for manufacturing facilities. We ensure your factory is built quickly so you can start production sooner.
            </p>
            <ul className="space-y-3 mt-6">
              {["Custom Designed for Heavy Machinery", "EOT Crane Runway Beams", "Thermal & Acoustic Insulation", "Fire & Corrosion Resistance"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FactoryBuildingConstruction;
