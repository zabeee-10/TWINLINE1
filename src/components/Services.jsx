import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "PRE-ENGINEERED BUILDINGS",
      description: "Our pre-engineered buildings (PEBs) offer a faster, cost-effective alternative to traditional construction. Designed and fabricated off-site, these buildings are tailored to meet your specific requirements and assembled quickly.",
      image: "https://static.wixstatic.com/media/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7e7c84dab4304e72a7aa51b002e5f5be~mv2.jpg"
    },
    {
      title: "PRE-FABRICATED TUBULAR STEEL STRUCTURE",
      description: "Our pre-fabricated tubular steel structures provide an efficient and sustainable building solution for various applications. These structures are lightweight, easy to assemble, and offer high strength-to-weight ratios.",
      image: "https://static.wixstatic.com/media/6eacb8_85f596e04b4d4c8398a2cbdcfaa8b457~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_85f596e04b4d4c8398a2cbdcfaa8b457~mv2.jpg"
    },
    {
      title: "MULTI-STORIED STEEL BUILDINGS",
      description: "We specialise in the design and construction of multi-storied steel buildings. Using high-quality materials and modern engineering techniques, we create structures that are both aesthetically appealing and withstand the test of time.",
      image: "https://static.wixstatic.com/media/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg/v1/fit/w_480,h_479,q_90,enc_avif,quality_auto/6eacb8_7ebc8bbdde114ccd83b13a9d26a54c1d~mv2.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Our Services</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            We Offer a Range of Services Tailored to Your Needs
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-300"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold font-heading text-gray-900 mb-4 h-14 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-4">
                  {service.description}
                </p>
                <a href="https://www.twinlinegroup.com/services" target="_blank" rel="noreferrer" className="text-brand-primary font-bold hover:text-green-700 transition-colors uppercase text-sm border-b-2 border-transparent hover:border-brand-primary pb-1 inline-block">
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
            <a href="https://www.twinlinegroup.com/services" target="_blank" rel="noreferrer" className="inline-block bg-gray-900 hover:bg-brand-primary text-white font-bold py-3 px-8 rounded transition-colors shadow-lg">
                ALL SERVICES
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
