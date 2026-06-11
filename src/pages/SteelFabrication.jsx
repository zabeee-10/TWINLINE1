import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const SteelFabrication = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Fabrication Company Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "Top Steel Fabrication Company in Kerala. Twinline provides heavy structural steel fabrication and turnkey construction services."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Top Steel Fabrication Company in Kerala | TwinLine Group"
        description="TwinLine Group is the premier steel fabrication company in Kerala, providing structural steel fabrication and roofing services across South India."
        keywords="Steel Fabrication and Roofing Companies, Steel Fabrication Company Kerala, Structural Steel Fabrication, Heavy Steel Structure Construction"
        schema={schema}
      />
      
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8 text-white relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Leading Steel Fabrication Company in Kerala
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Expert structural steel fabrication for heavy industries, commercial buildings, and infrastructure projects. We are one of the most trusted steel fabrication and roofing companies in India.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(32,191,85,0.4)]">
            Contact Twinline Group
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex gap-4">
            <img src="https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_800,h_600,q_90/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg" alt="Structural Steel Fabrication" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Structural Steel Fabrication Services</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our state-of-the-art fabrication facility is equipped to handle heavy steel structure construction. We provide end-to-end fabrication services from precision cutting and welding to surface preparation and protective coating.
            </p>
            <ul className="space-y-3 mt-6">
              {["Custom Built Primary Members", "Built-up Sections & Trusses", "CNC Plasma Cutting", "MIG/SAW Welding Processes", "Epoxy & Anti-corrosive Coating"].map((item, i) => (
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

export default SteelFabrication;
