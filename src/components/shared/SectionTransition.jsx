import React, { useEffect, useRef, useState } from 'react';

const SectionTransition = ({ 
  children, 
  className = '',
  delay = 0,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

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
        threshold: threshold,
        rootMargin: '50px',
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, hasAnimated, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`
        transform transition-all duration-1000
        ${isVisible ? 'translate-y-0 opacity-100 blur-none' : 'translate-y-10 opacity-0 blur-sm'}
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

export default SectionTransition;