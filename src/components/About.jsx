import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import img1 from '../assets/WhatsApp Image 2026-04-29 at 10.32.19 PM (1).jpeg';
import img2 from '../assets/WhatsApp Image 2026-04-29 at 10.32.19 PM (2).jpeg';
import img3 from '../assets/WhatsApp Image 2026-04-29 at 10.32.19 PM.jpeg';
import img4 from '../assets/WhatsApp Image 2026-04-29 at 10.32.20 PM (1).jpeg';
import img5 from '../assets/WhatsApp Image 2026-04-29 at 10.32.20 PM.jpeg';
import img6 from '../assets/WhatsApp Image 2026-04-29 at 10.32.21 PM (1).jpeg';
import img7 from '../assets/WhatsApp Image 2026-04-29 at 10.32.21 PM.jpeg';

const aboutImages = [img1, img2, img3, img4, img5, img6, img7];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-11/12 sm:w-4/5 lg:w-10/12 xl:w-4/5 mx-auto"
          >
            {/* Desktop Slider */}
            <div 
              className="rounded-lg overflow-hidden shadow-2xl relative z-10 hidden sm:block bg-gray-200"
              style={{ aspectRatio: '4/5' }}
            >
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  src={aboutImages[currentImageIndex]}
                  alt={`Twinline Construction Project ${currentImageIndex + 1}`} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-primary/10 rounded-full z-0 hidden sm:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-brand-primary/20 rounded z-0 hidden sm:block"></div>
            
            {/* Mobile Slider */}
            <div 
              className="relative w-full rounded-lg shadow-xl overflow-hidden sm:hidden bg-gray-200 z-10"
              style={{ aspectRatio: '4/5' }}
            >
              <AnimatePresence>
                <motion.img 
                  key={currentImageIndex}
                  src={aboutImages[currentImageIndex]}
                  alt={`Twinline Construction Project ${currentImageIndex + 1}`} 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </AnimatePresence>
            </div>
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
              We provide professional solutions to deliver safe & efficient projects
            </h2>
            <div className="w-20 h-1 bg-brand-primary rounded"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to TwinLine Group, your trusted partner in delivering cutting-edge construction solutions. We specialise in roofing, pre-fabricated steel structures, sports infrastructure, and green building designs, providing exceptional services to meet the diverse needs of our clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you're looking to build a home, a commercial space, or a world-class sports facility, we have the expertise and experience to bring your vision to life.
            </p>
            <div className="pt-4">
              <a href="https://www.twinlinegroup.com/about-us" target="_blank" rel="noreferrer" className="inline-flex items-center text-brand-primary font-bold hover:text-green-700 transition-colors uppercase tracking-widest text-sm">
                READ MORE
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
