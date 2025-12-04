import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './project-card';

interface ProjectGridProps {
  projects: Project[];
  category?: ProjectCategory | 'all';
}

export function ProjectGrid({ projects, category = 'all' }: ProjectGridProps) {
  const filteredProjects =
    category === 'all' ? projects : projects.filter((p) => p.category === category);

  if (filteredProjects.length === 0) {
    return (
      <div className="text-muted-foreground py-12 text-center">
        No projects found in this category.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
