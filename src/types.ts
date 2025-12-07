import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string; // Brief description
  details: {
    title: string;
    items: string[];
  }[]; // For structured content like "服務內容", "服務流程"
  iconCategory: 'security' | 'cloud' | 'dev' | 'data';
}

export enum NavigationSection {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact',
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}