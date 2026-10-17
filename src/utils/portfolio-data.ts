import type { ProjectItem, ExperienceItem, EducationItem, AchievementItem, SkillItem, SkillCategory } from '../types/portfolio.ts';

export const PERSONAL_INFO = {
  name: 'ADARSH SK',
  role: 'Software Engineer & Full-Stack Developer',
  tagline: 'Crafting Web GIS telemetry, conversational AI systems, and cloud pipelines.',
  bio: 'Computer Science and Engineering undergraduate at Canara Engineering College with practical experience in full-stack web platforms, geospatial analytics, and cloud CI/CD automation. FOSS Hack 2025 winner and incoming Software Engineering Intern at Venu AI.',
  email: 'adarshsk128@gmail.com',
  githubUrl: 'https://github.com/natejacobs1',
  githubHandle: 'natejacobs1',
  linkedinUrl: 'https://linkedin.com/in/adarshsk',
  linkedinHandle: 'adarshsk',
  location: 'Karnataka, India',
  timezone: 'Asia/Kolkata',
  status: 'Open to internships & engineering collaborations',
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'chesster',
    title: 'Chesster',
    year: '2025',
    tagline: 'Interactive chess analysis chatbot combining Stockfish engine evaluations with Google Gemini API.',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Vite', 'Google Gemini API'],
    bulletPoints: [
      'Developed an interactive chess analysis chatbot combining engine evaluations with the Google Gemini API to explain games and complex positions conversationally.',
      'Built a full-stack web application for loading games from URLs, navigating moves, processing board positions, and providing secure, responsive real-time chatbot analysis.'
    ],
    metrics: 'Real-time engine & conversational LLM analysis',
    githubUrl: 'https://github.com/natejacobs1/chesster',
    demoUrl: 'https://github.com/natejacobs1/chesster',
    category: 'ai',
    highlights: [
      'Board state FEN/PGN ingestion and move tree traversal',
      'Engine evaluation integration with conversational explanations',
      'Full-stack architecture with Express proxy for secure AI API keys'
    ]
  },
  {
    id: 'lira',
    title: 'LIRA - Landslide Intelligence & Risk Analytics',
    year: '2026',
    tagline: 'Web GIS dashboard visualizing landslide susceptibility tiers and spatial risk telemetry.',
    technologies: ['Python', 'QGIS', 'React', 'TypeScript', 'Leaflet', 'Tailwind CSS', 'GeoJSON', 'GeoTIFF'],
    bulletPoints: [
      'Developing a Web GIS dashboard to visualize classified susceptibility tiers (Low, High, Very High), landslide hazard points, road networks, and district boundaries across four Karnataka districts.',
      'Implementing interactive coordinate raster sampling, feature inspection telemetry, spatial risk analytics, and selectable 10-factor Landslide Conditioning Factor (LCF) maps using React and Leaflet.'
    ],
    metrics: '4 Karnataka Districts · 10-Factor LCF Analysis',
    githubUrl: 'https://github.com/natejacobs1/lira',
    demoUrl: 'https://github.com/natejacobs1/lira',
    category: 'gis',
    highlights: [
      'Interactive coordinate raster sampling & spatial analytics',
      'Selectable 10-factor Landslide Conditioning Factor (LCF) maps',
      'Multi-layer Leaflet visualization with GeoJSON and GeoTIFF tiles'
    ]
  },
  {
    id: 'systune',
    title: 'SysTune (FOSS Hack 2025 Winner)',
    year: '2025',
    tagline: 'Lightweight GTK-based Linux system settings manager with desktop-environment-independent controls.',
    technologies: ['C / Python', 'GTK', 'Linux APIs', 'Systemd', 'NetworkManager'],
    bulletPoints: [
      'Awarded a Rs. 10,000 cash prize at a national-level hackathon (FOSS Hack 2025 - Kochi) as part of Team Fulgur Code.',
      'Built a lightweight GTK-based Linux system settings manager with a desktop-environment-independent interface for managing system, connectivity, and security settings.'
    ],
    metrics: 'National Hackathon Winner · Rs. 10,000 Prize',
    githubUrl: 'https://github.com/natejacobs1',
    category: 'systems',
    highlights: [
      'Desktop-environment-independent interface',
      'Native GTK widgets with minimal memory footprint',
      'System, networking, and security policy control'
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Venu AI',
    role: 'Software Engineering Intern',
    location: 'Remote, San Jose, CA',
    period: 'June 2026 - Aug 2026',
    bulletPoints: [
      'Contributing to an AI-powered SaaS platform using Django, React, PostgreSQL, Redis, Docker, GitHub Actions, and Microsoft Azure.',
      'Improving GitHub Actions CI/CD pipelines while contributing to backend bug fixes, campaign scheduling, feature development, deployments, and code reviews.'
    ],
    technologies: ['Django', 'React', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'Microsoft Azure']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Canara Engineering College',
    degree: 'B.E in Computer Science and Engineering',
    period: '2023 – 2027',
    score: '7.7 / 10',
    scoreLabel: 'CGPA',
    details: 'Focus on Data Structures, Algorithms, Web Engineering, and Spatial Computing.'
  },
  {
    institution: 'Centre for Advanced Learning (CFAL)',
    degree: 'Pre-University Course (PCMS)',
    period: '2021 – 2023',
    score: '87%',
    scoreLabel: 'Percentage',
    details: 'Physics, Chemistry, Mathematics, and Statistics foundation.'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'FOSS Hack 2025 Winner - Kochi',
    issuer: 'FOSS United',
    year: '2025',
    award: 'Rs. 10,000 Cash Prize',
    description: 'Awarded at national-level hackathon as part of Team Fulgur Code for developing SysTune, a desktop-independent GTK Linux settings manager.',
    projectOrSkill: 'SysTune'
  },
  {
    title: 'GitHub Foundations Certification',
    issuer: 'GitHub',
    year: '2025',
    award: 'Credential',
    description: 'Demonstrated proficiency in Git, GitHub workflows, repository management, collaboration, version control, GitHub Actions, and fundamental DevOps concepts.',
    projectOrSkill: 'DevOps & Git'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { name: 'Python', category: 'languages' },
  { name: 'C', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },

  // Web Technologies
  { name: 'React.js', category: 'web' },
  { name: 'HTML5', category: 'web' },
  { name: 'CSS3', category: 'web' },
  { name: 'Tailwind CSS', category: 'web' },
  { name: 'Node.js', category: 'web' },
  { name: 'Express', category: 'web' },
  { name: 'Vite', category: 'web' },

  // GIS & Data
  { name: 'QGIS', category: 'gis' },
  { name: 'GeoJSON', category: 'gis' },
  { name: 'GeoTIFF', category: 'gis' },
  { name: 'Spatial Data Analysis', category: 'gis' },
  { name: 'Leaflet', category: 'gis' },

  // Cloud & DevOps
  { name: 'Docker', category: 'cloud' },
  { name: 'Kubernetes', category: 'cloud' },
  { name: 'GitHub Actions', category: 'cloud' },
  { name: 'AWS IAM', category: 'cloud' },
  { name: 'Amazon ECR', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
  { name: 'Microsoft Azure', category: 'cloud' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'GitHub', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'GitHub Copilot', category: 'tools' },
];

/**
 * Filter skills by category.
 */
export function filterSkills(skills: SkillItem[], category: SkillCategory): SkillItem[] {
  if (category === 'all') return skills;
  return skills.filter(item => item.category === category);
}

/**
 * Validates email formatting.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formats IST time for Karnataka, India (UTC + 5:30)
 */
export function getFormattedIST(date: Date = new Date()): { timeString: string; isDaytime: boolean; dateString: string } {
  // Use Intl.DateTimeFormat with Asia/Kolkata
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const hourFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    hour12: false,
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const hour = parseInt(hourFormatter.format(date), 10);
  const isDaytime = hour >= 6 && hour < 18;

  return {
    timeString: timeFormatter.format(date),
    isDaytime,
    dateString: dateFormatter.format(date),
  };
}
