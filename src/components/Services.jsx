import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
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

import multiStoriedImg from "../assets/canopy/fff.jpeg";
import tubularSteelImage from "../assets/Prefabricated Tubular Steel Structuress.jpeg";

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
      image: "https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg",
      gallery: [
        { type: "image", src: pebImg1 },
        { type: "video", src: pebVid1 },
        { type: "video", src: pebVid2 }
      ],
      detailedDescription: "Pre-Engineered Buildings (PEB) are steel structures engineered at a factory and assembled on site. Designed to be structurally efficient and lightweight, PEBs offer quick turnaround, high seismic resistance, low maintenance costs, and completely flexible expansion capabilities. Twinline specializes in custom PEB structures for commercial warehouses, manufacturing industrial sheds, and multi-span retail buildings.",
    },
    {
      num: "02",
      title: "Space Frames",
      description: "Strong, lightweight truss structures for wide spaces with fewer supports. Perfect for malls, stadiums, and convention centers—durable and stylish.",
      image: spaceFramesImage,
      gallery: [
        { type: "image", src: spaceFramesImage },
        { type: "image", src: sfImg1 },
        { type: "image", src: sfImg2 },
        { type: "image", src: sfImg3 },
        { type: "video", src: sfVid1 }
      ],
      detailedDescription: "A space frame or space structure is a robust, lightweight, and rigid truss structure constructed from interlocking struts in a geometric pattern. These frames are engineered to span large areas with minimal interior support columns, making them perfect for grand entrances, convention centers, stadiums, airport terminals, and malls. Twinline designs and fabricates high-precision space frames that are highly wind-resistant and seismically compliant.",
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
    },
    {
      num: "04",
      title: "Multi-storied Steel Buildings",
      description: "Faster to build, lighter on foundations, and highly flexible in design. Ideal for offices, schools, and hospitals.",
      image: "https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg",
      gallery: [
        { type: "image", src: "https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg" },
        { type: "image", src: multiStoriedImg }
      ],
      detailedDescription: "Multi-storied steel buildings are the pinnacle of modern vertical development. Offering rapid speed of construction, lighter load distribution on foundations, and highly flexible architectural layout possibilities, steel-framed high-rises are the premier choice for modern commercial office spaces, educational campuses, and multi-specialty healthcare facilities. Twinline executes precision engineering and safety compliance fabrication for multi-tiered structures.",
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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative side accent lines */}
      <div className="absolute top-1/3 left-0 w-2 h-32 bg-brand-primary/10 rounded-r-lg"></div>
      <div className="absolute bottom-1/3 right-0 w-2 h-32 bg-brand-primary/10 rounded-l-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading aligned to Corporate Brochure */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-xs md:text-sm"
          >
            Our Services
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-5 tracking-tight leading-tight uppercase"
          >
            Steel Structure Solutions
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-brand-primary mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm md:text-base leading-relaxed"
          >
            We provide cutting-edge steel structure solutions and high-performance sports infrastructure, ensuring cost-efficiency, durability, and rapid execution for diverse industrial and recreational needs.
          </motion.p>
        </div>

        {/* 4-Column Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative"
            >
              {/* Image Frame */}
              <div className="h-48 overflow-hidden relative bg-gray-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                
                {/* Floating Numeric Badge */}
                <span className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-xs text-brand-primary text-xs font-bold px-2.5 py-1 rounded-lg border border-gray-100">
                  {service.num}
                </span>

                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold font-heading text-gray-900 group-hover:text-brand-primary transition-colors duration-300 min-h-12 flex items-center mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                  <button 
                    onClick={() => handleOpenService(service)}
                    className="text-brand-primary font-bold text-xs hover:text-emerald-600 transition-colors uppercase tracking-wider cursor-pointer focus:outline-none text-left"
                  >
                    LEARN MORE
                  </button>
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-150 transition-transform"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>

      {/* Detail Modal overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 md:bg-gray-100 md:hover:bg-gray-200 text-white md:text-gray-600 transition-colors shadow-md focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Left Column: Image Viewer */}
              <div className="w-full md:w-1/2 bg-gray-950 flex flex-col justify-between relative min-h-[300px] md:min-h-[400px]">
                {/* Main Active Image/Video */}
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
                  {/* Service Number Tag */}
                  <span className="absolute top-4 left-4 bg-brand-primary/95 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md z-30">
                    Service {selectedService.num}
                  </span>
                </div>

                {/* Gallery Thumbnail Strip */}
                {mediaItems.length > 1 && (
                  <div className="p-4 bg-black/60 backdrop-blur-xs flex items-center gap-3 overflow-x-auto border-t border-white/10 z-30">
                    {mediaItems.map((item, i) => (
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
                )}
              </div>

              {/* Right Column: Service details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-full">
                <div className="space-y-6">
                  {/* Subtitle / badge */}
                  <div className="text-brand-primary text-xs font-bold uppercase tracking-wider">
                    Core Solutions
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-brand-primary rounded-full"></div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Service Overview</h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {selectedService.detailedDescription || selectedService.description}
                    </p>
                  </div>
                </div>

                {/* Footer notes */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 font-medium">
                  <span>Advanced Structural Engineering</span>
                  <span>Efficient Assembly</span>
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
