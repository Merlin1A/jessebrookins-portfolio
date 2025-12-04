'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Project } from '@/types';

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative grid gap-4 md:grid-cols-12 md:gap-0"
    >
      <div
        className={cn(
          'bg-muted relative aspect-video overflow-hidden rounded-lg md:col-span-7 md:aspect-auto md:h-full',
          isEven ? 'md:col-start-1' : 'md:col-start-6'
        )}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <div className="flex h-full min-h-[300px] items-center justify-center">
            <Folder className="text-muted-foreground/30 h-16 w-16" />
          </div>
        )}
        <div className="bg-primary/10 absolute inset-0" />
      </div>

      <div
        className={cn(
          'relative flex flex-col justify-center md:col-span-7 md:row-start-1',
          isEven
            ? 'md:col-start-6 md:items-end md:text-right'
            : 'md:col-start-1 md:items-start md:text-left'
        )}
      >
        <p className="text-primary mb-1 font-mono text-sm">Featured Project</p>
        <h3 className="text-foreground mb-4 text-2xl font-bold md:text-3xl">{project.title}</h3>

        <div className="bg-card mb-4 rounded-lg p-4 shadow-lg md:p-6">
          <p className="text-muted-foreground">{project.longDescription || project.description}</p>
          {project.highlights && (
            <ul
              className={cn(
                'text-muted-foreground mt-3 space-y-1 text-sm',
                isEven ? 'md:text-right' : 'md:text-left'
              )}
            >
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          className={cn(
            'mb-4 flex flex-wrap gap-2',
            isEven ? 'md:justify-end' : 'md:justify-start'
          )}
        >
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
