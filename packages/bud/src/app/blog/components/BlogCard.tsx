"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";

import { Image } from "../../../components/image";
import { Link } from "../../../components/link";
import { BlogPost } from "../../../utils/blog";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} _hover={{ textDecoration: "none" }} width="100%">
      <Box
        position="relative"
        borderRadius="xl"
        overflow="hidden"
        height="400px"
        width="100%"
        role="group"
        transition="transform 0.3s ease"
        _hover={{ transform: "translateY(-5px)" }}
      >
        <Image src={post.image} alt={post.title} fill objectFit="cover" />
        <Flex
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          background="linear-gradient(180deg, rgba(255, 255, 255, 0.49) 0%, rgba(255, 255, 255, 0.22) 13.96%, rgba(182, 212, 250, 0) 28.85%, rgba(141, 189, 247, 0) 59.8%, rgba(54, 138, 240, 0.43) 75.96%, #0070F8 100%)"
          flexDirection="column"
          justifyContent="flex-end"
          p={6}
        >
          <Heading size="md" color="white" mb={2}>
            {post.title}
          </Heading>
        </Flex>
      </Box>
    </Link>
  );
};
