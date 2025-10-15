"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoAdd } from "react-icons/io5";

import { Link } from "../../../components/link";
import { Projects } from "../../../constants/projects";
import { BackSection } from "../back-section";
import { UslugiBudowlaneData } from "./uslugi-budowlane-data";

export const UslugiBudowlane = () => {
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
        <Heading textAlign="center" fontWeight={500} as="p">
          Usługi budowlane
        </Heading>
        <Text
          fontSize={["md", "2xl"]}
          color="textPrimaryWhite"
          textAlign="center"
          mt={[5, 10]}
          mx="auto"
        >
          Oferujemy szeroki zakres usług remontowych dostosowanych do Twoich potrzeb i budżetu.
          Specjalizujemy się zarówno w prostych odświeżeniach mieszkań (malowanie ścian, wymiana
          podłóg, drobne naprawy), jak i w pełnym remoncie pod klucz, gdzie przejmujemy na siebie
          kompleksową realizację wszystkich etapów — od projektu po sprzątanie końcowe.
        </Text>
      </Flex>
      {/* REMONT */}
      <Box px={[4, 10]}>
        <Flex
          flexDirection="column"
          mx="auto"
          maxWidth="container.max"
          bg="bgPrimary"
          borderRadius={["20px"]}
          p={[4, 10]}
        >
          <Heading textAlign="center" size={["lg", "xl"]} fontWeight={500} whiteSpace="pre-wrap">
            {UslugiBudowlaneData.title}
          </Heading>
          <Text fontSize={["sm", "lg"]} textAlign="center" mt={[5]} mx="auto">
            {UslugiBudowlaneData.description}
          </Text>
          <Flex
            flexDirection={["column", "row"]}
            justifyContent="space-around"
            flexWrap="wrap"
            my={[5, 10]}
            gap={[5, 10]}
          >
            {UslugiBudowlaneData.services.map(({ id, title, points, description }) => (
              <Flex
                key={id}
                flexDirection="column"
                gap={[1]}
                width={["100%", "calc(100% / 3 - 28px)"]}
              >
                <Text textAlign="center" fontWeight={500} mb={[1]}>
                  {title}
                </Text>
                {points.map((text) => {
                  return (
                    <Text key={text} color="textSecondary">
                      {text}
                    </Text>
                  );
                })}
                {description ? (
                  <Text color="textSecondary" textAlign="center" mt={[5]}>
                    {description}
                  </Text>
                ) : null}
              </Flex>
            ))}
          </Flex>
          {UslugiBudowlaneData.description2 && (
            <Text fontSize={["lg"]} textAlign="center" mb={[5, 10]} mx="auto">
              {UslugiBudowlaneData.description2}
            </Text>
          )}
          <Link href={`/uslugi/order?project=${Projects["uslugi-budowlane"]}`} mx="auto">
            <Button
              size={["xl"]}
              width="max-content"
              borderRadius="100px"
              bg="rgba(114, 114, 114, 0.5)"
              color="textPrimaryWhite"
              py={[2]}
              pl={[4]}
              pr={[2]}
              _hover={{
                color: "textPrimary",
                bg: "white",
              }}
            >
              <Flex justifyContent="space-between" alignItems="center" width="100%" gap={10}>
                Zamówić
                <Flex bg="brand.blue" borderRadius="100%" p={1}>
                  <Icon as={IoAdd} boxSize={6} />
                </Flex>
              </Flex>
            </Button>
          </Link>
          <Text textAlign="center" color="brand.blue" fontSize={["lg"]} mt={[4, 8]}>
            Każdy rodzaj remontu może obejmować dodatkowe usługi i prace, w zależności od specyfiki
            i wymagań klienta.
          </Text>
        </Flex>
      </Box>
    </>
  );
};
