import React from 'react';
import { Card } from './ui/Card';
import { Music } from 'lucide-react';

export const Spotify: React.FC = () => {
  return (
    <Card className="col-span-12 md:col-span-4 flex items-center gap-4 bg-[#1DB954]/10 border-[#1DB954]/20 hover:border-[#1DB954]/40 group cursor-pointer">
       <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
          <img src="https://picsum.photos/seed/music/200/200" alt="Album Art" className="w-full h-full object-cover animate-spin-slow" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
             <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
       </div>
       <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
             <Music size={12} className="text-[#1DB954]" />
             <span className="text-xs font-bold text-[#1DB954] uppercase tracking-wider">Listening Now</span>
          </div>
          <h4 className="text-sm font-medium text-white truncate group-hover:underline">Midnight City</h4>
          <p className="text-xs text-gray-400 truncate">M83 • Hurry Up, We're Dreaming</p>
       </div>
       <div className="flex gap-1 items-end h-4 mb-2 mr-2">
          <div className="w-1 h-3 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="w-1 h-5 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-2 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
       </div>
    </Card>
  );
};
