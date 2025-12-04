import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Card } from './ui/Card';

export const SocialLinks: React.FC = () => {
  const socials = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
  ];

  return (
    <Card className="flex flex-col justify-center h-full gap-4">
      <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Connect</h3>
      <div className="grid grid-cols-2 gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-all border border-white/5 hover:border-white/10 group"
          >
            <div className="transform group-hover:scale-110 transition-transform duration-300">
               {social.icon}
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
};