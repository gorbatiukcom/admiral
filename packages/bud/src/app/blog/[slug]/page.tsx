import { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc"; 

import { getBlogPost, getBlogPosts } from "../../../utils/blog";
import { BlogClientPage } from "./BlogClientPage";
import MDXComponents from "../components/MDXComponents";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);

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


interface Props {
  params: Promise<{ slug: string; }>;
}

export default async function BlogPostPage(props: Props) {
  const post = getBlogPost((await props.params).slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: post.content,
    // You should pass your MDX components here for server-side compilation
    // components: (await import("../components/MDXComponents")).MDXComponents, // Adjust path/import as needed
    components: MDXComponents,
    options: {
        parseFrontmatter: true,
        // Add your plugins here
    },
  });

  return (
    <>
      <BlogClientPage post={post} content={content} />
    </>
  );
}