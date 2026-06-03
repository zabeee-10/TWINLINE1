import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import introVideo from "../assets/intro video/intro.mp4";

import aboutVid1 from "../assets/intro video/WhatsApp Video 2026-06-03 at 2.12.18 AM.mp4";
import aboutVid2 from "../assets/intro video/WhatsApp Video 2026-06-03 at 2.12.18 AM (1).mp4";
import aboutImg1 from "../assets/intro video/WhatsApp Image 2026-06-03 at 2.12.20 AM.jpeg";
import aboutImg2 from "../assets/intro video/WhatsApp Image 2026-06-03 at 2.12.20 AM (2).jpeg";
import aboutImg3 from "../assets/intro video/WhatsApp Image 2026-06-03 at 2.12.20 AM (1).jpeg";
import aboutImg4 from "../assets/intro video/WhatsApp Image 2026-06-03 at 2.12.19 AM.jpeg";
import aboutImg5 from "../assets/intro video/WhatsApp Image 2026-06-03 at 2.12.19 AM (1).jpeg";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const aboutGallery = [
    { type: "image", src: aboutImg1 },
    { type: "image", src: aboutImg2 },
    { type: "image", src: aboutImg3 },
    { type: "image", src: aboutImg4 },
    { type: "image", src: aboutImg5 },
    { type: "video", src: aboutVid1 },
    { type: "video", src: aboutVid2 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Video Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-11/12 sm:w-4/5 lg:w-10/12 xl:w-4/5 mx-auto"
          >
            {/* The Video Element */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl z-10 bg-gray-900 border border-gray-100/10"
              style={{ aspectRatio: '4/5' }}
            >
              <video 
                src={introVideo}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                title="TwinLine Group — Company introduction video showcasing steel structure and construction projects"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-primary/10 rounded-full z-0 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-brand-primary/20 rounded z-0 hidden sm:block"></div>
          </motion.div>
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-brand-primary font-semibold tracking-wider uppercase">About Our Company</h4>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
              Professional steel structure solutions for safe & efficient construction projects in Kerala
            </h2>
            <div className="w-20 h-1 bg-brand-primary rounded"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to TwinLine Group, your trusted partner in delivering cutting-edge construction solutions. We specialise in roofing, pre-engineered steel buildings (PEB), prefabricated steel structures, sports infrastructure, and green building designs, providing exceptional services across Kerala, Malappuram, Kozhikode, Palakkad, and all of India.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're looking to build a home, a commercial space, or a world-class sports facility, we have the expertise and experience to bring your vision to life.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setActiveMediaIndex(0);
                }} 
                className="inline-flex items-center text-brand-primary font-bold hover:text-green-700 transition-colors uppercase tracking-widest text-sm focus:outline-none cursor-pointer"
                aria-label="Read more about TwinLine Group's steel structure construction expertise"
              >
                READ MORE
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* About Read More Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 md:bg-gray-100 md:hover:bg-gray-200 text-white md:text-gray-600 transition-colors shadow-md focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Left Column: Media Gallery Viewer */}
              <div className="w-full md:w-1/2 bg-gray-950 flex flex-col justify-between relative min-h-[300px] md:min-h-[450px]">
                {/* Active Media Frame */}
                <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {aboutGallery[activeMediaIndex].type === "video" ? (
                      <motion.video
                        key={activeMediaIndex}
                        src={aboutGallery[activeMediaIndex].src}
                        controls
                        autoPlay
                        muted
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <motion.img
                        key={activeMediaIndex}
                        src={aboutGallery[activeMediaIndex].src}
                        alt="TwinLine Group steel construction project gallery — pre-engineered buildings and sports infrastructure"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Media Thumbnails Strip */}
                <div className="p-4 bg-black/60 backdrop-blur-xs flex items-center gap-3 overflow-x-auto border-t border-white/10 z-30">
                  {aboutGallery.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMediaIndex(i)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 cursor-pointer ${
                        activeMediaIndex === i ? "border-brand-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      {item.type === "video" ? (
                        <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">
                          <Play size={18} className="text-brand-primary fill-brand-primary" />
                        </div>
                      ) : (
                        <img src={item.src} alt="" className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Detailed narrative copy */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="text-brand-primary text-xs font-bold uppercase tracking-widest">
                    Corporate Profile
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 leading-tight">
                      About TwinLine Group
                    </h3>
                    <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wide">
                      Innovation & Excellence in Steel Infrastructure
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-brand-primary rounded-full"></div>

                  {/* Narrative copy */}
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                    <p>
                      TwinLine Group is a leading provider of innovative construction solutions, specializing in pre-engineered steel buildings, structural space frames, prefabricated tubular steel structures, and premium roofing sheets. We are committed to delivering safe, durable, and highly efficient structures tailored to our clients' architectural requirements.
                    </p>
                    <p>
                      From state-of-the-art sports arenas and turf stadiums to institutional complexes and multi-storied commercial properties, our team handles design, engineering, fabrication, and precision onsite assembly. We utilize high-tensile steel and advanced thermal insulation sheets to build structures that withstand environmental stresses while offering maximum space flexibility.
                    </p>
                    <p>
                      Our core mission is to merge state-of-the-art structural engineering with creative architecture. By implementing modern project management techniques and high-quality materials, we consistently finish complex projects on time and within budget, treating every client like family.
                    </p>
                  </div>
                </div>

                {/* Footnote values */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-medium">
                  <span>Est. Quality Standards</span>
                  <span>ISO Compliant Fabrication</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
