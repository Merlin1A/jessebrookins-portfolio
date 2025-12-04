'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <motion.div
        className="max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-primary mb-4 font-mono text-sm sm:text-base"
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          Jesse Brookins.
        </motion.h1>

        <motion.h2
          className="text-muted-foreground mb-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg"
          variants={itemVariants}
        >
          I&apos;m a software engineer specializing in building exceptional digital experiences.
          Currently focused on creating accessible, performant web applications with modern
          technologies like React, TypeScript, and Node.js.
        </motion.p>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <FileText className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="text-muted-foreground flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs">Scroll</span>
          <svg
            className="h-6 w-6"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
