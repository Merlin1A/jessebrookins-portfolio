import Link from 'next/link';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SOCIAL_LINKS } from '@/lib/constants';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jesse@jessebrookins.me',
    href: 'mailto:jesse@jessebrookins.me',
  },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: null },
  { icon: Calendar, label: 'Availability', value: 'Open to opportunities', href: null },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <Card key={method.label}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <method.icon className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{method.label}</p>
                {method.href ? (
                  <Link href={method.href} className="hover:text-primary font-medium">
                    {method.value}
                  </Link>
                ) : (
                  <p className="font-medium">{method.value}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <p className="mb-3 text-sm font-medium">Connect with me</p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary flex h-10 w-10 items-center justify-center rounded-lg"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
