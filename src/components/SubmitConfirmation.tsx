"use client";

import { Flex, Text } from "@chakra-ui/react";

export const SubmitConfirmation = () => {
  return (
    <Flex
      p="40px"
      my="40px"
      mx="auto"
      width="100%"
      height="calc(100vh - 186px - 80px)"
      maxHeight="600px"
      maxWidth="1000px"
      border="1px dashed"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="24px" fontWeight={500}>
        Dziękujemy za złożenie zamówienia
      </Text>
      <Text fontSize="24px" fontWeight={500} mt={4}>
        W najbliższym czasie oddzwonimy
      </Text>
    </Flex>
  );
};
