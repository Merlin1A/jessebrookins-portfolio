import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/jessebrookins',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/jessebrookins',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/jessebrookins',
    icon: Twitter,
  },
  {
    name: 'Email',
    href: 'mailto:jesse@jessebrookins.me',
    icon: Mail,
  },
] as const;

export const SITE_CONFIG = {
  name: 'Jesse Brookins',
  title: 'Software Engineer',
  description: 'Building things for the web.',
  url: 'https://jessebrookins.me',
} as const;
