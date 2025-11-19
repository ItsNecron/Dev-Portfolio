import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnantaButton from './ui/AnantaButton';
import AnoAI from './ui/animated-shader-background';
import { ImageSwiper } from './ui/image-swiper';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Personal portfolio images
  // Note: Ensure these files are placed in the public folder
  const swiperImages = [
    "/assets/aest-1323.JPG",
    "/assets/aest-12323424.jpg", 
    "/assets/aest-123.jpg"
  ].join(',');

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Animated Shader Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <AnoAI />
      </div>
      
      {/* Gradient Overlays for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full pt-32 pb-20">
        
        {/* Left Side: Text Content */}
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col items-start space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md skew-x-[-10deg]">
              <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse skew-x-[10deg]" />
              <span className="font-display text-xs font-bold tracking-widest uppercase skew-x-[10deg]">Open to Work</span>
            </div>
            
            {/* Main Title */}
            <div>
              <h1 className="font-display font-black text-7xl md:text-9xl uppercase leading-[0.9] tracking-tighter text-white">
                Elijah<br/>
                <span className="text-transparent [-webkit-text-stroke:2px_#fff] opacity-80">Jesse</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-display font-bold text-brand-red tracking-[0.2em] uppercase mt-6 pl-2">
                Web & Mobile Developer
              </h2>
            </div>

            <p className="font-sans text-gray-400 max-w-lg text-lg border-l-2 border-brand-red pl-6 leading-relaxed">
              Highly motivated IT specialist contributing to scalable software solutions. Leveraging practical experience in React, TypeScript, and PostgreSQL.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ y: useTransform(scrollY, [0, 500], [0, 50]) }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <AnantaButton onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
              View Projects
            </AnantaButton>
            <AnantaButton variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Contact Me
            </AnantaButton>
          </motion.div>
        </motion.div>

        {/* Right Side: Image Swiper */}
        <motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
          className="flex justify-center lg:justify-end relative perspective-[1000px]"
        >
           {/* Glow Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />
           
           <ImageSwiper 
             images={swiperImages} 
             cardWidth={300} 
             cardHeight={420}
             className="z-10 hover:scale-105 transition-transform duration-500" 
           />
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        style={{ opacity: opacityText }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20"
      >
        <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20" />
    </section>
  );
};

export default Hero;