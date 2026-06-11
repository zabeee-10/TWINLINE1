import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, ShieldCheck, Factory, Warehouse } from 'lucide-react';

const PebConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pre-Engineered Building (PEB) Construction in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala"
      }
    },
    "description": "Top PEB Contractor in Kerala. TwinLine Group specializes in PEB building construction, turnkey industrial sheds, and prefabricated structures."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Top PEB Contractor in Kerala | Pre Engineered Building Company"
        description="Looking for the best PEB contractor in Kerala? TwinLine Group delivers turnkey Pre-Engineered Building construction for factories, warehouses, and commercial spaces."
        keywords="PEB Contractor, Pre Engineered Building Contractor, PEB Building Construction Kerala, Kerala, Factory Shed Construction"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
            <img src="https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_1200,h_800,q_90/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg" alt="PEB Construction Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
            Top PEB Contractor in Kerala
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            As the most trusted Pre-Engineered Building (PEB) Contractor in Kerala, TwinLine Group provides rapid, cost-efficient, and highly durable prefabricated steel structures for warehouses, industrial sheds, and commercial spaces.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-[0_0_15px_rgba(32,191,85,0.4)]">
            Schedule a Site Visit
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* What is PEB */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex grid grid-cols-2 gap-4">
            <img src="https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_400,h_500,q_90/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg" alt="PEB Structure Framework" className="rounded-2xl shadow-lg w-full h-[300px] object-cover" />
            <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_400,h_500,al_c,q_85/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Completed PEB Warehouse" className="rounded-2xl shadow-lg w-full h-[300px] object-cover mt-8" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">What is a Pre-Engineered Building?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A Pre-Engineered Building (PEB) is a steel structure built over a structural concept of primary members, secondary members, and roof/wall sheeting connected to each other. The structural members are custom designed to be lighter in weight and high in strength.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PEB building construction in Kerala is gaining massive popularity due to the monsoon seasons and the need for rapid deployment. Since all components are manufactured at our facility and merely assembled on-site with bolted connections, the construction time is reduced by up to 50% compared to traditional masonry.
            </p>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center"><Zap className="text-brand-primary w-5 h-5 mr-2" /> Key Benefits of PEB</h3>
                <ul className="space-y-2 text-gray-600">
                    <li>• Reduced Construction Time (by 50%)</li>
                    <li>• Lower Project Cost & Maintenance</li>
                    <li>• Clear Span Architecture (No center columns needed)</li>
                    <li>• Easy Future Expansion</li>
                </ul>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4 text-center">PEB Applications</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Our pre-engineered buildings are highly versatile and can be customized with various fascia, canopies, and curved eaves for diverse applications.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "Factories & Manufacturing", desc: "Heavy-duty structures supporting EOT cranes and large machinery." },
              { icon: Warehouse, title: "Warehouses & Logistics", desc: "Massive clear spans maximizing storage volume and forklift mobility." },
              { icon: ShieldCheck, title: "Cold Storage", desc: "Thermally insulated PUF panel structures for perishable goods." },
              { icon: CheckCircle, title: "Commercial Spaces", desc: "Showrooms, supermarkets, and multi-purpose sports complexes." }
            ].map((app, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-brand-primary/5 transition-colors">
                <app.icon className="w-10 h-10 text-brand-primary mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-500 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">PEB Construction FAQs</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long does it take to construct a PEB warehouse?</h3>
              <p className="text-gray-600">Depending on the size, a standard PEB warehouse of 10,000 sq.ft can be fabricated and erected within 6 to 8 weeks, significantly faster than RCC construction.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can PEB buildings be expanded later?</h3>
              <p className="text-gray-600">Yes, PEB structures are incredibly flexible. You can easily expand the building length by adding additional bays (structural frames) without disrupting the existing structure.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-primary/10 border border-brand-primary/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Looking for a PEB Contractor in Kerala?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Get your factory shed or warehouse designed and built by the experts. Contact TwinLine Group today for a free estimate and 3D structural consultation.
          </p>
          <div className="flex justify-center">
            <Link to="/#contact" className="bg-brand-primary text-white font-bold py-4 px-10 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
              Contact TwinLine Group
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PebConstruction;
