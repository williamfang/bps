import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from './ui/Card';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <Card className={`group cursor-pointer flex flex-col justify-between ${className}`} onClick={() => window.open(project.link, '_blank')}>
      <div className="mb-4">
        <div className="flex justify-between items-start mb-4">
           <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10">
             {project.icon}
           </div>
           <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full text-black">
             <ArrowUpRight size={16} />
           </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          {project.description}
        </p>
      </div>
      
      {project.image && (
        <div className="w-full h-40 rounded-2xl overflow-hidden relative border border-white/5 mt-auto">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
        </div>
      )}
    </Card>
  );
};