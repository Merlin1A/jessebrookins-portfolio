export type ProjectCategory = 'fullstack' | 'mobile' | 'systems' | 'ml' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: ProjectCategory;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completedAt: string;
  highlights?: string[];
}
