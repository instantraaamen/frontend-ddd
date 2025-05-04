// src/components/Accordion.tsx
import React, { useState } from 'react';

type Item = { title: string; content: string; };
type Props = { items: Item[]; };

export const Accordion: React.FC<Props> = ({ items }) => (
  <div>
    {items.map((item, i) => (
      <AccordionItem key={i} title={item.title} content={item.content} />
    ))}
  </div>
);

const AccordionItem: React.FC<Item> = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 flex justify-between items-center"
      >
        {title}
        <span>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="px-4 py-2 bg-gray-50">{content}</div>}
    </div>
  );
};
