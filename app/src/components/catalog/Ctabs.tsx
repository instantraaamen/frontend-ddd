// src/components/Tabs.tsx
import React, { useState } from 'react';

type Tab = { label: string; content: React.ReactNode; };
type Props = { tabs: Tab[]; };

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex border-b">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 -mb-px ${
              active === i ? 'border-b-2 border-blue-500' : 'text-gray-500'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[active].content}</div>
    </div>
  );
};
