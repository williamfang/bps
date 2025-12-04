import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Card } from './ui/Card';

export const ProfileHeader: React.FC = () => {
  return (
    <Card className="flex flex-col justify-between h-full group">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 shadow-xl">
            <img 
              src="https://picsum.photos/seed/anas/200/200" 
              alt="Profile" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <a href="mailto:contact@anas.fun" className="px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
            Contact
            <ArrowUpRight size={16} />
          </a>
        </div>
        
        <div>
           <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Anas</h1>
           <p className="text-gray-400 leading-relaxed mb-4">
             Digital craftsman and full-stack developer. Building accessible, pixel-perfect, and performant web experiences.
           </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin size={16} />
        <span>Tokyo, Japan</span>
        <span className="w-1 h-1 rounded-full bg-gray-600 mx-2"></span>
        <span className="text-green-500 flex items-center gap-1.5">
           <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
           Available for work
        </span>
      </div>
    </Card>
  );
};