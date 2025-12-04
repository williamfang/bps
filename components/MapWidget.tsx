import React from 'react';
import { Card } from './ui/Card';

export const MapWidget: React.FC = () => {
  return (
    <Card className="h-full p-0 relative group min-h-[180px]">
      <div className="absolute inset-0 bg-zinc-900 transition-transform duration-700 group-hover:scale-110">
         {/* Simple Map Visualization */}
         <div className="w-full h-full opacity-50" style={{
             backgroundImage: 'radial-gradient(#555 1.5px, transparent 1.5px)',
             backgroundSize: '24px 24px'
         }}></div>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex justify-center items-center">
                <div className="absolute w-12 h-12 bg-blue-500/30 rounded-full animate-ping"></div>
                <div className="relative w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-lg z-10"></div>
            </div>
         </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-20">
         <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Location</div>
            <div className="text-white font-medium">Shibuya, Tokyo</div>
         </div>
         <div className="bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/5 text-xs text-white">
           {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
         </div>
      </div>
    </Card>
  );
};