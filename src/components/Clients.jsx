import { motion } from "framer-motion";

const Clients = () => {
  const clients = [
    "https://static.wixstatic.com/media/c837a6_eee981d6e5314522abf72095136c74be~mv2.png/v1/fill/w_218,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_eee981d6e5314522abf72095136c74be~mv2.png",
    "https://static.wixstatic.com/media/c837a6_0b38254265324ec795dbde5e40f36a40~mv2.png/v1/fill/w_230,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pjx_log.png",
    "https://static.wixstatic.com/media/c837a6_d487752f58274f02a3b4a3846ef8946d~mv2.png/v1/fill/w_230,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/motorks_log.png",
    "https://static.wixstatic.com/media/c837a6_318fc5d9088a454d948bbe1bb5b6f8b4~mv2.png/v1/fill/w_218,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/natura_logo.png",
    "https://static.wixstatic.com/media/c837a6_227980bf0d1347f485eb5c00f9145652~mv2.png/v1/fill/w_230,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image_logo.png",
    "https://static.wixstatic.com/media/84770f_85c01069f145488cb0691d22499ae74f~mv2.png/v1/fill/w_230,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/drivilux.png"
  ];

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
