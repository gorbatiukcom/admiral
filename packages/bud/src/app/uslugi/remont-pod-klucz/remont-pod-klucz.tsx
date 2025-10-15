"use client";

import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "../../../components/link";
import { Projects } from "../../../constants/projects";
import { BackSection } from "../back-section";
import { Features, Points } from "./remont-pod-klucz-data";

const RemontPodKluczCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      gap={4}
      bg="brand.blueDark"
      p={[4, 5]}
      borderRadius={24}
      minHeight={["220px", "220px"]}
      width={["100%", "unset"]}
      minWidth={0}
    >
      <Text fontSize={["md", "3xl"]}>{title}</Text>
      <Text fontSize={["xs", "md"]}>{description}</Text>
    </Flex>
  );
};

export const RemontPodKlucz = () => {
  return (
    <>
      <BackSection link="/uslugi" />
      <Box px={[4, 10]}>
        <Flex
          flexDirection="column"
          mx="auto"
          maxWidth="container.max"
          pt={[4, 10]}
          pb={[4, 20]}
          mt={[5, 0]}
        >
          <Heading textAlign="center" fontWeight={500} as="p" size={["lg", "xl"]}>
            Remont pod klucz
          </Heading>
          <Text
            fontSize={["sm", "2xl"]}
            color="textPrimaryWhite"
            textAlign="center"
            mt={[5, 10]}
            mx="auto"
            whiteSpace="pre-wrap"
          >
            {`Remont pod klucz — wszystkie obowiązki po naszej stronie, a efekt cieszy Ciebie.
Ty po prostu opowiadasz, jak chcesz, aby wyglądał Twój dom lub mieszkanie — a my zajmujemy się wszystkim: od pierwszego spotkania i kosztorysu, aż po ostatni detal wykończenia wnętrza.`}
          </Text>

          <Heading
            textAlign="center"
            fontWeight={500}
            as="p"
            size={["lg", "lg"]}
            pt={[10, 20]}
            pb={[12]}
          >
            Przejmujemy cały proces
          </Heading>

          <Grid
            templateColumns={["repeat(2, minmax(0, 1fr))", "repeat(3, 1fr)"]}
            gap={[3]}
            width="100%"
            maxWidth="container.max"
            mx="auto"
          >
            {Features.map(({ title, description }) => (
              <RemontPodKluczCard key={title} title={title} description={description} />
            ))}
          </Grid>
          <Flex flexDirection={["column", "row"]} gap={[4, 10]} mt={[10, 20]}>
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              minWidth={["100%", "250px"]}
            >
              <Box>
                <Text fontSize={["xl", "3xl"]}>{Points.title}</Text>
                <Text fontSize={["xl", "3xl"]} fontWeight={500} mt={[0, 10]}>
                  {Points.price}
                </Text>
              </Box>
              <Link
                href={`/uslugi/order?project=${Projects["remont-pod-klucz"]}`}
                display={["none", "block"]}
              >
                <Button
                  bg="white"
                  color="black"
                  borderRadius="10px"
                  fontSize="20px"
                  px={7}
                  height="44px"
                  _hover={{
                    color: "brand.blue",
                  }}
                >
                  Zamówić
                </Button>
              </Link>
            </Flex>
            <Flex
              flexDirection="column"
              bg="#D5D5D5"
              color="black"
              py={[5, 10]}
              px={[5, 20]}
              gap={[4, 10]}
              borderRadius={24}
              fontSize={["sm", "xl"]}
            >
              {Points.points.map((point) => (
                <Text key={point}>{`• ${point}`}</Text>
              ))}
              <Text>{Points.description}</Text>
              <Flex display={["flex", "none"]} width="100%" justifyContent="flex-end">
                <Link href={`/uslugi/order?project=${Projects["remont-pod-klucz"]}`}>
                  <Button
                    bg="black"
                    color="white"
                    borderRadius="10px"
                    fontSize="20px"
                    px={7}
                    height="44px"
                    _hover={{
                      color: "brand.blue",
                    }}
                  >
                    Zamówić
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
