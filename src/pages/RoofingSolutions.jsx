import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Umbrella, Shield, Sun, CloudRain, Droplets, Thermometer, Wind, ChevronDown } from 'lucide-react';

const RoofingSolutions = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Roofing Solutions in Kerala | TwinLine Group",
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
    "description": "Expert roofing solutions in Kerala. We provide industrial, commercial, and residential roofing including PUF insulated panels, Galvalume sheets, and polycarbonate skylights.",
    "serviceType": "Industrial & Commercial Roofing"
  };

  const faqs = [
    {
      q: "What are the best roofing solutions in Kerala considering the heavy monsoons?",
      a: "Given Kerala's intense monsoon season and coastal humidity, the best roofing solutions involve high-grade Galvalume (aluminum-zinc alloy coated) sheets or color-coated metal roofs with a high GSM. These materials offer exceptional resistance against rust and corrosion. Additionally, proper overlap engineering and specialized waterproof fasteners are critical to preventing leaks during torrential downpours."
    },
    {
      q: "What is PUF insulated roofing and why is it recommended?",
      a: "PUF (Polyurethane Foam) insulated roofing panels consist of a layer of rigid foam sandwiched between two metal sheets. They are highly recommended because they drastically reduce indoor temperatures by blocking radiant heat from the sun. This makes them perfect for factories, warehouses, and auditoriums, significantly lowering air-conditioning costs while also providing excellent sound insulation during heavy rain."
    },
    {
      q: "Can you replace the roof on my existing industrial building?",
      a: "Yes, we specialize in roof retrofitting and replacement for existing industrial and commercial structures. We safely remove the old, degraded roofing material, inspect and reinforce the underlying purlins or trusses if necessary, and install modern, leak-proof roofing systems with minimal disruption to your ongoing operations."
    },
    {
      q: "Do you provide skylights or natural lighting solutions in your roofing?",
      a: "Absolutely. We seamlessly integrate high-impact polycarbonate sheets or FRP (Fiber Reinforced Plastic) skylights into the primary metal roofing. This allows natural sunlight to illuminate the interior of your factory or warehouse, substantially reducing your daytime electrical lighting costs."
    },
    {
      q: "How long does a commercial metal roof typically last?",
      a: "When properly installed by our experts and maintained with periodic clearing of gutters, a high-quality Galvalume or color-coated metal roof can easily last 25 to 40 years, even in challenging coastal climates. We provide comprehensive warranties and use only top-tier materials from trusted manufacturers."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Premium Roofing Solutions in Kerala | Industrial & Commercial"
        description="TwinLine Group offers advanced roofing solutions in Kerala. From heavy-duty industrial roofing to PUF insulated panels, ensuring 100% leak-proof durability."
        url="https://www.twinlinegroup.com/roofing-solutions"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight">
            Advanced <span className="text-brand-primary">Roofing Solutions</span> in Kerala
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Ultimate protection against Kerala's extreme monsoons and tropical heat. We engineer and install leak-proof, thermally insulated, and highly durable roofing systems for industrial, commercial, and large-scale residential projects.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider">
              Get a Roofing Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Introduction / Weather Challenges */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-gray-900 leading-tight">
                Engineered to Defy the Elements
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                The roof is the most critical component of any structure, acting as the primary shield against the environment. Providing robust <strong>roofing solutions in Kerala</strong> demands a deep understanding of the region's intense meteorological challenges: torrential monsoon downpours, high coastal salinity, and scorching summer heat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At TwinLine Group, we don't just 'install sheets.' We engineer comprehensive roofing ecosystems. A poorly designed roof leads to devastating leaks, ruined inventory, unbearable indoor temperatures, and premature structural failure due to rust. We prevent these catastrophic failures by using only the highest grade of Galvalume and Bare Galvalume sheets, combined with advanced fastening techniques and precision-engineered overlapping profiles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether capping a massive <Link to="/warehouse-construction" className="text-brand-primary hover:underline">warehouse</Link>, a retail complex, or a sports arena, our roofing solutions guarantee absolute watertight integrity and superior thermal performance, protecting your assets for decades to come.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <CloudRain className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Monsoon Proof</h4>
                <p className="text-sm text-gray-500">Engineered slopes and deep-profile sheets prevent water pooling and ingress.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Thermometer className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Thermal Barrier</h4>
                <p className="text-sm text-gray-500">Reflective coatings and insulation drastically reduce indoor ambient heat.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Wind className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">High Wind Resistance</h4>
                <p className="text-sm text-gray-500">Fastened directly into structural purlins to withstand cyclone-grade winds.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <Shield className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Anti-Corrosive</h4>
                <p className="text-sm text-gray-500">Al-Zn alloy coatings provide superior defense against coastal salt air.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Roofing Systems */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Comprehensive Roofing Systems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a diverse portfolio of roofing profiles and materials tailored to meet specific industrial, commercial, and aesthetic requirements.</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-8 items-center hover:shadow-md transition-shadow">
              <div className="w-full lg:w-1/3 bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <Umbrella className="w-24 h-24 text-gray-300" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">PUF Insulated Sandwich Panels</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The ultimate solution for climate control and energy efficiency. Polyurethane Foam (PUF) is injected between two profiled metal sheets, creating a rigid, highly insulated 'sandwich' panel. 
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Thermal Insulation:</strong> Reduces interior temperatures by up to 6-8°C compared to bare metal.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Acoustic Damping:</strong> Muffles the deafening sound of heavy monsoon rain, crucial for <Link to="/auditorium-construction" className="text-brand-primary hover:underline">auditoriums</Link> and offices.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Energy Savings:</strong> Drastically cuts air-conditioning power consumption in commercial facilities.</span></li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-8 items-center hover:shadow-md transition-shadow">
              <div className="w-full lg:w-2/3 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standing Seam Roofing</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Standing seam roofs are the gold standard for leak prevention. Unlike standard corrugated roofs that are pierced with hundreds of exposed screws, standing seam panels interlock using concealed fasteners.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>No Exposed Screws:</strong> Eliminates the primary cause of roof leaks—screw hole expansion over time.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Thermal Expansion:</strong> The sliding clips allow the roof to expand and contract naturally under the sun without buckling.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Sleek Aesthetics:</strong> Offers a modern, clean, uninterrupted architectural line.</span></li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3 bg-gray-50 rounded-2xl p-8 flex items-center justify-center order-1 lg:order-2">
                <Droplets className="w-24 h-24 text-gray-300" />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-8 items-center hover:shadow-md transition-shadow">
              <div className="w-full lg:w-1/3 bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                <Sun className="w-24 h-24 text-gray-300" />
              </div>
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Polycarbonate Skylights & Louvers</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We integrate high-impact, UV-stabilized polycarbonate sheets directly into the metal roofing profile. This strategic placement floods the interior with natural daylight while blocking harmful UV rays.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Zero-Energy Lighting:</strong> Drastically reduces reliance on artificial lighting during the day.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>UV Protection:</strong> Blocks 99% of harmful ultraviolet radiation.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-brand-primary" size={18} /> <span className="text-gray-700"><strong>Ridge Ventilators:</strong> We also install natural ridge ventilators to allow hot air to escape without letting rain in.</span></li>
                </ul>
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
      <section className="bg-brand-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-6">
            Secure Your Facility Under a Shield of Steel
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Don't let a sub-standard roof compromise your inventory and operations. Contact TwinLine Group today for a comprehensive site assessment and a quote on our premium roofing solutions in Kerala.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default RoofingSolutions;
