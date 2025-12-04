'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/layout';

export function AboutPreview() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="bg-border mb-8 h-px w-full max-w-md" />
        </motion.div>

        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-muted-foreground space-y-4">
            <p>
              I&apos;m a software engineer passionate about building products that make a
              difference. With experience across the full stack, I enjoy tackling complex problems
              and creating elegant solutions.
            </p>
            <p>
              My expertise spans web development, systems programming, and mobile applications.
              I&apos;m particularly interested in performance optimization, developer experience,
              and building tools that empower others.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
