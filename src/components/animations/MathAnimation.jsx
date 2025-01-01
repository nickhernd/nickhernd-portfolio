import React from 'react';

const MathAnimation = () => {
  return (
    <div className="absolute right-10 top-20 opacity-25 transform rotate-12 hidden md:block animate-math-float">
      <div className="font-mono text-primary-600 dark:text-primary-400 space-y-2">
        <div>∫ e^x dx = e^x + C</div>
        <div>∇ × B = μ₀(J + ε₀∂E/∂t)</div>
        <div>∮ E·dl = -dΦ/dt</div>
        <div>∇²ψ + (2m/ℏ²)(E-V)ψ = 0</div>
        <div>f'(x) = lim[h→0] (f(x+h)-f(x))/h</div>
        <div>P(A|B) = P(B|A)P(A)/P(B)</div>
      </div>
    </div>
  );
};

export default MathAnimation;