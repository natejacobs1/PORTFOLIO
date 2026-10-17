export type SkillCategory = 'all' | 'languages' | 'web' | 'gis' | 'cloud' | 'tools';

export interface SkillItem {
  name: string;
  category: Exclude<SkillCategory, 'all'>;
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  tagline: string;
  technologies: string[];
  bulletPoints: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
  category: 'ai' | 'gis' | 'systems';
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  scoreLabel: string;
  details?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  award?: string;
  description: string;
  projectOrSkill?: string;
}
