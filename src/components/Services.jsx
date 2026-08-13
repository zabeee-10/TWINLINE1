import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { Link } from "react-router-dom";
import spaceFramesImage from "../assets/space frames.jpeg";

import pebImg1 from "../assets/peb/WhatsApp Image 2026-06-03 at 2.25.06 AM.jpeg";
import pebVid1 from "../assets/peb/WhatsApp Video 2026-06-03 at 2.23.34 AM.mp4";
import pebVid2 from "../assets/peb/WhatsApp Video 2026-06-03 at 2.23.36 AM.mp4";

import sfImg1 from "../assets/space frame/WhatsApp Image 2026-06-03 at 2.25.33 AM.jpeg";
import sfImg2 from "../assets/space frame/WhatsApp Image 2026-06-03 at 2.26.35 AM.jpeg";
import sfImg3 from "../assets/space frame/WhatsApp Image 2026-06-03 at 2.27.38 AM.jpeg";
import sfVid1 from "../assets/space frame/WhatsApp Video 2026-06-03 at 2.27.37 AM.mp4";

import tsImg1 from "../assets/Prefabricated Tubular Steel Structures/WhatsApp Image 2026-06-03 at 2.27.48 AM.jpeg";
import tsImg2 from "../assets/Prefabricated Tubular Steel Structures/WhatsApp Image 2026-06-03 at 2.28.16 AM (1).jpeg";
import tsImg3 from "../assets/Prefabricated Tubular Steel Structures/WhatsApp Image 2026-06-03 at 2.28.16 AM.jpeg";
import tsVid1 from "../assets/Prefabricated Tubular Steel Structures/WhatsApp Video 2026-06-03 at 2.28.16 AM.mp4";

import multiStoriedImg from "../assets/WhatsApp Image 2026-04-29 at 10.32.19 PM.jpeg";
import tubularSteelImage from "../assets/pre.jpeg";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const handleOpenService = (service) => {
    setSelectedService(service);
    setActiveMediaIndex(0);
  };

  const services = [
    {
      num: "01",
      title: "Pre-Engineered Buildings (PEB)",
      description: "Steel structures built to save time and money, with fast assembly and flexible designs. Great for warehouses, factories, offices, or shops.",
      image: pebImg1,
      gallery: [
        { type: "image", src: pebImg1 },
        { type: "video", src: pebVid1 },
        { type: "video", src: pebVid2 }
      ],
      detailedDescription: "Pre-Engineered Buildings (PEB) are steel structures engineered at a factory and assembled on site. Designed to be structurally efficient and lightweight, PEBs offer quick turnaround, high seismic resistance, low maintenance costs, and completely flexible expansion capabilities. Twinline specializes in custom PEB structures for commercial warehouses, manufacturing industrial sheds, and multi-span retail buildings.",
      link: "/peb-construction"
    },
    {
      num: "02",
      title: "Space Frames",
      description: "Strong, lightweight truss structures for wide spaces with fewer supports. Perfect for malls, stadiums, and convention centers—durable and stylish.",
      image: sfImg1,
      gallery: [
        { type: "image", src: spaceFramesImage },
        { type: "image", src: sfImg1 },
        { type: "image", src: sfImg2 },
        { type: "image", src: sfImg3 },
        { type: "video", src: sfVid1 }
      ],
      detailedDescription: "A space frame or space structure is a robust, lightweight, and rigid truss structure constructed from interlocking struts in a geometric pattern. These frames are engineered to span large areas with minimal interior support columns, making them perfect for grand entrances, convention centers, stadiums, airport terminals, and malls. Twinline designs and fabricates high-precision space frames that are highly wind-resistant and seismically compliant.",
      link: "/structural-steel"
    },
    {
      num: "03",
      title: "Prefabricated Tubular Steel Structures",
      description: "Strong, cost-effective, and quick to build. Low maintenance, flexible designs, and earthquake-resistant.",
      image: tubularSteelImage,
      gallery: [
        { type: "image", src: tubularSteelImage },
        { type: "image", src: tsImg1 },
        { type: "image", src: tsImg2 },
        { type: "image", src: tsImg3 },
        { type: "video", src: tsVid1 }
      ],
      detailedDescription: "Prefabricated tubular steel structures provide high torsional resistance, smooth exterior finishes, and exceptional load-bearing strength. Utilizing hollow circular or rectangular steel profiles, these tubular frames are pre-fabricated under strict quality standards and bolted together on site. They are earthquake-resistant, quick to erect, require minimal maintenance, and are highly customizable for architecturally expressive designs.",
      link: "/steel-building-construction"
    },
    {
      num: "04",
      title: "Multi-storied Steel Buildings",
      description: "Faster to build, lighter on foundations, and highly flexible in design. Ideal for offices, schools, and hospitals.",
      image: multiStoriedImg,
      gallery: [
        { type: "image", src: multiStoriedImg }
      ],
      detailedDescription: "Multi-storied steel buildings are the pinnacle of modern vertical development. Offering rapid speed of construction, lighter load distribution on foundations, and highly flexible architectural layout possibilities, steel-framed high-rises are the premier choice for modern commercial office spaces, educational campuses, and multi-specialty healthcare facilities. Twinline executes precision engineering and safety compliance fabrication for multi-tiered structures.",
      link: "/structural-steel"
    }
  ];

  const mediaItems = useMemo(() => {
    if (!selectedService) return [];
    if (!selectedService.gallery) {
      return [{ type: "image", src: selectedService.image }];
    }
    return selectedService.gallery.map(item => {
      if (typeof item === "string") {
        return { type: "image", src: item };
      }
      return item;
    });
  }, [selectedService]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0b1d26] relative overflow-hidden font-sans">
      
      {/* Decorative background gradients to give depth (optional) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="w-12 h-[2px] bg-brand-primary"></div>
            <h4 className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm">
              Our Services
            </h4>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white mb-6 leading-tight capitalize"
          >
            Steel Structure Solutions
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            We provide cutting-edge pre-engineered building (PEB), space frame, tubular steel, and multi-storied steel structure solutions along with high-performance sports infrastructure.
          </motion.p>
        </div>

        {/* Staggered Layout */}
        <div className="flex flex-col gap-32 md:gap-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 md:gap-24`}
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center">
                  
                  {/* Watermark Number */}
                  <span className="absolute -left-8 md:-left-16 -top-12 md:-top-20 text-[10rem] md:text-[14rem] font-bold text-white/5 select-none z-[-1] leading-none tracking-tighter">
                    {service.num}
                  </span>

                  {/* Subtitle / Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-[2px] bg-brand-primary"></div>
                    <span className="text-brand-primary font-bold text-sm tracking-[0.2em] uppercase">
                      Core Solution
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.2] mb-6">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                  
                  {/* Link */}
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-3 text-brand-primary font-bold text-sm hover:text-white transition-colors duration-300 group"
                    aria-label={`Read more about ${service.title}`}
                  >
                    <span>read more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

                {/* Image */}
                <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-full max-w-[480px] aspect-[4/5] overflow-hidden shadow-2xl relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal overlay (Keeping original modal functionality) */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-[#0b1d26] rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] z-10 border border-white/10"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              <div className="w-full md:w-1/2 bg-black flex flex-col justify-between relative min-h-[300px] md:min-h-[400px]">
                <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    {mediaItems[activeMediaIndex]?.type === "video" ? (
                      <motion.video
                        key={activeMediaIndex}
                        src={mediaItems[activeMediaIndex].src}
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
                        src={mediaItems[activeMediaIndex]?.src}
                        alt={selectedService.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {mediaItems.length > 1 && (
                  <div className="p-4 bg-black/80 flex items-center gap-3 overflow-x-auto border-t border-white/10 z-30">
                    {mediaItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMediaIndex(i)}
                        className={`relative w-16 h-12 overflow-hidden flex-shrink-0 transition-all border ${
                          activeMediaIndex === i ? "border-brand-primary" : "border-transparent opacity-50 hover:opacity-100"
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
                )}
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-[1px] bg-brand-primary"></div>
                    <span className="text-brand-primary text-xs tracking-[0.2em] uppercase">
                      Core Solution
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-normal text-white leading-tight">
                    {selectedService.title}
                  </h3>

                  <div className="space-y-4 pt-6">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                      {selectedService.detailedDescription || selectedService.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/30 tracking-widest uppercase">
                  <span>Twinline Group</span>
                  <span>Steel Structures</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
