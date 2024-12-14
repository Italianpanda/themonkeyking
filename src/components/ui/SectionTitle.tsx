import React from 'react';
import { GradientText } from './GradientText';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center mb-16">
      <GradientText>{children}</GradientText>
    </h2>
  );
}