import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { label: "Current Projects", value: "48" },
    { label: "Homes Renovated", value: "282" },
    { label: "Valued Partners", value: "35" }
  ];

  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="py-6 md:py-0"
            >
              <div className="text-5xl md:text-7xl font-bold font-heading mb-4">{stat.value}</div>
              <div className="text-xl font-medium tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;
