import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const WarehouseConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Warehouse Construction Company Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group"
    },
    "description": "TwinLine Group is the premier warehouse contractor in Kerala. We specialize in steel warehouse construction and turnkey industrial sheds."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Top Warehouse Construction Company Kerala | Steel Warehouses"
        description="TwinLine Group is the top warehouse construction company in Kerala. We build durable steel warehouses and industrial sheds with massive clear spans."
        keywords="Warehouse Building, Warehouse Construction, Steel Warehouse Construction, Warehouse Contractor Kerala, Kerala"
        schema={schema}
      />
      
      <section className="bg-brand-primary/10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Top Warehouse Construction Company in Kerala
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Maximize your storage capacity and operational efficiency with our custom steel warehouse construction services. We are the leading warehouse contractor in Kerala for clear-span industrial buildings.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
            Request a Quote
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Steel Warehouse Construction Experts</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Logistics and e-commerce require massive unhindered floor space. Our PEB steel warehouses offer clear spans of up to 90 meters without any interior support columns, allowing maximum mobility for forklifts and storage racks.
            </p>
            <ul className="space-y-3 mt-6">
              {["Clear Span Architecture", "Heavy Load Bearing Floors", "Mezzanine Floor Integration", "Optimized Natural Lighting & Ventilation"].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden shadow-xl">
             <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_800,h_600,al_c,q_85/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Warehouse Building in Kerala" className="w-full h-full object-cover" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WarehouseConstruction;
