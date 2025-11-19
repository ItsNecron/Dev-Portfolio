import React, { useEffect, useRef, useState } from 'react'
import { cn } from "../../lib/utils"
import { TestimonialCard, TestimonialAuthor } from "./testimonial-card"
import { 
  motion, 
  useAnimationFrame, 
  useMotionValue, 
  useTransform 
} from "framer-motion"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

const MarqueeContainer = ({ items, className }: { items: any[], className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemSetRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const speed = 0.5; // Pixels per frame

  // Measure the width of a single set of items
  useEffect(() => {
    if (itemSetRef.current) {
      const measure = () => {
        // We calculate width including the gap
        // Assuming flex gap is part of the layout
        // We can get the width of the element
        setContentWidth(itemSetRef.current?.offsetWidth || 0);
      };
      
      measure();
      window.addEventListener('resize', measure);
      return () => window.removeEventListener('resize', measure);
    }
  }, [items]);

  // Animation Loop
  useAnimationFrame((t, delta) => {
    if (!contentWidth) return;

    // Calculate movement
    // If dragging, we don't auto-move
    if (!isHovered && !isDragging) {
      // Normalize delta to avoid huge jumps if tab was inactive
      const timeDelta = Math.min(delta, 20); 
      x.set(x.get() - speed * (timeDelta / 10));
    }

    // Infinite Loop Logic
    // We assume we have enough duplicates.
    // When x goes passed -contentWidth, we reset by adding contentWidth.
    const currentX = x.get();
    if (currentX <= -contentWidth) {
      x.set(currentX + contentWidth);
    } else if (currentX > 0) {
       // Handle dragging to the right edge
       x.set(currentX - contentWidth);
    }
  });

  // Drag Logic
  const lastClientX = useRef(0);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastClientX.current = e.clientX;
    // Capture pointer to ensure we receive events even if mouse leaves container
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - lastClientX.current;
    lastClientX.current = e.clientX;
    x.set(x.get() + delta);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as Element).releasePointerCapture(e.pointerId);
  };

  // We render 4 sets to ensure coverage for wide screens and smooth looping
  // Set 1: Measured for loop length
  // Set 2, 3, 4: Fill space
  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full overflow-hidden cursor-grab active:cursor-grabbing touch-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <motion.div 
        className="flex w-max flex-row items-stretch gap-[--gap]" 
        style={{ x, gap: 'var(--gap)' }}
      >
        <div ref={itemSetRef} className="flex shrink-0 flex-row items-stretch gap-[--gap]">
          {items.map((item, i) => (
             <TestimonialCard key={`set1-${i}`} {...item} className="h-full" />
          ))}
        </div>
        <div className="flex shrink-0 flex-row items-stretch gap-[--gap]">
          {items.map((item, i) => (
             <TestimonialCard key={`set2-${i}`} {...item} className="h-full" />
          ))}
        </div>
        <div className="flex shrink-0 flex-row items-stretch gap-[--gap]">
          {items.map((item, i) => (
             <TestimonialCard key={`set3-${i}`} {...item} className="h-full" />
          ))}
        </div>
        <div className="flex shrink-0 flex-row items-stretch gap-[--gap]">
          {items.map((item, i) => (
             <TestimonialCard key={`set4-${i}`} {...item} className="h-full" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 px-4 sm:gap-8"
        >
          <h2 className="max-w-[720px] text-3xl font-display font-black uppercase tracking-tighter sm:text-5xl sm:leading-tight text-white">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8 [--gap:1rem]"
        >
          <MarqueeContainer items={testimonials} />
          
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/6 bg-gradient-to-r from-black via-black/50 to-transparent sm:block z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/6 bg-gradient-to-l from-black via-black/50 to-transparent sm:block z-10" />
        </motion.div>
      </div>
    </section>
  )
}