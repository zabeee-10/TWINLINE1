import { motion } from "framer-motion";

import logo1 from "../assets/Logos of the projects don/IMG_9853.JPG.jpeg";
import logo2 from "../assets/Logos of the projects don/IMG_9878.JPG.jpeg";
import logo3 from "../assets/Logos of the projects don/IMG_9879.PNG";
import logo4 from "../assets/Logos of the projects don/IMG_9883.PNG";

const Clients = () => {
  const clients = [logo1, logo2, logo3, logo4];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h4 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Our Happy Patrons</h4>
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-12">
          We Treat Every Client Like Family
        </h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70"
        >
          {clients.map((src, index) => (
            <img 
              key={index}
              src={src} 
              alt={`Client ${index + 1}`} 
              className="h-16 md:h-20 object-contain hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Clients;
