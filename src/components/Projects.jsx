import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Grid, List, Search, ArrowUpRight, Compass } from "lucide-react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "list"

  const categories = ["All", "Healthcare & Education", "Residential", "Industrial & Steel", "Sports & Recreation"];

  const projectsData = [
    {
      id: 1,
      title: "PK DAS Institute of Medical Sciences",
      subtitle: "Hospital and Medical College",
      location: "Ottapalam, Palakkad",
      category: "Healthcare & Education",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80",
      description: "Heavy-duty structural steel roofing and support structures for the medical college campus.",
      specs: "Premium Truss Roofing"
    },
    {
      id: 2,
      title: "Kerala Medical College",
      subtitle: "Academic Campus & Clinical Block",
      location: "Mangode, Palakkad",
      category: "Healthcare & Education",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description: "Pre-engineered structural columns, roof trusses, and safety compliance fabrication.",
      specs: "Industrial Steel Truss"
    },
    {
      id: 3,
      title: "Alhind Flat",
      subtitle: "Residential Apartment Block",
      location: "Calicut",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      description: "Structural metal deck slab framing and architectural metal design installations.",
      specs: "Multi-Storey Decking"
    },
    {
      id: 4,
      title: "Mezzanine Floor Structure",
      subtitle: "Industrial Storage & Operations Deck",
      location: "Thalassery",
      category: "Industrial & Steel",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      description: "Heavy structural mezzanine floor installation for optimized storage and high-load capacity.",
      specs: "High-Load Mezzanine"
    },
    {
      id: 5,
      title: "Residential Property",
      subtitle: "Modern Luxury Villa Roofing",
      location: "Kondotty",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      description: "Custom aesthetic roofing design using durable structural frames and thermal insulated sheets.",
      specs: "Insulated Roofing"
    },
    {
      id: 6,
      title: "Residential Property",
      subtitle: "Contemporary Private Villa Structure",
      location: "Edathanatukara",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      description: "Design, fabrication, and installation of lightweight high-tensile roof frames.",
      specs: "Lightweight Framing"
    },
    {
      id: 7,
      title: "Badminton Court",
      subtitle: "Indoor Sports Complex & Steel Hall",
      location: "Coimbatore",
      category: "Sports & Recreation",
      image: "https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?auto=format&fit=crop&w=800&q=80",
      description: "Clear-span steel frame truss roof structure allowing completely unobstructed indoor sports space.",
      specs: "Clear-Span Trusses"
    },
    {
      id: 8,
      title: "Butterfly Structure",
      subtitle: "Aesthetic Architectural Truss & Canopy",
      location: "Ernakulam",
      category: "Industrial & Steel",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Complex geometrical butterfly design canopy showing advanced fabrication accuracy and craft.",
      specs: "Architectural Truss"
    },
    {
      id: 9,
      title: "Turf",
      subtitle: "Sports Arena Roof Framing",
      location: "Shornur",
      category: "Sports & Recreation",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=800&q=80",
      description: "Large scale structural framing for football and multi-sport turf facilities.",
      specs: "Large Frame Roofing"
    },
    {
      id: 10,
      title: "MES Medical College",
      subtitle: "Academic Block & Healthcare Facilities",
      location: "Perinthalmanna",
      category: "Healthcare & Education",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      description: "Major structural expansion projects, roofing panels, and support columns fabrication.",
      specs: "Institutional Expansion"
    }
  ];

  // Filtering & Search logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.subtitle && project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <motion.h4 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-primary font-bold tracking-widest uppercase mb-3 text-xs md:text-sm"
          >
            Engineering Portfolio
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-5 tracking-tight leading-tight"
          >
            Our Landmark Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-brand-primary mx-auto rounded-full"
          ></motion.div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Discover how Twinline delivers state-of-the-art structural steel fabrication, high-durability roofing, and precision engineering across institutional, sports, and residential sectors.
          </p>
        </div>

        {/* Toolbar: Category Filters, Search & View Toggle */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-thin scrollbar-thumb-gray-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-105"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Layout Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Search size={16} />
              </span>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm text-gray-800 placeholder-gray-400 transition-all"
              />
            </div>

            {/* Layout Toggle Buttons */}
            <div className="flex items-center bg-gray-50 p-1.5 rounded-xl border border-gray-100 self-end sm:self-auto">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                title="Grid View"
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-white text-brand-primary shadow-sm"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                title="List Register View"
              >
                <List size={18} />
              </button>
            </div>
            
          </div>
        </div>

        {/* Dynamic Project Register / Content Display */}
        <div className="min-h-[300px]">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Compass size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">No Projects Found</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                We couldn't find any projects matching "{searchQuery}" under "{activeCategory}". Try adjusting your filters.
              </p>
            </motion.div>
          ) : (
            <AnimatePresence mode="popLayout">
              {viewMode === "grid" ? (
                /* Grid view cards */
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Card Image Frame */}
                      <div className="relative h-56 md:h-60 overflow-hidden bg-gray-100">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <span className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs font-semibold mb-2">
                          <MapPin size={13} className="text-brand-primary" />
                          <span>{project.location}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors mb-1 line-clamp-1">
                          {project.title}
                        </h3>
                        
                        <p className="text-xs font-semibold text-gray-500 mb-3 tracking-wide uppercase">
                          {project.subtitle}
                        </p>
                        
                        <p className="text-gray-500 text-xs md:text-sm line-clamp-3 mb-6 flex-1">
                          {project.description}
                        </p>

                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                          <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2.5 py-1 rounded-md">
                            {project.specs}
                          </span>
                          <span className="text-brand-primary font-bold text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                            Learn More <ArrowUpRight size={14} />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* List View - Sleek engineering register table */
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm overflow-x-auto"
                >
                  <table className="w-full min-w-[700px] border-collapse text-left">
                    <thead>
                      <tr className="bg-gray-50/75 border-b border-gray-100">
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider w-16">Sl. No.</th>
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider">Project Title & Scope</th>
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider">Category</th>
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider">Location</th>
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider">Technical Specs</th>
                        <th className="py-4 px-6 text-xs font-bold uppercase text-gray-500 tracking-wider text-right w-24">Link</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredProjects.map((project, idx) => (
                        <motion.tr
                          key={project.id}
                          layout
                          className="hover:bg-brand-primary/5 transition-colors group cursor-pointer"
                        >
                          <td className="py-5 px-6 text-sm font-semibold text-gray-400 group-hover:text-brand-primary transition-colors">
                            {String(idx + 1).padStart(2, "0")}
                          </td>
                          <td className="py-5 px-6">
                            <div>
                              <div className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                                {project.title}
                              </div>
                              <div className="text-xs text-gray-500 font-medium">
                                {project.subtitle}
                              </div>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <span className="inline-block bg-gray-50 group-hover:bg-white text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-100 transition-colors">
                              {project.category}
                            </span>
                          </td>
                          <td className="py-5 px-6">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <MapPin size={13} className="text-gray-400 group-hover:text-brand-primary transition-colors" />
                              <span>{project.location}</span>
                            </div>
                          </td>
                          <td className="py-5 px-6">
                            <span className="text-xs font-semibold text-gray-500 bg-gray-100/60 group-hover:bg-white px-2 py-0.5 rounded border border-gray-200/50">
                              {project.specs}
                            </span>
                          </td>
                          <td className="py-5 px-6 text-right">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-brand-primary group-hover:text-white text-gray-400 transition-all transform group-hover:translate-x-1">
                              <ArrowUpRight size={14} />
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {/* Counter Summary */}
        <div className="mt-8 flex items-center justify-between text-xs text-gray-400 font-medium px-2">
          <span>
            Showing <strong className="text-gray-700">{filteredProjects.length}</strong> of <strong className="text-gray-700">{projectsData.length}</strong> landmark projects
          </span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="text-brand-primary hover:underline font-bold"
            >
              Clear search query
            </button>
          )}
        </div>

        {/* Call to Action: Link to Brochure/Main Site */}
        <div className="mt-16 text-center">
          <motion.a 
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(32, 191, 85, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            href="https://www.twinlinegroup.com/projects" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/20"
          >
            VIEW ALL PROJECTS ON WEBSITE
            <ArrowUpRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
