
import React from 'react';
import AnantaButton from './ui/AnantaButton';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-none mb-8">
              Let's <br />
              <span className="text-brand-red">Connect</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-8 text-lg">
              Ready to leverage my skills in React, TypeScript, and Flutter for your next project? I am currently seeking internship opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:elijahjessemariano@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <Mail className="text-brand-red group-hover:scale-110 transition-transform" />
                <span>elijahjessemariano@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-brand-red" />
                <span>Camarin, Caloocan City</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/elijah-jesse-mariano-429334366" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <Linkedin className="text-brand-red group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="flex gap-4">
              <AnantaButton onClick={() => window.location.href = 'mailto:elijahjessemariano@gmail.com'}>
                Send Email
              </AnantaButton>
            </div>
          </motion.div>

          {/* Right: Simple Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-zinc-900/30 p-8 border border-white/5 clip-corner backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors" placeholder="Recruiter Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-display font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors" placeholder="company@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-display font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 p-3 text-white focus:border-brand-red focus:outline-none transition-colors" placeholder="Project details or interview request..." />
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-sm font-display font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                   Send Message //
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2025 ELIJAH JESSE M. MARIANO // All Rights Reserved.</p>
          <div className="flex gap-8">
             <span className="text-gray-600 font-display font-bold text-xs tracking-widest">
               WEB • MOBILE • CLOUD • AI
             </span>
          </div>
        </div>

      </div>
      
      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[20vw] font-display font-black uppercase whitespace-nowrap leading-none text-white">
          MARIANO
        </h1>
      </div>
    </footer>
  );
};

export default Footer;