import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { Container } from '@/components/layout';
import { PostHeader } from '@/components/blog';
import { getPostBySlug, getPostSlugs } from '@/lib/mdx';

import 'katex/dist/katex.min.css';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Jesse Brookins`,
    description: post.excerpt,
  };
}

const rehypePrettyCodeOptions = {
  theme: { dark: 'github-dark', light: 'github-light' },
  keepBackground: true,
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) notFound();

  return (
    <Container size="small" className="py-20">
      <PostHeader post={post} />
      <article className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-primary prose-code:before:content-none prose-code:after:content-none max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkMath],
              rehypePlugins: [rehypeSlug, rehypeKatex, [rehypePrettyCode, rehypePrettyCodeOptions]],
            },
          }}
        />
      </article>
    </Container>
  );
}
