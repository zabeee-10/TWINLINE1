import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const AuditoriumConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Auditorium Construction Company in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "TwinLine Group is an expert auditorium construction company in Kerala. We provide steel framing and acoustic roofing solutions for large auditoriums."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Top Auditorium Construction Company in Kerala | TwinLine Group"
        description="TwinLine Group provides the best auditorium construction and roofing solutions in Kerala. We use advanced steel structures for massive clear spans."
        keywords="Auditorium Construction, Auditorium Construction Company, Auditorium Roofing Solutions, Kerala"
        schema={schema}
      />
      
      <section className="bg-brand-primary/10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Leading Auditorium Construction Company in Kerala
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Build grand, acoustically optimized auditoriums and convention centers with our clear-span steel structures and premium roofing solutions.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
            Get Free Consultation
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Auditorium Roofing Solutions</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Auditoriums require massive column-free spaces and excellent acoustic management. We utilize advanced Space Frames and PEB technology to create vast uninterrupted spaces.
            </p>
            <ul className="space-y-3 mt-6">
              {["Clear Span without center columns", "Acoustic Insulated Roofing", "Space Frame Architecture", "Rapid Assembly"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden shadow-xl">
             <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_800,h_600,al_c,q_85/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Auditorium Construction in Kerala" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuditoriumConstruction;
