export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'tools' | 'learning';
}
