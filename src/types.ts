export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
  icon: string; // Lucide icon name
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  semester?: string;
  description: string;
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  color: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface AgencyInfo {
  name: string;
  tagline: string;
  roleTitle: string;
  roleDescription: string;
  aboutAgency: string;
  coreServices: string[];
  keyStats: { value: string; label: string }[];
}

