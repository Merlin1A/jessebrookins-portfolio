import { Project, ProjectCategory } from '@/types';

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    title: 'Personal Portfolio & Blog',
    description:
      'A modern portfolio website with a LaTeX-enabled blog, built with Next.js 14, TypeScript, and Tailwind CSS. Features dark mode, full-text search, and server-side rendering.',
    longDescription:
      'This portfolio showcases my work and technical writing. The blog supports full LaTeX rendering for mathematical notation, syntax-highlighted code blocks, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'KaTeX'],
    category: 'fullstack',
    imageUrl: '/images/projects/portfolio.png',
    githubUrl: 'https://github.com/jessebrookins/portfolio',
    liveUrl: 'https://jessebrookins.me',
    featured: true,
    completedAt: '2024-12',
    highlights: [
      'Server-side rendering with Next.js App Router',
      'Full LaTeX math rendering with KaTeX',
      'Full-text search using PostgreSQL',
    ],
  },
  {
    id: 'task-management-app',
    title: 'TaskFlow - Project Management',
    description:
      'A full-stack task management application with real-time updates, team collaboration features, and drag-and-drop interface.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
    category: 'fullstack',
    imageUrl: '/images/projects/taskflow.png',
    githubUrl: 'https://github.com/jessebrookins/taskflow',
    liveUrl: 'https://taskflow.example.com',
    featured: true,
    completedAt: '2024-10',
    highlights: [
      'Real-time collaboration with WebSockets',
      'Drag-and-drop Kanban boards',
      'Role-based access control',
    ],
  },
  {
    id: 'cli-tool',
    title: 'DevKit CLI',
    description:
      'A command-line tool for developers to automate common tasks like project scaffolding, code generation, and deployment.',
    technologies: ['Rust', 'Clap', 'Tokio', 'SQLite'],
    category: 'systems',
    imageUrl: '/images/projects/devkit.png',
    githubUrl: 'https://github.com/jessebrookins/devkit',
    featured: false,
    completedAt: '2024-08',
  },
  {
    id: 'mobile-fitness',
    title: 'FitTrack Mobile',
    description:
      'A cross-platform mobile app for tracking workouts, nutrition, and health metrics with offline support.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Firebase'],
    category: 'mobile',
    imageUrl: '/images/projects/fittrack.png',
    githubUrl: 'https://github.com/jessebrookins/fittrack',
    featured: true,
    completedAt: '2024-06',
    highlights: ['Offline-first architecture', 'Health kit integration', 'Custom workout builder'],
  },
  {
    id: 'api-gateway',
    title: 'API Gateway Service',
    description:
      'A high-performance API gateway with rate limiting, authentication, and request routing.',
    technologies: ['Go', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    category: 'systems',
    imageUrl: '/images/projects/gateway.png',
    githubUrl: 'https://github.com/jessebrookins/api-gateway',
    featured: false,
    completedAt: '2024-04',
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter((p) => p.category === category);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
