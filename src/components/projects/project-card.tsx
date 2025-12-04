import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group hover:shadow-primary/5 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        className
      )}
    >
      <div className="bg-muted relative aspect-video overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Folder className="text-muted-foreground/50 h-12 w-12" />
          </div>
        )}
        <Badge variant="secondary" className="absolute top-2 right-2 capitalize">
          {project.category}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <h3 className="group-hover:text-primary line-clamp-1 text-lg font-semibold transition-colors">
          {project.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1 pb-2">
        <p className="text-muted-foreground line-clamp-3 text-sm">{project.description}</p>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-0">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex w-full gap-2">
          {project.githubUrl && (
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="sm" className="flex-1" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
