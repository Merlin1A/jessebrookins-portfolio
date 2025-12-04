import { Experience, Skill } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'company-1',
    company: 'TechCorp Inc.',
    role: 'Senior Software Engineer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Leading development of customer-facing applications.',
    achievements: [
      'Architected microservices platform, reducing deployment time by 60%',
      'Led migration from legacy monolith to React/Node.js stack',
      'Mentored team of 4 junior developers',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'company-2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Built full-stack applications for a fintech startup.',
    achievements: [
      'Developed payment system handling $2M+ monthly transactions',
      'Implemented real-time notifications with WebSockets',
      'Reduced API response times by 40%',
    ],
    technologies: ['React', 'Python', 'Django', 'Redis', 'Docker'],
  },
];

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Rust', category: 'languages' },
  { name: 'Go', category: 'languages' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'Redis', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'AWS', category: 'tools' },
  { name: 'Machine Learning', category: 'learning' },
];

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter((s) => s.category === category);
};
