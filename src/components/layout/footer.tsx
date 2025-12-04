import Link from 'next/link';
import { Container } from './container';
import { SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/40 border-t py-8">
      <Container size="large">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <div className="text-muted-foreground flex flex-col items-center gap-1 text-center text-sm">
            <p>
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
