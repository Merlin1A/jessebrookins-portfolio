'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { getSkillsByCategory } from '@/data/experience';

const CATEGORIES = [
  { key: 'languages' as const, label: 'Languages' },
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend' },
  { key: 'tools' as const, label: 'Tools' },
  { key: 'learning' as const, label: 'Learning' },
];

export function SkillsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((category, index) => {
        const categorySkills = getSkillsByCategory(category.key);
        if (categorySkills.length === 0) return null;

        return (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg border p-4"
          >
            <h3 className="mb-3 font-semibold">{category.label}</h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant={category.key === 'learning' ? 'outline' : 'secondary'}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
