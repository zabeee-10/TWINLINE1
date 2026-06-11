import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, CheckCircle2, AlertCircle, Navigation } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Read the Web3Forms key from environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey.trim() === "" || accessKey === "YOUR_ACCESS_KEY_HERE") {
      // Fallback: Programmatic mailto link
      const mailtoUrl = `mailto:sales@twinlinegroup.com?subject=${encodeURIComponent(
        formData.subject || "Enquiry from TwinLine Website"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Enquiry from TwinLine Website",
          message: formData.message
        })
      });

      const data = await response.json();
      if (response.status === 200 || data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h4 className="text-brand-primary font-semibold tracking-wider uppercase mb-2">Get in Touch</h4>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Have a Steel Structure Project in Mind?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base mt-4">
            Contact TwinLine Group for expert consultation on pre-engineered buildings, PEB structures, sports infrastructure, roofing solutions, and all steel construction needs in Kerala and across India.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto rounded mt-4"></div>
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
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form for project enquiry">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" 
                  placeholder="How can we help?" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {status === "success" && (
                <div className="flex items-center gap-3 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Thank you! Your message has been sent successfully. We will get back to you soon.</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-brand-primary hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded transition-colors shadow-lg uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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
                Ready to build the future with us? Contact our team for comprehensive pre-engineered steel building, PEB, sports infrastructure, and roofing solutions for your residential, commercial, or industrial projects across Kerala.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Head Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    5/336, Ground Floor, ABS Complex,<br/>
                    Edapatta (PO), Eapilkad, Malappuram,<br/>
                    Kerala - 679326
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Twinline+Group+ABS+Complex+Edapatta+Malappuram" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-xs text-brand-primary hover:text-green-600 font-semibold mt-2 transition-colors group cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 transform -rotate-45" />
                    Get Directions
                    <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Branch Office</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    2328, 3rd Floor, HiLITE Business Park,<br/>
                    Phase 2, Poovangal, Kozhikode,<br/>
                    Pantheeramkavu, Kerala - 673014
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=TwinLine+Group+HiLITE+Business+Park+Kozhikode" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-xs text-brand-primary hover:text-green-600 font-semibold mt-2 transition-colors group cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 transform -rotate-45" />
                    Get Directions
                    <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Call Us</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="tel:+917736067063" className="hover:text-brand-primary transition-colors">+91 77360 67063</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Email Us</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    <a href="mailto:sales@twinlinegroup.com" className="hover:text-brand-primary transition-colors">sales@twinlinegroup.com</a>
                    <br/>
                    <a href="mailto:tech@twinlinegroup.com" className="hover:text-brand-primary transition-colors">tech@twinlinegroup.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-brand-primary/10 p-3 rounded-full text-brand-primary line-height-none">
                  <span className="w-6 h-6 flex items-center justify-center font-bold text-sm">@</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900 leading-none mb-2">Connect With Us</h4>
                  <p className="text-gray-500 text-xs mb-3">Find us on social media networks</p>
                  <div className="flex space-x-3">
                    <a 
                      href="https://instagram.com/twinlinegroup" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2.5 bg-gray-100 hover:bg-brand-primary text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    </a>
                    <a 
                      href="https://facebook.com/twinlinegroup" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2.5 bg-gray-100 hover:bg-brand-primary text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a 
                      href="https://linkedin.com/company/twinlinegroup" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-2.5 bg-gray-100 hover:bg-brand-primary text-gray-600 hover:text-white rounded-full transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>
                  </div>
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
