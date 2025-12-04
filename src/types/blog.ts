export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
  published: boolean;
  featured?: boolean;
  coverImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}
