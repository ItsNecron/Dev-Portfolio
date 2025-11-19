import React from 'react';
import { Project } from '../types';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: '1',
    title: 'PathLink',
    category: 'IoT Management System',
    image: '/assets/pathlink-project.png',
    description: 'IoT-enabled Car Rental Management Web Application System that streamlines vehicle tracking, rental processes, and user management through real-time data integration and an intuitive interface.',
    tags: ['TypeScript', 'PostgreSQL', 'IoT'],
    demoUrl: 'https://pathlinkio.app/'
  },
  {
    id: '2',
    title: 'BetterBee',
    category: 'Gamified Habit Tracker',
    image: '/assets/BetterBee-project.png',
    description: 'A gamified habit tracker application, developed using AI platform Caffeine AI during a hackathon. Incentivizes users to build positive habits through engaging game mechanics.',
    tags: ['React', 'Tailwind CSS', 'Caffeine AI'],
    demoUrl: 'https://betterbee-m7n.caffeine.xyz/'
  },
  {
    id: '3',
    title: 'WiseTrack',
    category: 'POS System Architecture',
    image: '/assets/arya-kopi-project.png',
    description: 'A dedicated Point-of-Sale (POS) system for a local coffee shop. Uses modern web and mobile development frameworks to create a simple and user-friendly interface for efficient order processing and inventory management.',
    tags: ['Flutter', 'PostgreSQL', 'Team Lead'],
    demoUrl: 'https://github.com/Zen1thh/WiseGuys_Capstone/tree/dev-with-DB'
  }
];

const Projects: React.FC = () => {
  // Adapt Project type to Testimonial type format for the component
  const showcaseProjects = projects.map(project => ({
    name: project.title,
    designation: project.category,
    quote: project.description,
    src: project.image,
    link: project.demoUrl
  }));

  return (
    <section id="projects" className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white">
              Project <span className="text-brand-red">Showcase</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-24 bg-brand-red mt-4 skew-x-[-20deg]" 
            />
          </div>
          <p className="max-w-sm text-gray-400 text-right font-sans">
            Leading development teams and delivering scalable full-stack solutions.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="w-full"
        >
          <AnimatedTestimonials testimonials={showcaseProjects} autoplay={true} />
        </motion.div>
        
        {/* Background decoration - Animated */}
        <motion.div 
          animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut"
          }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" 
        />
      </div>
    </section>
  );
};

export default Projects;