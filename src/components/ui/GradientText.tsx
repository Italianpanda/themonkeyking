import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}