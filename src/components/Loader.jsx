import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Sequence timing
    const t1 = setTimeout(() => setPhase(1), 500);   // Start laser scan
    const t2 = setTimeout(() => setPhase(2), 3000);  // Scan finished, bloom glow
    const t3 = setTimeout(() => onComplete(), 4500); // 4.5s total duration

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  // Subtle industrial texture
  const renderTexture = () => (
    <>
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
      ></div>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#010308] overflow-hidden"
    >
      {renderTexture()}

      <div className="relative z-10 w-[320px] md:w-[400px] h-[100px] flex items-center justify-center">
        
        {/* The Laser/Scan Line */}
        {phase >= 1 && phase < 3 && (
          <motion.div
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: "100%", opacity: phase === 2 ? 0 : [0, 1, 1, 0] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute top-[-20%] bottom-[-20%] w-[2px] bg-white z-30 pointer-events-none"
            style={{ 
              boxShadow: "0 0 10px #ffffff, 0 0 20px #20BF55, 0 0 40px #20BF55",
              mixBlendMode: "screen"
            }}
          >
            {/* Tiny subtle flare at center of laser */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[6px] h-[40px] rounded-full bg-white blur-[2px]"></div>
          </motion.div>
        )}

        {/* The Target Logo containing container */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Un-scanned ghost image (extremely faint) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img 
              src="https://static.wixstatic.com/media/6eacb8_6c031563f034436ba10301f5aeab54af~mv2.png/v1/fill/w_232,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%205_4x.png" 
              alt="TwinLine Outline" 
              className="h-16 md:h-20 object-contain brightness-0 invert"
            />
          </div>

          {/* The Revealed Logo matching the laser line */}
          <motion.div 
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={phase >= 1 ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <img 
              src="https://static.wixstatic.com/media/6eacb8_6c031563f034436ba10301f5aeab54af~mv2.png/v1/fill/w_232,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Asset%205_4x.png" 
              alt="TwinLine Solid" 
              className="h-16 md:h-20 object-contain brightness-0 invert drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>

        {/* Ambient Bloom Effect after scan completes */}
        {phase >= 2 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-brand-primary/20 blur-[40px] z-0 pointer-events-none"
          ></motion.div>
        )}
      </div>

      {/* Subtext revealing elegantly */}
      <motion.div 
        initial={{ opacity: 0, y: 10, letterSpacing: "0.1em" }}
        animate={phase >= 2 ? { opacity: 1, y: 0, letterSpacing: "0.2em" } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[20%] text-white/50 text-[10px] sm:text-xs md:text-sm uppercase font-light pointer-events-none text-center px-4"
      >
        Where steel buildings meet innovation
      </motion.div>

    </motion.div>
  );
};

export default Loader;
