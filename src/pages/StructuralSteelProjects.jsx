import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const StructuralSteelProjects = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Steel Projects & Construction in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "TwinLine Group provides multi-storied steel building construction, space frames, and turnkey structural steel projects."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Structural Steel Projects | Turnkey Construction Company Kerala"
        description="TwinLine Group executes complex structural steel projects, multi-storied steel buildings, and space frames. We are a leading turnkey construction company."
        keywords="Structural Steel Projects, Turnkey Construction Company, Multi-Storied Steel Buildings, Space Frames, Kerala"
        schema={schema}
      />
      
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8 text-white relative overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Complex Structural Steel Projects
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            From multi-storied steel buildings to architectural space frames, we are the turnkey construction company you can trust in Kerala.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(32,191,85,0.4)]">
            Contact Twinline Group
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex gap-4">
            <img src="https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_800,h_600,q_90/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg" alt="Structural Steel Projects" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Multi-Storied Steel Buildings</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Steel isn't just for warehouses. Our multi-storied structural steel buildings are faster to build, lighter on foundations, and highly flexible in design. Perfect for offices, schools, and hospitals.
            </p>
            <ul className="space-y-3 mt-6">
              {["Rapid Speed of Construction", "Lighter Foundation Loads", "Flexible Architectural Layout", "High Seismic Resistance"].map((item, i) => (
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

export default StructuralSteelProjects;
