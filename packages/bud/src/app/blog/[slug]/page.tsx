import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

import { getBlogPost, getBlogPosts } from "../../../utils/blog";
import { BlogClientPage } from "./BlogClientPage";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Nie znaleziono artykułu",
    };
  }

  return {
    title: `${post.title} | Budcor`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content);

  return (
    <>
      <BlogClientPage post={post} source={mdxSource} />
    </>
  );
}
