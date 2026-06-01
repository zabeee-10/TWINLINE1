import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      num: "01",
      title: "Pre-Engineered Buildings (PEB)",
      description: "Steel structures built to save time and money, with fast assembly and flexible designs. Great for warehouses, factories, offices, or shops.",
      image: "https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg"
    },
    {
      num: "02",
      title: "Space Frames",
      description: "Strong, lightweight truss structures for wide spaces with fewer supports. Perfect for malls, stadiums, and convention centers—durable and stylish.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
    },
    {
      num: "03",
      title: "Prefabricated Tubular Steel Structures",
      description: "Strong, cost-effective, and quick to build. Low maintenance, flexible designs, and earthquake-resistant.",
      image: "https://static.wixstatic.com/media/6eacb8_85f596e04b4d4c8398a2cbdcfaa8b457~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_85f596e04b4d4c8398a2cbdcfaa8b457~mv2.jpg"
    },
    {
      num: "04",
      title: "Multi-storied Steel Buildings",
      description: "Faster to build, lighter on foundations, and highly flexible in design. Ideal for offices, schools, and hospitals.",
      image: "https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg"
    }
  ];

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
                  <a 
                    href="https://www.twinlinegroup.com/services" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-brand-primary font-bold text-xs hover:text-emerald-600 transition-colors uppercase tracking-wider"
                  >
                    LEARN MORE
                  </a>
                  <span className="w-1.5 h-1.5 bg-brand-primary rounded-full group-hover:scale-150 transition-transform"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* All Services Bottom CTA */}
        <div className="mt-16 text-center">
            <a 
              href="https://www.twinlinegroup.com/services" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-brand-primary text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md shadow-gray-900/10 hover:shadow-brand-primary/20 hover:-translate-y-0.5"
            >
                ALL SERVICES ON WEBSITE
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
