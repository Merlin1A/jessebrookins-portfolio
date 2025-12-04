'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="bg-border absolute top-0 left-0 h-full w-px md:left-1/2 md:-translate-x-1/2" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="bg-primary absolute top-2 left-0 h-3 w-3 rounded-full md:left-1/2 md:-translate-x-1/2" />

            <div
              className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
            >
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{exp.role}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-muted-foreground mb-3 text-sm">{exp.description}</p>

                <ul className="mb-4 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground flex gap-2 text-sm">
                      <span className="text-primary">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
