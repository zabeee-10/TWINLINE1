import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, ShieldCheck, Factory, Warehouse, ChevronDown, Layers, Maximize, Settings, Home } from 'lucide-react';

const PebConstruction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "PEB Contractor in Kerala | TwinLine Group",
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
    "description": "Leading PEB Contractor in Kerala offering customized Pre-Engineered Buildings for industrial, commercial, and agricultural use. Fast assembly and highly durable.",
    "serviceType": "Pre-Engineered Building Construction"
  };

  const faqs = [
    {
      q: "What exactly is a Pre-Engineered Building (PEB)?",
      a: "A Pre-Engineered Building (PEB) is a steel structure built over a structural concept of primary members, secondary members, and the cover sheeting connected to each other. The structural members are custom designed to be lighter in weight as well as high in strength. Unlike conventional buildings, PEBs are entirely fabricated in the factory according to exact specifications and then bolted together on-site."
    },
    {
      q: "Why should I hire a specialized PEB contractor in Kerala?",
      a: "Kerala's high rainfall and humidity require specialized structural engineering to prevent corrosion and water ingress. As a specialized PEB contractor in Kerala, TwinLine Group uses galvanized steel, highly durable color-coated Galvalume sheets, and specialized weather-tight fastening systems that withstand the local monsoon climate better than generic construction."
    },
    {
      q: "Are PEBs more cost-effective than conventional concrete buildings?",
      a: "Yes. PEB construction significantly reduces the total cost of ownership. The pre-engineered design reduces the amount of steel required, lowering material costs. Furthermore, because fabrication and foundation work happen simultaneously, construction time is reduced by up to 50%, saving massively on labor and allowing you to occupy the building much faster."
    },
    {
      q: "Can PEB structures be insulated or air-conditioned?",
      a: "Absolutely. PEBs can be easily insulated using materials like PUF (Polyurethane Foam), rock wool, or glass wool panels. This insulation significantly reduces heat transfer, making the interior highly energy-efficient and perfectly suitable for centralized air-conditioning, cold storage facilities, or climate-controlled warehouses."
    },
    {
      q: "What is the maximum clear span you can build without internal columns?",
      a: "Depending on the exact requirements and load cases, our advanced PEB engineering allows for clear spans (unobstructed interior space without support columns) of 30 meters up to 90 meters. This makes PEBs the undisputed best choice for aircraft hangars, massive factory floors, and large sports arenas."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Top PEB Contractor in Kerala | Pre-Engineered Buildings | TwinLine"
        description="Looking for the best PEB contractor in Kerala? TwinLine Group designs and builds highly durable, cost-effective Pre-Engineered Buildings for industries and commercial spaces."
        url="https://www.twinlinegroup.com/peb-construction"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay grayscale"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight leading-tight">
              The Most Trusted <span className="text-brand-primary block mt-2">PEB Contractor in Kerala</span>
            </h1>
            <div className="w-24 h-1.5 bg-brand-primary mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Transforming the industrial and commercial landscape of South India. We design, manufacture, and erect cutting-edge Pre-Engineered Buildings that are cost-effective, sustainable, and built to last generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider text-center">
                Request a Custom PEB Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Concept Introduction */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 leading-tight">
                What Makes Pre-Engineered Buildings the Ultimate Construction Choice?
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                As a premier <strong>PEB contractor in Kerala</strong>, TwinLine Group leverages modern engineering to replace outdated construction methods. Pre-Engineered Buildings (PEBs) represent the pinnacle of structural efficiency. Unlike traditional buildings where materials are fabricated on-site slowly and with high margins of error, a PEB is 100% custom-engineered using computer-aided design before a single piece of steel is cut.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The primary framing consists of bespoke 'built-up' I-shaped steel members. These members are engineered to be thickest where the structural load is highest and taper down where the load is minimal. This tapering significantly reduces the overall weight of the steel required without compromising the building's integrity, translating to massive cost savings for the client.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Furthermore, PEBs are incredibly versatile. Our structures are clad with high-quality <Link to="/roofing-solutions" className="text-brand-primary hover:underline font-semibold">metal roofing solutions</Link> and insulated wall panels, making them aesthetically pleasing and highly energy-efficient. Whether you are building an expansive logistics hub, a modern retail supermarket, or a climate-controlled agricultural facility, our PEB systems deliver unmatched performance.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200 shadow-inner relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Anatomy of our PEBs</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-primary/20 p-2 rounded text-brand-primary"><Layers size={20} /></div>
                    <div>
                      <strong className="block text-gray-900">Primary Framing</strong>
                      <span className="text-sm text-gray-600">Custom built-up tapered steel columns and rafters.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-primary/20 p-2 rounded text-brand-primary"><Settings size={20} /></div>
                    <div>
                      <strong className="block text-gray-900">Secondary Framing</strong>
                      <span className="text-sm text-gray-600">Cold-formed Z and C-shaped purlins and girts for support.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-brand-primary/20 p-2 rounded text-brand-primary"><Home size={20} /></div>
                    <div>
                      <strong className="block text-gray-900">Roof & Wall Panels</strong>
                      <span className="text-sm text-gray-600">Galvalume profile sheets with optional PUF insulation.</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Why PEB? The Strategic Advantages</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <Zap className="text-brand-primary w-12 h-12 mb-6" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Lightning Fast Construction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fabrication is carried out entirely in our automated factory. Site work is limited to assembling the pre-drilled parts with high-strength bolts, slashing project delivery times by up to half.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <Maximize className="text-brand-primary w-12 h-12 mb-6" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Clear-Span Capabilities</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Achieve massive interior spaces without interior pillars obstructing your layout. Essential for <Link to="/factory-building" className="text-brand-primary hover:underline">factories</Link>, aircraft hangars, and sports arenas requiring unobstructed sightlines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <ShieldCheck className="text-brand-primary w-12 h-12 mb-6" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Weather & Seismic Resistance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The inherent ductility of steel makes PEBs highly resistant to earthquakes. Furthermore, our premium protective coatings ensure the steel easily withstands Kerala's corrosive coastal climate.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <CheckCircle className="text-brand-primary w-12 h-12 mb-6" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">Future Expansion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                PEBs are infinitely scalable. Extending the length of your building involves simply removing the end wall, adding new structural bays, and reattaching the wall paneling.
              </p>
            </div>
          </div>
        </section>

        {/* Industrial Focus / Features */}
        <section className="mb-24 bg-gray-50 p-8 md:p-12 lg:p-16 rounded-3xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Designed specifically for Heavy Industries & Logistics</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                TwinLine Group doesn't just build sheds; we construct heavy-duty industrial ecosystems. Our PEB solutions are tailored to support the complex operational demands of modern logistics and manufacturing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>Integrated Crane Systems:</strong> We engineer the primary structural columns to support EOT (Electric Overhead Traveling) cranes ranging from 5MT to over 50MT capacities, seamlessly integrated into the building frame.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>Mezzanine Floors:</strong> Maximize your vertical real estate by integrating high-load bearing mezzanine decks directly into the PEB framework, perfect for administrative offices overlooking the factory floor.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700"><strong>Natural Ventilation & Lighting:</strong> We incorporate ridge ventilators, turbo vents, and translucent polycarbonate skylight panels to drastically reduce energy consumption during daylight hours.</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/warehouse-construction" className="inline-flex items-center text-brand-primary font-bold hover:text-green-700 uppercase tracking-widest text-sm">
                  View our Warehouse Solutions
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <Factory className="w-10 h-10 text-gray-400 mb-3" />
                  <h4 className="font-bold text-gray-900">Manufacturing</h4>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <Warehouse className="w-10 h-10 text-gray-400 mb-3" />
                  <h4 className="font-bold text-gray-900">Logistics Hubs</h4>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                  <Home className="w-10 h-10 text-gray-400 mb-3" />
                  <h4 className="font-bold text-gray-900">Agri & Poultry</h4>
                </div>
                <div className="bg-brand-primary p-6 rounded-2xl shadow-md flex flex-col items-center text-center justify-center text-white h-[140px]">
                  <h4 className="font-bold text-xl">+ Many More</h4>
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
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
            Execute Your Industrial Vision with Precision
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Don't compromise on your infrastructure. Partner with the most reliable PEB contractor in Kerala. Let's discuss your project parameters and engineer a solution that maximizes your operational capabilities.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-brand-primary text-gray-900 font-bold py-4 px-10 rounded shadow-[0_0_20px_rgba(32,191,85,0.3)] hover:shadow-[0_0_30px_rgba(32,191,85,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PebConstruction;
