import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Settings, Wrench, Shield, CheckCircle, Flame, Layers, Box, ChevronDown } from 'lucide-react';

const SteelFabrication = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": ["Service", "LocalBusiness"],
    "name": "Steel Fabrication Company in Kerala | TwinLine Group",
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
    "description": "Premium steel fabrication company in Kerala. We specialize in heavy structural steel fabrication, custom machining, welding, and industrial pre-engineered components.",
    "serviceType": "Structural Steel Fabrication"
  };

  const faqs = [
    {
      q: "What types of steel fabrication services do you offer?",
      a: "As a leading steel fabrication company in Kerala, we offer comprehensive services including CNC plasma cutting, heavy structural welding, shearing, bending, and the complete manufacturing of built-up I-beams, H-columns, and complex architectural trusses."
    },
    {
      q: "Do you handle custom architectural steel fabrication?",
      a: "Yes, we specialize in custom architectural steel. We fabricate complex geometrical structures, aesthetic canopies, and bespoke metal facades for commercial buildings, showrooms, and luxury residences where absolute precision and visual appeal are required."
    },
    {
      q: "What quality control standards do you follow during fabrication?",
      a: "Quality is our highest priority. We strictly adhere to Indian Standard (IS) codes for structural steel fabrication. All our welders are certified, and we conduct rigorous Non-Destructive Testing (NDT)—including ultrasonic and magnetic particle inspections—to ensure zero defects in our weld seams."
    },
    {
      q: "Can you fabricate steel structures for highly corrosive environments?",
      a: "Absolutely. Kerala's coastal areas are highly corrosive. To combat this, we provide advanced surface treatment options including hot-dip galvanizing, shot-blasting, and the application of industrial-grade marine epoxy and polyurethane (PU) topcoats to guarantee decades of rust-free performance."
    },
    {
      q: "Do you only fabricate, or do you also handle site erection?",
      a: "We provide end-to-end solutions. After fabricating the components in our factory to millimeter precision, our specialized rigging crews transport the materials to your site and handle the complete structural erection using heavy cranes and high-tensile bolting systems."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      <SEO 
        title="Top Steel Fabrication Company in Kerala | TwinLine Group"
        description="Looking for a reliable steel fabrication company in Kerala? We deliver high-precision structural steel fabrication for industrial & commercial construction."
        url="https://www.twinlinegroup.com/steel-fabrication"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-widest mb-6">
            Precision Manufacturing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 uppercase tracking-tight">
            Leading <span className="text-brand-primary">Steel Fabrication</span> Company in Kerala
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Forging the framework of modern infrastructure. We deliver heavy-duty structural steel fabrication, custom machining, and precision welding with uncompromising quality control.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/#contact" className="bg-brand-primary text-gray-900 font-bold py-4 px-8 rounded shadow-lg hover:bg-green-500 transition-colors uppercase tracking-wider">
              Discuss Your Fabrication Needs
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Intro / The TwinLine Standard */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 leading-tight">
                Where Raw Steel Meets Millimeter Precision
              </h2>
              <div className="w-20 h-1 bg-brand-primary rounded"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Steel fabrication is not just about cutting and welding; it is an exact science. As the most trusted <strong>steel fabrication company in Kerala</strong>, TwinLine Group bridges the gap between complex structural engineering models and tangible, heavy-duty reality. 
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are constructing a massive <Link to="/steel-building-construction" className="text-brand-primary hover:underline">commercial steel building</Link>, an intricate architectural canopy, or heavy industrial machinery supports, the integrity of the entire project rests on the precision of the fabricated components. A misalignment of just a few millimeters in the factory can cause massive delays and safety hazards on the construction site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At our state-of-the-art fabrication facility, we utilize advanced CNC (Computer Numerical Control) machinery, automated plasma cutting, and certified submerged arc welding to ensure every plate, beam, and column matches the digital blueprint perfectly. We transform high-tensile raw steel plates into the robust skeletons that support Kerala's rapidly growing infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-inner h-48">
                <Flame className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-1">Advanced Welding</h4>
                <p className="text-xs text-gray-500">Certified welders & automated SAW technology.</p>
              </div>
              <div className="bg-gray-900 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg h-48 text-white">
                <Settings className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-white mb-1">CNC Precision</h4>
                <p className="text-xs text-gray-400">Computer-controlled cutting, drilling & punching.</p>
              </div>
              <div className="bg-brand-primary rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg h-48 text-gray-900 mt-4 col-span-2 md:col-span-1">
                <Shield className="w-12 h-12 text-gray-900 mb-4" />
                <h4 className="font-bold text-gray-900 mb-1">Strict QC/QA</h4>
                <p className="text-xs text-gray-800">Rigorous Non-Destructive Testing (NDT) on all critical joints.</p>
              </div>
              <div className="bg-gray-100 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-inner h-48 mt-4 hidden md:flex">
                <Wrench className="w-12 h-12 text-brand-primary mb-4" />
                <h4 className="font-bold text-gray-900 mb-1">Custom Assembly</h4>
                <p className="text-xs text-gray-500">Bespoke built-up structural components.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">Our Fabrication Capabilities</h2>
            <div className="w-16 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">We possess the heavy machinery, technical expertise, and factory capacity to handle steel fabrication projects of massive scale and complexity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Layers className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Built-up Structural Members</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We specialize in manufacturing custom built-up 'I' and 'H' sections from raw steel plates. These are heavily used in our <Link to="/peb-construction" className="text-brand-primary hover:underline">PEB construction</Link> projects, where columns and rafters are tapered to optimize weight and strength precisely where the structural loads demand it.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Box className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Architectural Trusses & Canopies</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                For projects requiring aesthetic appeal as well as strength—such as sports stadiums, <Link to="/auditorium-construction" className="text-brand-primary hover:underline">auditoriums</Link>, and modern retail showrooms—we fabricate complex tubular structures, space frames, and intricately designed butterfly canopies.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="text-brand-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secondary Framing & Components</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Beyond massive columns, we manufacture thousands of meters of cold-formed 'Z' and 'C' purlins, roof girts, eave struts, and custom connecting plates. We also fabricate heavy-duty staircases, mezzanine decking, and industrial handrails.
              </p>
            </div>
          </div>
        </section>

        {/* The Factory Process */}
        <section className="mb-24 bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-12 text-center">The TwinLine Fabrication Workflow</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-brand-primary shadow-sm">1</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">CNC Profiling & Cutting</h3>
                <p className="text-gray-600 leading-relaxed">Once the shop drawings are approved, high-tensile steel plates are loaded onto automated CNC plasma and oxy-fuel cutting machines. The computer-controlled lasers cut the steel exactly according to the CAD files, ensuring absolute dimensional accuracy and perfectly clean edges.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-brand-primary shadow-sm">2</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fit-up and Submerged Arc Welding</h3>
                <p className="text-gray-600 leading-relaxed">The cut plates (flanges and webs) are brought together in an assembly jig. They are tacked together and then passed through an automated Submerged Arc Welding (SAW) machine. The SAW process creates deep, uniform, and incredibly strong continuous welds that fuse the plates into a single, massive structural beam.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-brand-primary shadow-sm">3</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Assurance & NDT</h3>
                <p className="text-gray-600 leading-relaxed">We do not guess on structural integrity. Every critical weld undergoes rigorous Non-Destructive Testing (NDT). Using ultrasonic testing and magnetic particle inspection, our quality control engineers verify that there are zero internal cracks or air pockets within the weld seams.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-brand-primary shadow-sm">4</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Shot Blasting & Protective Coating</h3>
                <p className="text-gray-600 leading-relaxed">Before leaving the factory, the steel must be protected against Kerala's corrosive environment. The fabricated components are shot-blasted (SA 2.5 standard) to remove mill scale and rust. They are immediately coated with high-build industrial epoxy primers and polyurethane topcoats, ensuring a lifespan measured in decades.</p>
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
            Rely on the Masters of Metal
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Whether you need a massive industrial factory frame or intricate architectural steelwork, partner with the most advanced steel fabrication company in Kerala. Contact us today to review your shop drawings and get a detailed quote.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-brand-primary text-gray-900 font-bold py-4 px-10 rounded shadow-[0_0_20px_rgba(32,191,85,0.3)] hover:shadow-[0_0_30px_rgba(32,191,85,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            Request a Fabrication Quote
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SteelFabrication;
