"use client";

import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column" p={[5, 10]} maxWidth="600px" mx="auto">
      <Heading mb={4}>Portfolio</Heading>
    </Flex>
  );
}
