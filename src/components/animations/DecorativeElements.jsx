import React from 'react';

export const CircuitPattern = () => (
  <svg 
    className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <pattern 
      id="circuit-pattern" 
      x="0" 
      y="0" 
      width="50" 
      height="50" 
      patternUnits="userSpaceOnUse"
      className="text-primary-600 dark:text-primary-400"
    >
      <path 
        d="M10 10h30v30h-30z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
      />
      <circle 
        cx="25" 
        cy="25" 
        r="3" 
        fill="currentColor"
      />
      <path 
        d="M25 10v12 M10 25h12" 
        stroke="currentColor" 
        strokeWidth="0.5"
      />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
  </svg>
);

export const WavePattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <svg 
      className="w-full h-full transform translate-y-1/2"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        className="fill-primary-200 dark:fill-primary-900"
        d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      >
        <animate 
          attributeName="d" 
          dur="10s" 
          repeatCount="indefinite"
          values="
            M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
      </path>
    </svg>
  </div>
);

export const MatrixRain = () => {
  // Implementación del efecto "Matrix Rain"
  React.useEffect(() => {
    // ... implementación del efecto Matrix
  }, []);

  return (
    <canvas 
      id="matrix-rain" 
      className="absolute inset-0 opacity-10"
    />
  );
};