import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    "https://static.wixstatic.com/media/a6d112_71ac5b56f4714f8ea972ecc5edce7f69~mv2.jpg/v1/fit/w_720,h_624,q_90,enc_avif,quality_auto/a6d112_71ac5b56f4714f8ea972ecc5edce7f69~mv2.jpg",
    "https://static.wixstatic.com/media/a6d112_08ea916bc55f4c9784db2cf250f197d1~mv2.jpg/v1/fit/w_680,h_510,q_90,enc_avif,quality_auto/a6d112_08ea916bc55f4c9784db2cf250f197d1~mv2.jpg",
    "https://static.wixstatic.com/media/a6d112_26a816860d394cbb80b32bf4b9e7edc0~mv2.jpg/v1/fit/w_556,h_510,q_90,enc_avif,quality_auto/a6d112_26a816860d394cbb80b32bf4b9e7edc0~mv2.jpg",
    "https://static.wixstatic.com/media/a6d112_3442d87ff5b84d9ca053fb1142cb2f6f~mv2.jpg/v1/fit/w_720,h_624,q_90,enc_avif,quality_auto/a6d112_3442d87ff5b84d9ca053fb1142cb2f6f~mv2.jpg",
    "https://static.wixstatic.com/media/a6d112_71ac5b56f4714f8ea972ecc5edce7f69~mv2.jpg/v1/fit/w_720,h_624,q_90,enc_avif,quality_auto/a6d112_71ac5b56f4714f8ea972ecc5edce7f69~mv2.jpg",
    "https://static.wixstatic.com/media/a6d112_08ea916bc55f4c9784db2cf250f197d1~mv2.jpg/v1/fit/w_680,h_510,q_90,enc_avif,quality_auto/a6d112_08ea916bc55f4c9784db2cf250f197d1~mv2.jpg"
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Featured Remodels</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Building Roofs that Protect, Last, and Inspire
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group relative h-64 md:h-80"
            >
              <img 
                src={src} 
                alt={`Project ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg tracking-wider border-2 border-white px-6 py-2 rounded uppercase cursor-pointer">View Project</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://www.twinlinegroup.com/projects" target="_blank" rel="noreferrer" className="inline-block bg-brand-primary hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition-colors shadow-lg">
                ALL PROJECTS
            </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
