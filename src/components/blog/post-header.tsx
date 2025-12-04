import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BlogPostMeta } from '@/types';

interface PostHeaderProps {
  post: BlogPostMeta;
}

export function PostHeader({ post }: PostHeaderProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="mb-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="text-muted-foreground mb-4 flex flex-wrap items-center gap-3 text-sm">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {formattedDate}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {post.readingTime}
        </span>
      </div>

      <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">{post.title}</h1>

      {post.excerpt && <p className="text-muted-foreground mb-6 text-lg">{post.excerpt}</p>}

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link key={tag} href={`/blog/tag/${tag}`}>
            <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </header>
  );
}
