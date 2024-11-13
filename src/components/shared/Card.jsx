import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = true 
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl
        ${hover ? 'hover:shadow-lg dark:hover:shadow-gray-900/50' : ''}
        ${padding ? 'p-6' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;