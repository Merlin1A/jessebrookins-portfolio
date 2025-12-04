import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { ProjectFilter } from '@/components/projects';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects | Jesse Brookins',
  description: 'A collection of my software engineering projects.',
};

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Projects</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          A collection of projects I&apos;ve worked on, from full-stack web applications to mobile
          apps and systems programming.
        </p>
      </div>

      <ProjectFilter projects={projects} />
    </Container>
  );
}
