import { Metadata } from 'next';
import Link from 'next/link';
import { Download } from 'lucide-react';
import { Container } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ExperienceTimeline, SkillsSection } from '@/components/about';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'About | Jesse Brookins',
  description: 'Learn more about Jesse Brookins.',
};

export default function AboutPage() {
  return (
    <Container className="py-20">
      <section className="mb-20">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold">About Me</h1>
          <div className="text-muted-foreground space-y-4">
            <p>
              Hello! I&apos;m Jesse, a software engineer passionate about building exceptional
              digital experiences. I enjoy working across the full stack and tackling complex
              problems.
            </p>
            <p>
              My journey in software started when I built my first website and discovered the joy of
              creating things that people use. Since then, I&apos;ve worked on everything from
              startups to enterprise applications.
            </p>
          </div>
          <div className="mt-6">
            <Button asChild>
              <Link href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-2xl font-bold">Skills & Technologies</h2>
        <SkillsSection />
      </section>

      <section>
        <h2 className="mb-8 text-2xl font-bold">Experience</h2>
        <ExperienceTimeline experiences={experiences} />
      </section>
    </Container>
  );
}
