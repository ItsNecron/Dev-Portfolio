import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnantaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const AnantaButton: React.FC<AnantaButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "relative group px-8 py-3 font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 transform skew-x-[-10deg] flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(230,57,70,0.5)]",
    secondary: "bg-white text-black hover:bg-gray-200",
    outline: "border border-white/30 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="skew-x-[10deg] inline-flex items-center gap-2">
        {children}
        {variant === 'primary' && <ArrowRight className="w-4 h-4" />}
      </span>
      
      {/* Decorative corner accent */}
      {variant === 'primary' && (
        <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-50" />
      )}
    </motion.button>
  );
};

export default AnantaButton;
