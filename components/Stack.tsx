import React from 'react';
import { Card } from './ui/Card';

const TechItem: React.FC<{ name: string }> = ({ name }) => (
  <div className="px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-white/5 text-xs font-medium text-gray-300">
    {name}
  </div>
);

export const Stack: React.FC = () => {
  return (
    <Card className="flex flex-col justify-center h-full">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Toolkit</h3>
      <div className="flex flex-wrap gap-2">
        <TechItem name="React" />
        <TechItem name="Next.js" />
        <TechItem name="TypeScript" />
        <TechItem name="Tailwind" />
        <TechItem name="Node.js" />
        <TechItem name="Figma" />
        <TechItem name="PostgreSQL" />
        <TechItem name="Framer" />
      </div>
    </Card>
  );
};