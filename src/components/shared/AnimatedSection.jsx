import React, { useEffect, useState } from 'react';

const AnimatedSection = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.querySelector(`#animated-section-${delay}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, hasAnimated]);

  const animations = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': '-translate-y-10 opacity-0',
    'fade-left': 'translate-x-10 opacity-0',
    'fade-right': '-translate-x-10 opacity-0',
    'scale-up': 'scale-95 opacity-0',
    'zoom-in': 'scale-90 opacity-0'
  };

  return (
    <div
      id={`animated-section-${delay}`}
      className={`
        transform transition-all duration-700
        ${isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animations[animation]}
        ${className}
      `}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;