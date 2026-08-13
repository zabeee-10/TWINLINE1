import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Package, Truck, Activity, Lock, Box, Grid, ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';

const WarehouseConstruction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Warehouse Construction in Kerala | TwinLine Group",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group",
      "telephone": "+91-77360-67063",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      }
    },
    "areaServed": "Kerala",
    "description": "Leading warehouse construction company in Kerala. We build highly optimized, clear-span steel warehouses and logistics hubs using PEB technology.",
    "serviceType": "Warehouse Construction"
  };

  const faqs = [
    {
      q: "What makes your steel warehouses better than concrete warehouses?",
      a: "Steel warehouses constructed using PEB (Pre-Engineered Building) technology offer massive clear spans (interiors without support columns). This maximizes your usable floor area and allows unrestricted movement for forklifts and automated racking systems. Additionally, steel warehouses are much faster to build, highly scalable, and structurally more resilient to heavy industrial loads than concrete."
    },
    {
      q: "How fast can you build a warehouse in Kerala?",
      a: "Because all the structural steel components are pre-fabricated in our automated factory, the site assembly is extremely rapid. A standard 10,000 sq. ft. warehouse can typically be erected and enclosed within 3 to 4 months from foundation approval, which is less than half the time required for traditional construction."
    },
    {
      q: "Can you build cold storage warehouses?",
      a: "Yes. We frequently integrate PUF (Polyurethane Foam) insulated sandwich panels into the roof and walls of our warehouses. This specialized cladding creates an airtight, thermally sealed envelope, which is the foundational requirement for highly efficient cold storage and refrigerated logistics facilities."
    },
    {
      q: "Are your warehouses safe from Kerala's monsoon flooding?",
      a: "During the architectural and engineering phase, we design elevated plinths (foundations) to ensure the warehouse floor is significantly above the highest recorded flood levels in your specific area. We also engineer high-capacity gutter and downspout systems to rapidly channel heavy monsoon rain away from the structure."
    },
    {
      q: "Can you design a warehouse with mezzanine floors for office space?",
      a: "Absolutely. One of the major advantages of steel construction is the ease of integrating heavy-duty mezzanine floors. We can engineer the structural columns to support elevated concrete or steel decking, providing you with suspended office spaces overlooking the logistics floor without occupying valuable ground-level storage space."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Expert Warehouse Construction in Kerala | Logistics Facilities"
        description="Looking for warehouse construction in Kerala? TwinLine Group builds premium, clear-span steel warehouses and logistics hubs optimized for storage and efficiency."
        url="https://www.twinlinegroup.com/warehouse-construction"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6">
              Industrial Logistics Infrastructure
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight leading-tight">
              Premier <span className="text-brand-primary">Warehouse Construction</span> in Kerala
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              We design and construct colossal, clear-span steel warehouses that optimize your supply chain operations. Experience rapid construction, maximum floor space, and uncompromising structural integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider text-center">
                Consult an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Core Philosophy & Intro */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 leading-tight">
                Building the Backbone of Kerala's Supply Chain
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                In today's fast-paced e-commerce and industrial landscape, a warehouse is no longer just a shed for storing goods. It is a highly optimized logistics machine. As the leading company for <strong>warehouse construction in Kerala</strong>, TwinLine Group builds advanced infrastructure that facilitates seamless inventory flow.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By utilizing advanced <Link to="/peb-construction" className="text-brand-primary hover:underline font-semibold">Pre-Engineered Building (PEB)</Link> technology, our warehouses are defined by their massive clear spans. By eliminating the need for internal support columns, we give you 100% usable floor space. This is critical for maneuvering forklifts, installing high-density automated racking systems, and designing efficient loading dock operations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Furthermore, we understand the specific challenges of operating in Kerala. Our structural designs account for extreme monsoon rainfall and high coastal wind loads. The foundations are elevated, the roofing is engineered with high-capacity drainage, and the steel framing is coated with industrial-grade anti-corrosive primers to ensure decades of maintenance-free service.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-3xl h-48 overflow-hidden">
                    <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Warehouse interior steel framing" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-gray-900 rounded-3xl p-6 text-white h-48 flex flex-col justify-center">
                    <Package className="text-brand-primary w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-1">Maximized Storage</h4>
                    <p className="text-sm text-gray-400">Clear-span designs for high-density racking.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-brand-primary rounded-3xl p-6 text-gray-900 h-48 flex flex-col justify-center">
                    <Truck className="text-gray-900 w-10 h-10 mb-4" />
                    <h4 className="font-bold text-lg mb-1">Logistics Flow</h4>
                    <p className="text-sm text-gray-800">Engineered for seamless loading & unloading.</p>
                  </div>
                  <div className="bg-gray-100 rounded-3xl h-48 overflow-hidden">
                    <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Warehouse exterior loading docks" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Warehouse Types */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Tailored Warehouse Solutions</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Different industries require entirely different storage environments. We custom-engineer your facility based on the exact nature of the goods you store.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <Box className="text-brand-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-Commerce Fulfillment</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Designed for speed. We incorporate multiple loading docks, wide clear spans for automated sorting conveyors, and heavy-duty concrete flooring designed to withstand continuous forklift traffic.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <Lock className="text-brand-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Storage & FMCG</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                For perishable goods and pharmaceuticals. We utilize highly insulated PUF sandwich panels for the roof and walls, creating a thermally sealed envelope that drastically reduces refrigeration costs.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                <Grid className="text-brand-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Industrial Storage</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Built to hold massive weights. We engineer the primary structural framing to support heavy EOT overhead cranes and integrate high-load mezzanine floors for administrative offices.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-24 bg-gray-900 text-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Advanced Engineering Features</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                A TwinLine warehouse is a marvel of modern structural engineering. Every component is meticulously calculated to ensure safety, efficiency, and longevity.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-800 p-2 rounded-lg"><Activity className="text-brand-primary" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Optimized Concrete Flooring (FM2/FM3)</h4>
                    <p className="text-sm text-gray-400">We lay super-flat concrete floors utilizing Vacuum Dewatered Flooring (VDF) technology. This ensures the floor is perfectly level, which is a strict requirement for high-reach forklifts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-800 p-2 rounded-lg"><CheckCircle className="text-brand-primary" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Passive Ventilation Systems</h4>
                    <p className="text-sm text-gray-400">To maintain a comfortable working environment and protect inventory from humidity, we install continuous ridge ventilators and turbo vents on our <Link to="/roofing-solutions" className="text-brand-primary hover:underline">roofing systems</Link>.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-gray-800 p-2 rounded-lg"><Sun className="text-brand-primary" size={20} /></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Daylighting Integration</h4>
                    <p className="text-sm text-gray-400">We strategically insert translucent polycarbonate skylight panels into the roof profile. This floods the warehouse with natural light, cutting your daytime electricity bills to near zero.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 p-8">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">The TwinLine Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Construction Speed</span>
                  <span className="font-bold text-brand-primary flex items-center">Up to 50% Faster <ArrowRight size={14} className="ml-1" /></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Usable Floor Area</span>
                  <span className="font-bold text-brand-primary flex items-center">100% Clear-Span <ArrowRight size={14} className="ml-1" /></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Future Expansion</span>
                  <span className="font-bold text-brand-primary flex items-center">Highly Modular <ArrowRight size={14} className="ml-1" /></span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Maintenance</span>
                  <span className="font-bold text-brand-primary flex items-center">Near Zero <ArrowRight size={14} className="ml-1" /></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-brand-primary rounded mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-brand-primary shadow-md' : 'border-gray-200'}`}
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="font-bold text-gray-900 pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`text-brand-primary transform transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Scale Your Logistics Operations Today
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Ready to build a massive, column-free storage facility? Partner with the most trusted company for warehouse construction in Kerala. Contact us for a technical consultation.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-brand-primary text-gray-900 font-bold py-4 px-10 rounded shadow-xl hover:bg-green-500 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Request a Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WarehouseConstruction;
