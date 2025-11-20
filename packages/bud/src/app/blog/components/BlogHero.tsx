"use client";
import { Flex, Heading, Text } from "@chakra-ui/react";

export const BlogHero = () => {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight={["50svh", "50svh"]}
      bg="url(/images/blog/blog-hero.png)"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      position="relative"
      color="white"
      textAlign="center"
      px={5}
    >
      <Flex
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0,0,0,0.3)"
        zIndex={1}
      />
      <Flex
        flexDirection="column"
        zIndex={2}
        gap={4}
        w="100%"
        maxWidth="container.max"
        minHeight={["50svh", "50svh"]}
        justifyContent="flex-end"
        alignItems="flex-start"
        py={[10, "80px"]}
        px={5}
        // bg="red"
      >
        <Heading as="h1" size={["2xl", "3xl"]}>
          Blog
        </Heading>
        <Text fontSize={["lg", "2xl"]} textAlign="left">
          Etapy remontu mieszkania <br /> krok po kroku
        </Text>
      </Flex>
    </Flex>
  );
};
