import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Wrench, BarChart } from 'lucide-react';

const SteelBuildingConstruction = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Building Construction in Kerala",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TwinLine Group",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malappuram",
        "addressRegion": "Kerala"
      }
    },
    "description": "TwinLine Group is the best steel building contractor in Kerala, providing turnkey steel construction, structural framing, and industrial building solutions."
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <SEO 
        title="Best Steel Building Contractor in Kerala | TwinLine Group"
        description="Looking for the top steel building contractor in Kerala? TwinLine Group offers expert structural steel construction, commercial framing, and turnkey solutions."
        keywords="Steel Building Contractor, Structural Building Contractor, Steel Construction Company, Kerala, India, Commercial Building Contractor"
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-brand-primary/10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto rounded-3xl mt-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 leading-tight">
            Best Steel Building Contractor in Kerala
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            As a leading Steel Construction Company, we provide high-quality, durable, and cost-effective steel building solutions across Trivandrum, Kochi, Kozhikode, and all of Kerala. From commercial building construction to heavy industrial infrastructure, we deliver excellence.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center bg-brand-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors shadow-lg">
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Why Choose Steel */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6">Why Choose Structural Steel Construction?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Steel building construction is revolutionizing the commercial and industrial landscape in Kerala. As the top Structural Building Contractor, we utilize high-tensile steel to create frameworks that are incredibly strong, earthquake-resistant, and quick to assemble. 
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Unlike traditional concrete construction, steel structures reduce foundation loads, offer massive clear spans, and significantly cut down project completion times.
            </p>
            <ul className="space-y-3">
              {[
                "Unmatched Strength-to-Weight Ratio",
                "Rapid Construction & Assembly",
                "100% Recyclable and Eco-friendly",
                "High Resistance to Extreme Weather",
                "Maximum Floor Space Utilization"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle className="w-5 h-5 text-brand-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden shadow-xl">
             <img src="https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_800,h_600,q_90/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg" alt="Steel Building Construction in Kerala" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Construction Process */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-10 text-center">Our Steel Building Construction Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wrench, title: "1. Design & Engineering", desc: "Precision structural modeling using advanced CAD software to ensure maximum stability and compliance." },
              { icon: Shield, title: "2. Fabrication", desc: "Factory-controlled fabrication of steel members ensuring perfect dimensional accuracy and quality." },
              { icon: Clock, title: "3. Logistics & Site Prep", desc: "On-time delivery of materials to the site and preparation of foundation bolts and structural bases." },
              { icon: BarChart, title: "4. Erection & Finishing", desc: "Safe, rapid assembly by our expert riggers followed by premium roofing and wall cladding installation." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 text-brand-primary">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section>
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">Industries We Serve Across Kerala</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Commercial Complexes", "Industrial Manufacturing", "Logistics & Warehousing", "Educational Institutions", "Healthcare Facilities", "Retail & Supermarkets"].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-primary transition-colors cursor-default">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{industry}</h3>
                <p className="text-gray-500 text-sm">Custom engineered steel solutions tailored for the specific load and spatial requirements of the {industry.toLowerCase()} sector.</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How much does steel building construction cost in Kerala?</h3>
              <p className="text-gray-600">The cost varies based on the clear span, height, load requirements, and site location. Generally, it ranges between ₹1,200 to ₹2,500 per sq.ft. However, the speed of construction results in a faster return on investment compared to concrete.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Are steel buildings suitable for Kerala's climate?</h3>
              <p className="text-gray-600">Absolutely. We use heavily galvanized and epoxy-coated steel components to prevent corrosion from humidity and coastal salt. They are also highly resistant to heavy monsoon rains and high winds.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with TwinLine Group, the premier structural building contractor in Kerala. Let's build a structure that stands the test of time.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/#contact" className="bg-brand-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+917736067063" className="bg-white/10 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/20 transition-colors">
              Call +91 77360 67063
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SteelBuildingConstruction;
