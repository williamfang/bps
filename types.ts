import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  color?: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
  username: string;
}