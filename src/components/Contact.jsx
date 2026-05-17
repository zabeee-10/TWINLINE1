import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Get in Touch</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-8 lg:p-12"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-primary hover:bg-green-600 text-white font-bold py-4 px-8 rounded transition-colors shadow-lg uppercase tracking-wide">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-8 lg:pl-10"
          >
            <div>
              <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to build the future with us? Contact our team for comprehensive solutions for your residential, commercial, or sports infrastructure projects.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Our Location</h4>
                  <p className="text-gray-600">Twinline Group Headquarters<br/>Corporate Office</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Call Us</h4>
                  <p className="text-gray-600">+91 0000 000 000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Email Us</h4>
                  <p className="text-gray-600">info@twinlinegroup.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
