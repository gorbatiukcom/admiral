"use client";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react"; // To type the content

import { BlogPost } from "../../../utils/blog";

type Props = {
  post: BlogPost;
  content: ReactNode; 
};

export function BlogClientPage({ post, content }: Props) {
  return (
    <Box pb={20}>
      {/* Hero Section for Article */}
      <Box position="relative" height={["50svh", "50svh"]} w="100%">
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} priority />
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0,0,0,0.5)"
          flexDirection="column"
          justifyContent="flex-end"
          py={[6, 10]}
          px={[0, 10]}
        >
          <Container maxW="container.md">
            <Heading as="h1" size={["xl", "2xl"]} color="white" mb={4}>
              {post.title}
            </Heading>
            <Flex gap={4} color="whiteAlpha.900" fontSize="lg">
              <Text>{post.date}</Text>
              <Text>•</Text>
              <Text>{post.author}</Text>
            </Flex>
          </Container>
        </Flex>
      </Box>
      <Container maxW="container.md" mt={10}>
        {content} 
      </Container>
    </Box>
  );
}