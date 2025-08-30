"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoAdd } from "react-icons/io5";

import { Link } from "../../components/link";
import { ServicesBud } from "./services-data";

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
        <Heading textAlign="center" fontWeight={500} as="p">
          Nasze usługi
        </Heading>
        <Text
          fontSize={["md", "2xl"]}
          color="textSecondary"
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
            {ServicesBud.remont.title}
          </Heading>
          <Text fontSize={["sm", "lg"]} textAlign="center" mt={[5]} mx="auto">
            {ServicesBud.remont.description}
          </Text>
          <Flex
            flexDirection={["column", "row"]}
            justifyContent="space-around"
            flexWrap="wrap"
            my={[5, 10]}
            gap={[5, 10]}
          >
            {ServicesBud.remont.services.map(({ id, title, points }) => (
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
              </Flex>
            ))}
          </Flex>
          {ServicesBud.remont.description2 && (
            <Text fontSize={["lg"]} textAlign="center" mb={[5, 10]} mx="auto">
              {ServicesBud.remont.description2}
            </Text>
          )}
          <Link href={`/services/order?project=${ServicesBud.remont.id}`} mx="auto">
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
      {/* Rabat */}
      <Flex flexDirection="column" mx="auto" maxWidth="container.max" p={[4, 10]} my={[10, 10]}>
        <Text color="brand.blue" fontSize={["md", "2xl"]} textAlign="center">
          Rabat w zależności od metrażu projektu:
        </Text>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent={["flex-start", "space-between"]}
          color="brand.blue"
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

      {/* KEY REMONT */}
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
            {ServicesBud.keyRemont.title}
          </Heading>
          <Text fontSize={["sm", "lg"]} textAlign="center" mt={[5]} mx="auto">
            {ServicesBud.keyRemont.description}
          </Text>
          <Flex flexDirection={["column"]} flexWrap="wrap" my={[5, 10]} pl={[0, 10]} pt={10}>
            {ServicesBud.keyRemont.services.map(({ id, title, points }, index) => (
              <Flex key={id} flexDirection="row" gap={[1]} width={["100%"]}>
                <Flex
                  position="relative"
                  sx={
                    index + 1 !== ServicesBud.keyRemont.services.length
                      ? {
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: "4px",
                            top: "10px",
                            bottom: "0",
                            width: "2px",
                            bg: "white",
                            zIndex: 1,
                          },
                        }
                      : undefined
                  }
                >
                  <Flex width="10px" height="10px" borderRadius="full" bgColor="white" mr={[3]} />
                </Flex>
                <Text
                  fontSize="72px"
                  fontWeight={500}
                  mr={[8]}
                  minWidth="48px"
                  lineHeight="100%"
                  mt="-30px"
                >
                  {index + 1}
                </Text>
                <Flex flexDirection="column" pb={"70px"} mt="-26px">
                  {points.map((text) => {
                    return (
                      <Text key={text} color="textSecondary">
                        {text}
                      </Text>
                    );
                  })}
                </Flex>
              </Flex>
            ))}
          </Flex>
          {ServicesBud.keyRemont.description2 && (
            <Text fontSize={["lg"]} textAlign="center" mb={[5, 10]} mx="auto">
              {ServicesBud.keyRemont.description2}
            </Text>
          )}
          <Link href={`/services/order?project=${ServicesBud.keyRemont.id}`} mx="auto">
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
