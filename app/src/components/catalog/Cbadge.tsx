// src/components/Badge.tsx
import React from 'react';

type Props = { label: string; color?: string; };

export const Badge: React.FC<Props> = ({ label, color = 'bg-blue-500' }) => (
  <span className={`${color} text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
    {label}
  </span>
);
