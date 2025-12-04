'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProjectGrid } from './project-grid';
import { Project, ProjectCategory } from '@/types';
import { cn } from '@/lib/utils';

const CATEGORIES: { value: ProjectCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'systems', label: 'Systems' },
  { value: 'ml', label: 'ML' },
];

interface ProjectFilterProps {
  projects: Project[];
}

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const availableCategories = CATEGORIES.filter(
    (cat) => cat.value === 'all' || projects.some((p) => p.category === cat.value)
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {availableCategories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category.value)}
            className={cn('transition-all', activeCategory === category.value && 'shadow-md')}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectGrid projects={projects} category={activeCategory} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
