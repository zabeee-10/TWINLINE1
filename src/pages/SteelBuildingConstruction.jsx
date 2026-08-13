import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Wrench, BarChart, ChevronDown, MapPin, Building2, HardHat, FileCheck } from 'lucide-react';

const SteelBuildingConstruction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Steel Building Contractor in Kerala | TwinLine Group",
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
    "description": "Premium steel building contractor in Kerala. We design, engineer, and fabricate multi-story steel buildings, commercial spaces, and industrial frames.",
    "serviceType": "Steel Building Construction"
  };

  const faqs = [
    {
      q: "Why should I choose a steel building contractor in Kerala over traditional concrete builders?",
      a: "Steel construction offers unmatched speed, durability, and cost-efficiency. In Kerala's heavy monsoon climate, properly treated steel structures are highly resistant to moisture damage, termites, and structural decay. Additionally, steel buildings require fewer columns, maximizing your usable floor space and allowing for flexible architectural designs."
    },
    {
      q: "How long does a typical steel building construction project take?",
      a: "The construction timeline is generally 30% to 50% faster than traditional brick-and-mortar buildings. Because the steel components are pre-engineered and fabricated in our controlled factory environment, site assembly is rapid. A standard commercial steel building can often be erected in just a few months, from foundation to handover."
    },
    {
      q: "Are steel buildings safe during extreme weather or natural disasters?",
      a: "Absolutely. Steel has the highest strength-to-weight ratio of any construction material. Our steel buildings are engineered specifically to withstand high wind loads, heavy rainfall, and seismic activity. They are rigorously tested and comply with all national safety and structural engineering standards."
    },
    {
      q: "Can you customize the design of my steel building?",
      a: "Yes, customization is one of the primary benefits of steel buildings. Whether you need a multi-storied commercial complex, an open-span warehouse, or an architecturally complex showroom, our in-house engineering team uses advanced CAD and structural modeling software to tailor the design exactly to your operational requirements and aesthetic preferences."
    },
    {
      q: "Is steel building construction environmentally friendly?",
      a: "Steel is one of the most sustainable construction materials available, as it is 100% recyclable without losing its structural properties. The precision of factory fabrication also means there is virtually zero material waste on site. Furthermore, steel buildings can be easily insulated to ensure high energy efficiency."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Leading Steel Building Contractor in Kerala | TwinLine Group"
        description="TwinLine Group is the premier steel building contractor in Kerala. Specializing in high-strength, weather-resistant steel structures for commercial & industrial sectors."
        url="https://www.twinlinegroup.com/steel-building-construction"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight">
            Top-Tier <span className="text-brand-primary">Steel Building Contractor</span> in Kerala
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Engineering the future of infrastructure. We deliver structurally robust, rapidly assembled, and highly customizable steel buildings for commercial, industrial, and institutional applications across Kerala.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded hover:bg-green-500 transition-colors uppercase tracking-wider">
              Get a Free Quote
            </Link>
            <Link to="/peb-construction" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-4 px-8 rounded hover:bg-white/20 transition-colors uppercase tracking-wider hidden sm:block">
              Explore PEB Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Introduction / The Market Need */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900 leading-tight">
                Revolutionizing Infrastructure with Advanced Steel Building Construction
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                As the leading <strong>steel building contractor in Kerala</strong>, TwinLine Group is at the forefront of the structural transformation sweeping across the construction industry. Traditional brick, mortar, and concrete construction methods are rapidly being replaced by the unparalleled efficiency, strength, and versatility of structural steel. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kerala's unique climatic conditions—characterized by heavy monsoon rains and high humidity—demand building materials that do not degrade, warp, or succumb to moisture over time. Our precisely engineered steel structures are galvanized and treated to offer maximum resistance to corrosion, ensuring that your commercial complexes, retail showrooms, hospitals, and educational institutions stand the test of time. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                By choosing steel, you are not just investing in a building; you are investing in a rapid return on investment. Our factory-controlled fabrication process ensures exact dimensional accuracy, virtually eliminating on-site delays and material waste. When the steel members arrive at your site, they are bolted together with absolute precision, cutting overall construction time by up to 50% compared to conventional methods.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_800,h_1000,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Structural steel frame building construction in Kerala" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-xl">Precision Fabrication for Maximum Structural Integrity</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Why Partner With the Top Steel Building Contractor in Kerala?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our commitment to engineering excellence, safety, and client satisfaction makes us the preferred choice for massive infrastructure projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Durability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our steel members are engineered from high-tensile structural steel that withstands extreme weather, seismic forces, and heavy industrial loads. Unlike concrete, steel does not crack or creep over decades of use.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accelerated Construction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Time is money. By fabricating the primary and secondary framing in our factory simultaneously with your site's foundation work, we dramatically compress the project schedule.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Architectural Flexibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Steel's incredible strength allows for clear-span designs—meaning you can have vast, open interior spaces without obtrusive support columns, perfect for modern commercial offices and showrooms.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <BarChart className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost-Effective Scalability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                If your business grows, your building can grow with it. Steel buildings are inherently modular. Expanding a steel structure by adding bays or extending the roofline is significantly cheaper and easier than modifying concrete.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Compliance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our erections are carried out by highly trained riggers utilizing advanced safety harnesses, cranes, and lifting equipment. We strictly adhere to Indian Standard (IS) codes for structural design.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Turnkey Project Management</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From initial 3D structural modeling to the final installation of cladding and <Link to="/roofing-solutions" className="text-brand-primary hover:underline">roofing solutions</Link>, we manage the entire lifecycle of the project to guarantee seamless delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our End-to-End Steel Building Process</h2>
            <div className="w-20 h-1 bg-brand-primary rounded mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Building a multi-story steel complex requires immense precision. Here is how our expert engineers bring your vision to reality, ensuring every millimeter aligns perfectly.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Architectural Design & Structural Engineering</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Every successful project begins with meticulous planning. Our engineering team utilizes cutting-edge BIM (Building Information Modeling) and CAD software to design the primary rigid frames, secondary purlins, and girts. We calculate exact load-bearing requirements, accounting for dead loads, live loads, and dynamic environmental forces like wind and rain specific to your location in Kerala.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  During this phase, we also plan for integration with other systems. If your facility requires overhead cranes, heavy machinery support, or complex <Link to="/factory-building" className="text-brand-primary hover:underline">factory building construction</Link> requirements, it is engineered directly into the structural model.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
                <Wrench size={64} className="text-gray-300" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
                <Building2 size={64} className="text-gray-300" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Precision Factory Fabrication</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Once the digital models are approved, data is sent to our state-of-the-art fabrication facility. Here, high-grade steel plates are precisely cut using CNC plasma machines, welded into I-beams or H-columns, and drilled for bolt connections.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The fabricated members undergo stringent non-destructive testing (NDT) to ensure weld integrity. Finally, they are shot-blasted and coated with industrial-grade anti-corrosive primers and paints. This factory-controlled environment guarantees a level of quality that is simply impossible to achieve with on-site fabrication.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Logistics & Site Erection</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While fabrication takes place, the site foundation and anchor bolts are prepared. Once cured, the steel members are sequentially transported to the site. Our specialized erection crews use heavy cranes to lift the primary columns and rafters into place.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Because every piece has been pre-cut and pre-drilled, the building is assembled like a massive erector set. High-strength structural bolts are used to secure the frame, creating an incredibly rigid and safe skeleton for your building.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
                <HardHat size={64} className="text-gray-300" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
                <CheckCircle size={64} className="text-gray-300" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Cladding, Roofing & Finishing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The final stage involves enclosing the structure. We install high-quality wall cladding panels and insulated roof sheets to make the building weatherproof and energy-efficient. Flashings, trims, gutters, and downspouts are meticulously attached to ensure proper water drainage.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The result is a stunning, highly functional commercial or industrial space delivered in record time. We conduct a final walk-through to ensure every nut, bolt, and panel meets our exacting quality standards before handing over the keys to the client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications / Verticals */}
        <section className="mb-20 bg-gray-900 text-white rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Applications of Our Steel Structures</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our expertise spans across multiple sectors, providing bespoke steel framing solutions for diverse industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/warehouse-construction" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-brand-primary group cursor-pointer block">
              <h4 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors">Warehouses</h4>
              <p className="text-gray-400 text-sm">Clear-span storage facilities optimized for maximum volumetric capacity and logistics flow.</p>
            </Link>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-brand-primary group cursor-default">
              <h4 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors">Commercial Complexes</h4>
              <p className="text-gray-400 text-sm">Multi-story retail showrooms and office spaces featuring modern architectural aesthetics.</p>
            </div>
            <Link to="/auditorium-construction" className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-brand-primary group cursor-pointer block">
              <h4 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors">Auditoriums</h4>
              <p className="text-gray-400 text-sm">Acoustically optimized, column-free event spaces for educational and public institutions.</p>
            </Link>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700 hover:border-brand-primary group cursor-default">
              <h4 className="text-lg font-bold mb-2 group-hover:text-brand-primary transition-colors">Healthcare</h4>
              <p className="text-gray-400 text-sm">Rapidly deployed hospital wings and medical colleges ensuring quick operational readiness.</p>
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
      <section className="bg-brand-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Ready to Build Your Next Steel Project?
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Contact TwinLine Group today to discuss your requirements with the premier steel building contractor in Kerala. We provide free consultations and comprehensive structural quotes.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SteelBuildingConstruction;
