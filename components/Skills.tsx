import React from 'react';
import { TestimonialsSection } from './ui/testimonials-with-marquee';

const techStack = [
  {
    author: {
      name: "React",
      handle: "Frontend Core",
      avatar: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    },
    text: "Building interactive, component-based UIs with complex state management and lifecycle optimization."
  },
  {
    author: {
      name: "TypeScript",
      handle: "Language",
      avatar: "https://images.unsplash.com/photo-1629654297299-c8506221ca7d?q=80&w=2070&auto=format&fit=crop"
    },
    text: "Ensuring type safety and scalable codebases across large enterprise applications."
  },
  {
    author: {
      name: "Tailwind CSS",
      handle: "Styling",
      avatar: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
    },
    text: "Rapidly prototyping and implementing bespoke, responsive designs with a utility-first approach."
  },
  {
    author: {
      name: "Three.js",
      handle: "3D Graphics",
      avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
    },
    text: "Creating immersive WebGL experiences, shaders, and particle systems for high-impact visuals."
  },
  {
    author: {
      name: "PostgreSQL",
      handle: "Database",
      avatar: "https://images.unsplash.com/photo-1633356122102-3fe601e15cac?q=80&w=2070&auto=format&fit=crop"
    },
    text: "Designing relational schemas and optimizing queries for high-performance data persistence."
  },
  {
    author: {
      name: "Framer Motion",
      handle: "Animation",
      avatar: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
    },
    text: "Orchestrating complex layout transitions and gesture-based animations for fluid UX."
  }
];

const Skills: React.FC = () => {
  return (
    <div id="skills">
      <TestimonialsSection
        title="Technical Arsenal"
        description="A robust toolset honed through practical application in POS systems, IoT management, and AI-driven platforms."
        testimonials={techStack}
        className="bg-transparent"
      />
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
    </div>
  );
};

export default Skills;