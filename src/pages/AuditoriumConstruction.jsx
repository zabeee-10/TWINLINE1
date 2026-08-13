import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Mic, Maximize, Wind, Users, Shield, Award, ChevronDown, CheckCircle, Headphones } from 'lucide-react';

const AuditoriumConstruction = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Auditorium Construction in Kerala | TwinLine Group",
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
    "description": "Leading auditorium construction company in Kerala. We build massive, clear-span steel auditoriums with superior acoustics for schools, colleges, and public events.",
    "serviceType": "Auditorium Construction"
  };

  const faqs = [
    {
      q: "Why use structural steel for auditorium construction instead of concrete?",
      a: "The primary requirement of an auditorium is a massive open space so that the audience has a totally unobstructed view of the stage. Concrete structures require internal support pillars to hold up the roof, which blocks sightlines. By utilizing structural steel and Pre-Engineered Building (PEB) technology, we can achieve clear spans of over 50 meters, eliminating all internal pillars entirely."
    },
    {
      q: "How do you handle the acoustics in a steel-framed auditorium?",
      a: "Acoustics are paramount. A bare metal roof creates unacceptable echoes and amplifies the sound of heavy monsoon rain. We solve this by using PUF (Polyurethane Foam) insulated sandwich panels or rock wool insulation for the roofing and walls. This not only drastically improves thermal comfort but also acts as an excellent sound dampener, ensuring high-fidelity acoustics during events."
    },
    {
      q: "Can you build an auditorium over an existing building?",
      a: "Yes. Due to the high strength-to-weight ratio of steel, it is much lighter than concrete. We frequently design and construct steel auditoriums on the terraces of existing school or college buildings, provided the existing foundation and columns are verified by our structural engineers to carry the additional load."
    },
    {
      q: "How long does it take to construct a large auditorium?",
      a: "Because all the steel trusses, columns, and roofing components are pre-fabricated in our factory, the on-site erection process is incredibly fast. Depending on the size, a complete steel superstructure and roof for a 1,000-seater auditorium can often be completed in just a few months."
    },
    {
      q: "Are steel auditoriums safe in the event of a fire?",
      a: "Safety is our top priority. We adhere to all strict fire and safety codes required for public assembly buildings. The steel structure can be coated with specialized intumescent (fire-retardant) paint. Furthermore, our designs incorporate wide clear spans that make planning for multiple, unobstructed emergency fire exits very straightforward."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Expert Auditorium Construction in Kerala | Clear-Span Structures"
        description="Looking for expert auditorium construction in Kerala? We engineer massive, column-free steel auditoriums with superior acoustics and thermal insulation."
        url="https://www.twinlinegroup.com/auditorium-construction"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6">
            Institutional & Public Infrastructure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight">
            Premium <span className="text-brand-primary">Auditorium Construction</span> in Kerala
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            We engineer magnificent, column-free steel auditoriums that guarantee unobstructed sightlines, superior acoustics, and maximum seating capacity for educational institutions and public events.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider">
              Discuss Your Auditorium Project
            </Link>
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
                Engineering Flawless Event Spaces
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Building an auditorium presents a unique set of architectural and engineering challenges. It requires massive open interior spaces, perfect acoustics, efficient climate control, and stringent adherence to public safety codes. As the premier company for <strong>auditorium construction in Kerala</strong>, TwinLine Group specializes in overcoming these exact challenges using advanced structural steel engineering.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The greatest flaw in traditional concrete auditorium construction is the reliance on internal support pillars. These pillars inevitably create 'blind spots' where audience members cannot see the stage. By utilizing our <Link to="/peb-construction" className="text-brand-primary hover:underline font-semibold">Pre-Engineered Building (PEB)</Link> technology, we design heavy-duty steel roof trusses that can span massive distances—often exceeding 50 meters—without a single internal column.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This clear-span capability ensures 100% unobstructed sightlines from every single seat in the house, maximizing the usable floor area and creating a truly immersive experience for the audience. Whether you are a university planning a 2,000-seat convocation hall or a local municipality building a cultural center, our steel auditoriums are the most efficient, cost-effective, and aesthetically striking solution available.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-100 rounded-3xl h-48 overflow-hidden relative group">
                  <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Auditorium roof truss" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Maximize className="text-white w-12 h-12" />
                  </div>
                </div>
                <div className="bg-brand-primary rounded-3xl p-6 text-gray-900 h-48 flex flex-col justify-center shadow-lg">
                  <Users className="text-gray-900 w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg mb-1">Maximized Capacity</h4>
                  <p className="text-sm text-gray-800">100% usable floor space for maximum seating.</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-900 rounded-3xl p-6 text-white h-48 flex flex-col justify-center shadow-lg">
                  <Mic className="text-brand-primary w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg mb-1">Acoustic Excellence</h4>
                  <p className="text-sm text-gray-400">Engineered to eliminate echo and noise pollution.</p>
                </div>
                <div className="bg-gray-100 rounded-3xl h-48 overflow-hidden relative group">
                  <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_400,h_400,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Auditorium interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale" />
                  <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Pillars of a Great Auditorium */}
        <section className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">The Pillars of our Auditorium Designs</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">An auditorium is more than just a large room; it is a highly tuned instrument. Here is how we ensure perfection across all critical domains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Maximize className="text-brand-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Unobstructed Sightlines</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  By utilizing highly engineered steel roof trusses, we eliminate the need for load-bearing pillars inside the hall. We also engineer tiered seating structures and balconies directly into the structural steel framework, ensuring every seat offers a perfect view of the stage.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Headphones className="text-brand-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Superior Acoustic Treatment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A bare metal roof is disastrous for acoustics, amplifying the deafening sound of heavy Kerala monsoons. We integrate specialized <Link to="/roofing-solutions" className="text-brand-primary hover:underline">PUF insulated sandwich panels</Link> and acoustic rock wool liners to dampen external noise and prevent internal reverberation, delivering crystal-clear audio.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Wind className="text-brand-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Climate Control Efficiency</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cooling a massive auditorium with hundreds of people inside is incredibly energy-intensive. Our thermally insulated roof and wall panels drastically reduce the heat load entering the building, allowing your centralized air conditioning systems to run much more efficiently.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="text-brand-primary" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Public Safety Compliance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Auditoriums classify as high-occupancy public assembly buildings. Our structural engineering strictly complies with IS codes for seismic stability and fire safety. The column-free design allows for wide, unobstructed emergency exit routes for rapid evacuation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rooftop Auditoriums Highlight */}
        <section className="mb-24">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-heading mb-6">Space constrained? Build Upwards.</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Many schools and colleges in Kerala face severe land constraints, making it impossible to construct a new standalone auditorium on the ground.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                <strong>Rooftop Auditoriums</strong> are one of our core specialties. Because structural steel is significantly lighter than concrete, we can often erect a complete, fully covered auditorium on the existing terrace of your institutional building. Our structural engineers will rigorously assess the load-bearing capacity of your existing columns and design a lightweight, high-tensile steel frame that provides a massive event space without compromising the structural integrity of the building below.
              </p>
              <div className="flex items-center gap-4 text-brand-primary font-bold">
                <Award size={24} />
                <span>Zero Land Acquisition Costs Required</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl z-10">
              <img src="https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_600,h_800,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg" alt="Rooftop steel auditorium construction" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-brand-primary text-gray-900 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">Terrace Extension</span>
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
            Bring Your Vision to the Main Stage
          </h2>
          <p className="text-gray-800 mb-8 text-lg">
            Ready to build a magnificent, column-free event space? Partner with the leading company for auditorium construction in Kerala. Contact our engineering experts today for a free site evaluation and structural quote.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-gray-900 text-white font-bold py-4 px-10 rounded shadow-xl hover:bg-black hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Contact TwinLine Group
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AuditoriumConstruction;
