import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ScrollSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up' 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': '-translate-y-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
    'zoom-in': 'scale-95 opacity-0',
    'zoom-out': 'scale-105 opacity-0'
  };

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : animations[animation]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ScrollSection;