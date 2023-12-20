"use client";

import { Flex, Text } from "@chakra-ui/react";

export const SubmitConfirmation = () => {
  return (
    <Flex
      p={[4, 10]}
      my={[4, 10]}
      mx="auto"
      width="100%"
      height={["calc(100vh - 152px - 32px)", "calc(100vh - 186px - 80px)"]}
      maxHeight="600px"
      maxWidth="1000px"
      border={[null, "1px dashed"]}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize={["20px", "24px"]} fontWeight={500}>
        Dziękujemy za złożenie zamówienia
      </Text>
      <Text fontSize={["20px", "24px"]} fontWeight={500} mt={[2, 4]} pb={["100px", 0]}>
        W najbliższym czasie oddzwonimy
      </Text>
    </Flex>
  );
};
