'use client';
import { cn } from '@/lib/utils';
import { motion, useScroll } from 'framer-motion';
import React from 'react';

export const ScrollProgress = React.forwardRef(
  (
    {
      className,
      ...props
    },
    ref,
  ) => {
    const {
      scrollYProgress,
    } = useScroll();
    
    return (
      <motion.div
        ref={ref}
        className={cn(
          'fixed inset-x-0 top-16 lg:top-20 z-50 h-[2px] origin-left bg-gradient-to-r from-[#E4572E] via-[#E74D24] to-[#FFD700]',
          className,
        )}
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    );
  },
);

ScrollProgress.displayName = 'ScrollProgress';