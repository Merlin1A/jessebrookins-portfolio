import Link from 'next/link';
import { Calendar, Clock, Folder } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPostMeta } from '@/types';
import { cn } from '@/lib/utils';

interface PostCardProps {
  post: BlogPostMeta;
  className?: string;
}

export function PostCard({ post, className }: PostCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={cn(
          'group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
          className
        )}
      >
        <div className="bg-muted relative aspect-[2/1] overflow-hidden">
          <div className="flex h-full items-center justify-center">
            <Folder className="text-muted-foreground/30 h-10 w-10" />
          </div>
          {post.featured && <Badge className="absolute top-2 left-2">Featured</Badge>}
        </div>

        <CardHeader className="pb-2">
          <div className="text-muted-foreground flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </span>
          </div>
          <h3 className="group-hover:text-primary line-clamp-2 text-lg font-semibold transition-colors">
            {post.title}
          </h3>
        </CardHeader>

        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{post.excerpt}</p>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
