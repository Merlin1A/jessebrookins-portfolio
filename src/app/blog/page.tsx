import { Metadata } from 'next';
import { Container } from '@/components/layout';
import { PostCard } from '@/components/blog';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog | Jesse Brookins',
  description: 'Technical articles on software engineering.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container className="py-20">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Technical articles, tutorials, and thoughts on software engineering.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-center">No posts yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
