"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { BackSection } from "../back-section";
import { ProjektowanieWnetrzDesktop } from "./ProjektowanieWnetrzDesktop";
import { ProjektowanieWnetrzMobile } from "./ProjektowanieWnetrzMobile";

export const ProjektowanieWnetrz = () => {
  return (
    <>
      <BackSection link="/uslugi" />
      <Flex
        // display={["none", "flex"]}
        flexDirection="column"
        mx="auto"
        maxWidth="container.max"
        px={[4, 20]}
        pt={[4, 10]}
        pb={[4, 20]}
        mt={[5, 0]}
      >
        <Heading textAlign="center" fontWeight={500} as="p" size={["lg", "xl"]}>
          Projektowanie wnętrz
        </Heading>
        <Text
          fontSize={["sm", "2xl"]}
          color="textPrimaryWhite"
          textAlign="center"
          mt={[5, 10]}
          mx="auto"
        >
          Projektowanie wnętrz to tworzenie przestrzeni, która odzwierciedla Twój charakter i styl
          życia, z uwzględnieniem każdego detalu i Twoich oczekiwań
        </Text>
      </Flex>

      <ProjektowanieWnetrzDesktop />
      <ProjektowanieWnetrzMobile />
    </>
  );
};
