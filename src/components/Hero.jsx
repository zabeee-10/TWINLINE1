import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Import local assets for Hero cards
import pebBuildingImg from "../assets/peb building .jpeg";
import sportsInfraImg from "../assets/sports infra.jpeg";
import steelStructuresImg from "../assets/steel structures.jpeg";
import turfImg from "../assets/turf.jpeg";

const Hero = () => {
  const [activeHover, setActiveHover] = useState(null);
  
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Derived transforms for parallax depth layers
  const backgroundX = useTransform(mouseX, [-1, 1], ["-1%", "1%"]);
  const backgroundY = useTransform(mouseY, [-1, 1], ["-1%", "1%"]);
  
  const midLayerX = useTransform(mouseX, [-1, 1], ["-3%", "3%"]);
  const midLayerY = useTransform(mouseY, [-1, 1], ["-3%", "3%"]);

  const foregroundX = useTransform(mouseX, [-1, 1], ["-6%", "6%"]);
  const foregroundY = useTransform(mouseY, [-1, 1], ["-6%", "6%"]);

  const cards = [
    {
      title: "Steel Structures",
      subtitle: "Industrial Framing",
      image: steelStructuresImg,
      position: "top-[10%] left-[5%]",
      width: "w-[280px]",
      depth: 1, // Determines speeds
      drift: [0, -30, 0]
    },
    {
      title: "PEB Buildings",
      subtitle: "Engineered Structures",
      image: pebBuildingImg,
      position: "top-[30%] right-[5%]",
      width: "w-[320px]",
      depth: 1.5,
      drift: [0, 40, 0]
    },
    {
      title: "Sports Infra",
      subtitle: "Stadiums & Facilities",
      image: sportsInfraImg,
      position: "bottom-[15%] left-[15%]",
      width: "w-[300px]",
      depth: 0.8,
      drift: [0, -20, 0]
    },
    {
      title: "Turf Projects",
      subtitle: "FIFA Standard Surfaces",
      image: turfImg,
      position: "bottom-[5%] right-[20%]",
      width: "w-[260px]",
      depth: 1.2,
      drift: [0, 25, 0]
    }
  ];

  return (
    <section id="home" className="relative h-screen min-h-[900px] overflow-hidden bg-black flex items-center">
      {/* 1. LAYER: Deep Background Image with Slow Zoom & Mouse Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center w-[110%] h-[110%] -left-[5%] -top-[5%]"
        style={{ 
          backgroundImage: "url('https://static.wixstatic.com/media/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/6eacb8_cfffed62466840139c23e4d1ae0b2ffbf000.jpg')",
          x: backgroundX,
          y: backgroundY
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/80 to-[#030914]/60 backdrop-blur-[1px]"></div>
      </motion.div>

      {/* 2. LAYER: Animated Grain/Noise */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
      ></div>

      {/* 3. LAYER: Animated Light Sweep */}
      <motion.div 
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute inset-0 z-0 w-1/4 h-full bg-gradient-to-r from-transparent via-blue-400/5 to-transparent skew-x-[-25deg] pointer-events-none"
      />

      {/* Global Dim overlay when a card is hovered */}
      <div 
        className={`absolute inset-0 z-10 bg-black transition-opacity duration-700 pointer-events-none ${activeHover !== null ? 'opacity-60' : 'opacity-0'}`}
      ></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-24 lg:pt-0">
          
          {/* LEFT SIDE: Cinematic Typography & CTAs */}
          <motion.div 
            style={{ x: foregroundX, y: foregroundY }}
            className="space-y-8 text-center lg:text-left relative z-30"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading uppercase tracking-tight leading-[1.05]"
            >
              Building the Future with <br className="hidden md:block" />
              <span className="text-brand-primary relative inline-block">
                INNOVATION
                {/* Glow behind text */}
                <span className="absolute inset-0 blur-xl bg-brand-primary/40 -z-10 animate-pulse"></span>
              </span> 
              <br className="hidden md:block" /> and Excellence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light border-l-2 border-brand-primary/50 pl-4"
            >
              Comprehensive solutions for residential, commercial, and sports infrastructure projects engineered for the modern era.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 pt-4"
            >
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="group relative bg-[#171200] border border-brand-primary text-brand-primary font-bold py-4 px-10 rounded-sm hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-widest overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 group-hover:text-[#171200] transition-colors duration-300">Get a Quote</span>
                <span className="absolute inset-0 bg-brand-primary shadow-[0_0_20px_rgba(32,191,85,0.8)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0"></span>
              </Link>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                offset={-70}
                className="group bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold py-4 px-10 rounded-sm hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-300 text-center uppercase tracking-widest cursor-pointer"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Floating Vertical Cards (Desktop/Tablet) */}
          <motion.div 
            style={{ x: midLayerX, y: midLayerY }}
            className="hidden lg:block relative h-[700px] w-full mt-10 lg:mt-0 z-20"
          >
            {cards.map((card, index) => {
              const isHovered = activeHover === index;
              const isOtherHovered = activeHover !== null && activeHover !== index;

              return (
                <motion.div
                  key={index}
                  animate={{ 
                    y: isHovered ? 0 : card.drift,
                    x: isHovered ? 0 : [0, 15 * card.depth, 0]
                  }}
                  transition={{ 
                    duration: 15 / card.depth, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 1.5
                  }}
                  onMouseEnter={() => setActiveHover(index)}
                  onMouseLeave={() => setActiveHover(null)}
                  className={`absolute ${card.position} ${card.width} h-[360px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 will-change-transform
                    ${isHovered ? 'scale-110 z-50 shadow-[0_0_40px_rgba(32,191,85,0.4)] border-brand-primary/80' : 'border-white/10'} 
                    ${isOtherHovered ? 'opacity-30 blur-sm scale-95' : 'opacity-100'}
                    bg-white/5 backdrop-blur-xl border shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030914]/60 to-[#030914] z-10 pointer-events-none"></div>
                  
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'brightness-75 grayscale-[20%]'}`} 
                  />
                  
                  {/* Subtle animated border glow on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 z-20 border-2 border-brand-primary/50 rounded-2xl animate-pulse pointer-events-none"></div>
                  )}

                  <div className="absolute bottom-0 left-0 p-6 z-30 w-full transform transition-transform duration-500">
                    <h3 className="text-2xl font-bold font-heading text-white uppercase tracking-wider mb-1 drop-shadow-md">{card.title}</h3>
                    <div className="w-12 h-1 bg-brand-primary mb-3"></div>
                    <p className={`text-gray-300 text-sm transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* MOBILE: Horizontal Snap Scroll Cards */}
          <div className="lg:hidden mt-8 w-[100vw] relative -ml-4 sm:-ml-6 pr-8">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 pt-4 px-4 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {cards.map((card, index) => (
                <div 
                  key={`mobile-${index}`}
                  className="snap-center shrink-0 w-[280px] h-[350px] relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-transform active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030914]/60 to-[#030914] z-10 pointer-events-none"></div>
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover brightness-90" />
                  <div className="absolute bottom-0 left-0 p-6 z-30 w-full border-b-4 border-brand-primary">
                    <h3 className="text-xl font-bold font-heading text-white uppercase tracking-wider mb-1">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
