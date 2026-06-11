import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Umbrella, Shield, Sun } from 'lucide-react';

const RoofingSolutions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial and Commercial Roofing Solutions in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "Leading roofing companies in Kerala. We provide industrial roofing solutions, metal roofing, and auditorium roofing."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Best Roofing Companies in Kerala | Industrial Roofing Solutions"
        description="TwinLine Group is among the top roofing companies in Kerala, specializing in industrial roofing solutions, metal roofing, and auditorium construction."
        keywords="Roofing Solutions, Roofing in Kerala, Roofing Companies in Kerala, Industrial Roofing Solutions, Metal Roofing Contractor, Kerala"
        schema={schema}
      />
      
      <section className="bg-brand-primary/10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Premium Roofing Solutions in Kerala
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As one of the leading roofing companies in Kerala, we provide specialized metal roofing, industrial roofing solutions, and auditorium roofing tailored for the unique tropical climate of India.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
            Request a Quote
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Industrial & Metal Roofing Contractor</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Industrial roofing requires materials that can withstand heavy monsoons, high winds, and intense UV exposure. Our metal roofing and PUF insulated panels provide exceptional thermal efficiency and leak-proof performance.
            </p>
            <ul className="space-y-3 mt-6">
              {["Trapezoidal Profile Sheets", "Standing Seam Roofing", "Polycarbonate Skylights", "PUF Insulated Panels", "Stadium & Turf Roofing"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden shadow-xl">
             <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_800,h_600,al_c,q_85/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Metal Roofing Contractor in Kerala" className="w-full h-full object-cover" />
          </div>
        </section>

        <section className="bg-gray-900 rounded-3xl p-12 text-center text-white mt-20">
          <h2 className="text-3xl font-bold font-heading mb-4">Need an Expert Roofing Contractor in Kerala?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact Twinline Group today to get long-lasting, weather-proof industrial roofing solutions.</p>
          <Link to="/#contact" className="bg-brand-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors">
            Get Free Consultation
          </Link>
        </section>

      </div>
    </div>
  );
};

export default RoofingSolutions;
