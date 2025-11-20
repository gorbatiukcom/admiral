import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { Metadata } from "next";

import { getBlogPosts } from "../../utils/blog";
import { BlogCard } from "./components/BlogCard";
import { BlogHero } from "./components/BlogHero";

export const metadata: Metadata = {
  title: "Blog | Budcor - Remonty Mieszkań pod Klucz",
  description:
    "Porady, inspiracje i wiedza na temat remontów mieszkań, wykończenia wnętrz i budownictwa. Sprawdź nasz blog.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <Box pb={20}>
      <BlogHero />

      <Container maxW="container.xl" mt={16}>
        <SimpleGrid columns={[1, 2]} spacing={8}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
