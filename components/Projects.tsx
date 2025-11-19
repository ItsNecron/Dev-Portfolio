import React from 'react';
import { Project } from '../types';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { motion } from 'framer-motion';

const projects: Project[] = [
  {
    id: '1',
    title: 'PathLink',
    category: 'IoT Management System',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop',
    description: 'An IoT-enabled management system. Led technical documentation and performed comprehensive QA testing, identifying bugs and ensuring UI responsiveness across devices.',
    tags: ['TypeScript', 'PostgreSQL', 'IoT'],
    demoUrl: 'https://pathlinkio.app/'
  },
  {
    id: '2',
    title: 'BetterBee',
    category: 'Gamified Habit Tracker',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    description: 'A habit tracker built during a hackathon using Generative AI (Caffeine) to rapid prototype. Performed code review and UI refinement on AI-generated components.',
    tags: ['React', 'Tailwind CSS', 'Caffeine AI'],
    demoUrl: 'https://betterbee-m7n.caffeine.xyz/'
  },
  {
    id: '3',
    title: 'WiseTrack',
    category: 'POS System Architecture',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
    description: 'A dedicated POS system for a coffee shop. Led a team of 4, assisting in UI/UX design and front-end development while managing project milestones.',
    tags: ['Flutter', 'PostgreSQL', 'Team Lead'],
    demoUrl: '#'
  }
];

const Projects: React.FC = () => {
  // Adapt Project type to Testimonial type format for the component
  const showcaseProjects = projects.map(project => ({
    name: project.title,
    designation: project.category,
    quote: project.description,
    src: project.image
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