"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";

export const Services = () => {
  return (
    <>
      <Flex
        // display={["none", "flex"]}
        flexDirection="column"
        mx="auto"
        maxWidth="container.max"
        p={[4, 10]}
        mt={[5, 0]}
      >
        <Heading textAlign="center" fontWeight={500}>
          Dostępne ceny
        </Heading>
        <Text
          fontSize={["md", "2xl"]}
          color="textSecondary"
          textAlign="center"
          maxWidth="container.md"
          mt={[5, 10]}
          mx="auto"
        >
          Oferujemy{" "}
          <Text as="span" color="textPrimaryWhite">
            konkurencyjne ceny na wszystkie rodzaje prac
          </Text>
          , zachowując przy tym wysoką jakość wykonania. Elastyczny system ustalania cen i
          przejrzystość rozliczeń sprawiają, że nasze usługi są dostępne dla szerokiego grona
          klientów.
        </Text>
        <Text color="brand.orange" fontSize={["md", "2xl"]} textAlign="center" mt={[10, "80px"]}>
          Rabat w zależności od metrażu projektu:
        </Text>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent={["flex-start", "space-between"]}
          color="brand.orange"
          fontSize={["md", "2xl"]}
          gap={[2, 4]}
          opacity={0.8}
          mt={[2, 0]}
        >
          <Text width="100%" textAlign={["center", "left"]}>
            od 50m2 do 100m2 - 4%
          </Text>
          <Text width="100%" textAlign="center">
            od 100m2 do 300m2 - 6%
          </Text>
          <Text width="100%" textAlign={["center", "right"]}>
            od 300m2 - 8%
          </Text>
        </Flex>
      </Flex>

      <ServicesDesktop />
      <ServicesMobile />
    </>
  );
};
