import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Factory, Settings, Zap, HardHat, ShieldAlert, Cpu, Maximize2, ChevronDown, CheckCircle } from 'lucide-react';

const FactoryBuildingConstruction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Factory Building Contractor in Kerala | TwinLine Group",
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
    "description": "Expert factory building contractor in Kerala. We design and construct heavy-duty industrial sheds, manufacturing plants, and processing facilities using structural steel.",
    "serviceType": "Industrial Construction"
  };

  const faqs = [
    {
      q: "Why is structural steel the best choice for factory construction in Kerala?",
      a: "Structural steel provides an unmatched strength-to-weight ratio. This allows us to build massive, clear-span manufacturing floors without obstructive support pillars. It's also significantly faster to erect than concrete, reducing your time-to-market. Additionally, steel is highly resilient to the heavy vibrations caused by industrial machinery."
    },
    {
      q: "Can your factory designs support heavy overhead cranes?",
      a: "Yes, absolutely. We engineer the primary structural framework—specifically the steel columns and crane brackets—to seamlessly integrate Electric Overhead Traveling (EOT) cranes. Depending on your manufacturing needs, we can design the structure to handle crane capacities ranging from 5 Tons to over 50 Tons."
    },
    {
      q: "How do you ensure proper ventilation and lighting in a large factory?",
      a: "Industrial ventilation is critical for worker safety and machine efficiency. We incorporate continuous ridge ventilators, turbo vents, and wall louvers to ensure constant airflow and heat dissipation. For lighting, we integrate polycarbonate skylight panels into the roof, flooding the factory floor with natural daylight and drastically cutting electricity costs."
    },
    {
      q: "How do you protect the factory structure from Kerala's corrosive coastal climate?",
      a: "Every steel component we fabricate is shot-blasted to remove impurities and then coated with heavy-duty industrial epoxy primers and polyurethane (PU) topcoats. For the roofing and cladding, we use high-GSM Galvalume sheets which offer exceptional resistance to rust and saline air."
    },
    {
      q: "Can a steel factory building be expanded in the future?",
      a: "Yes, future expansion is one of the greatest advantages of a Pre-Engineered Building (PEB) factory. The structures are inherently modular. If you need to increase your production line, we simply remove the non-load-bearing end wall, erect additional steel bays, and re-sheet the exterior. It is far cheaper and less disruptive than expanding a concrete building."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Leading Factory Building Contractor in Kerala | Industrial Sheds"
        description="TwinLine Group is the premier factory building contractor in Kerala. We engineer and construct heavy-duty, clear-span manufacturing facilities and industrial sheds."
        url="https://www.twinlinegroup.com/factory-building"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6">
              Industrial Manufacturing Facilities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight leading-tight">
              Expert <span className="text-brand-primary">Factory Building Contractor</span> in Kerala
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              We design, engineer, and fabricate heavy-duty industrial plants tailored to your manufacturing processes. Experience the power of custom structural steel engineering designed for maximum productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider text-center">
                Request an Engineering Consultation
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
                Architecting the Future of Manufacturing in Kerala
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                A modern factory is a highly complex ecosystem. It requires precise spatial planning to house heavy machinery, withstand intense dynamic vibrations, manage complex electrical routing, and ensure the absolute safety of the workforce. As the leading <strong>factory building contractor in Kerala</strong>, TwinLine Group delivers turnkey industrial construction solutions that meet these rigorous demands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We utilize advanced <Link to="/peb-construction" className="text-brand-primary hover:underline font-semibold">Pre-Engineered Building (PEB)</Link> and structural steel technology to create massive, column-free manufacturing floors. By eliminating internal pillars, we provide your production engineers with a blank canvas to lay out assembly lines in the most efficient manner possible, without spatial compromises.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Furthermore, time is your most valuable asset. Traditional concrete factory construction can take years, delaying your time-to-market. Because our steel factory components are precisely fabricated in our off-site facility and rapidly assembled on-site using high-tensile bolts, we cut construction timelines by up to 50%, allowing you to begin production and generate ROI months ahead of schedule.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-3xl p-6 text-center flex flex-col items-center justify-center border border-gray-200 shadow-sm">
                  <Factory className="w-12 h-12 text-brand-primary mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Heavy Manufacturing</h4>
                  <p className="text-sm text-gray-500">Engineered to absorb intense machine vibrations.</p>
                </div>
                <div className="bg-gray-100 rounded-3xl p-6 text-center flex flex-col items-center justify-center border border-gray-200 shadow-sm mt-8">
                  <Cpu className="w-12 h-12 text-brand-primary mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">High-Tech Processing</h4>
                  <p className="text-sm text-gray-500">Dust-free environments using PUF insulated panels.</p>
                </div>
              </div>
              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Critical Industrial Integrations</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't just build the shell; we engineer the structure to seamlessly support your core industrial processes and heavy equipment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Maximize2 className="text-brand-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">EOT Crane Integration</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Moving heavy raw materials requires robust overhead lifting capabilities. We engineer the primary structural columns with specialized crane brackets and runway beams to safely support Electric Overhead Traveling (EOT) cranes with capacities from 5MT to over 50MT.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Settings className="text-brand-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High-Load Mezzanine Decks</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Optimize your vertical space. We design and install heavy-duty structural steel mezzanine floors within the factory. These are perfect for housing administrative offices, quality control labs, or secondary light-assembly lines overlooking the main production floor.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="text-brand-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Floor Engineering</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A factory is only as good as its floor. We provide Vacuum Dewatered Flooring (VDF) and epoxy-coated concrete slabs engineered to withstand extreme point-loads from heavy machinery, forklift traffic, and chemical spills.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="text-brand-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fire & Safety Compliance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Safety is paramount. Our factory designs strictly adhere to all national building codes for industrial safety. We incorporate fire-retardant paints, specialized emergency exit routing, and structural supports for heavy fire-suppression sprinkler systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Control */}
        <section className="mb-24">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">Mastering the Industrial Environment</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Kerala's tropical climate—characterized by intense heat and heavy monsoons—poses significant challenges for manufacturing. A hot, poorly ventilated factory leads to worker fatigue and reduced machinery lifespan.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Through our advanced <Link to="/roofing-solutions" className="text-brand-primary hover:underline">roofing solutions</Link>, we turn the factory into a climate-controlled powerhouse.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-primary" size={20} />
                  <span><strong>PUF Insulated Panels:</strong> Reduces indoor temperatures by 6-8°C.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-primary" size={20} />
                  <span><strong>Polycarbonate Skylights:</strong> Provides free, natural daytime illumination.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-brand-primary" size={20} />
                  <span><strong>Ridge Ventilators:</strong> Extracts hot air continuously without power.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Industrial factory interior with skylights" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
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
            Ready to Build Your Manufacturing Hub?
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Partner with the most technically capable factory building contractor in Kerala. Contact our engineering team today to discuss your industrial requirements and receive a comprehensive structural proposal.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
};

export default FactoryBuildingConstruction;
