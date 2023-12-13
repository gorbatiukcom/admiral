"use client";

import { Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      p="68px"
      mt="60px"
      mx="auto"
      maxWidth="1000px"
      width="max-content"
      border="1px dashed"
      mb="100px"
    >
      <Flex flexDirection="column" borderRight="1px dashed" paddingRight="200px">
        <Text fontSize="96px" fontWeight={700} pb="68px">
          Cześć
        </Text>
        <Text fontSize="18px" fontWeight={300} color="brand.blue">
          Wpisz swoją wiadomosć tutaj...
        </Text>
        <Text fontSize="18px" fontWeight={300} color="brand.blue">
          Wpisz swój e-mail tutaj...
        </Text>
        <Text fontSize="18px" fontWeight={300} color="brand.blue">
          wysłać
        </Text>
      </Flex>
      <Flex flexDirection="column" paddingLeft="36px" maxWidth="360px">
        <Text fontSize="24px" fontWeight={600} pb="48px">
          Nazwa firmy i adres do korespondencji
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          Volantes Sp z o.o.
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          NIP: 725 230 67 13
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          Aleja Tadeusza Kościuszki 80/82 lok.301
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          Łódż 90-437
        </Text>
        <Text fontSize="24px" fontWeight={600} pt="80px" pb="48px">
          Kontakty
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          +48 730 205 952
        </Text>
        <Text fontSize="16px" fontWeight={400}>
          admiralinterior.info@gmail.com
        </Text>
      </Flex>
    </Flex>
  );
}
