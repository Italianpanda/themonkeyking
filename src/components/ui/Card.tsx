import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-black/50 p-8 rounded-2xl border border-yellow-500/20 ${className}`}>
      {children}
    </div>
  );
}