"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { IoAdd } from "react-icons/io5";

import { Link } from "../../components/link";
import { ServicesBud } from "./services-data";

export default function ServicesDesktop() {
  return (
    <Flex display={["none", "flex"]} flexDirection="column" gap={[10]}>
      {ServicesBud.map(({ id, title, description, description2, services }) => (
        <Box key={id} px={[4, 10]}>
          <Flex
            flexDirection="column"
            mx="auto"
            maxWidth="container.max"
            bg="bgPrimary"
            borderRadius={["20px"]}
            p={[4, 10]}
          >
            <Heading textAlign="center" size={["lg"]} fontWeight={500}>
              {title}
            </Heading>
            <Text fontSize={["lg"]} textAlign="center" mt={[5]} mx="auto">
              {description}
            </Text>
            <Flex flexWrap="wrap" my={[5, 10]} gap={[5, 10]} justifyContent="space-around">
              {services.map(({ id, title, points }) => (
                <Flex key={id} flexDirection="column" gap={[1]} width="calc(100% / 3 - 28px)">
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
            {description2 && (
              <Text fontSize={["lg"]} textAlign="center" mb={[5, 10]} mx="auto">
                {description2}
              </Text>
            )}

            <Link href={`/services/order?project=${id}`} mx="auto">
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
              Każdy rodzaj remontu może obejmować dodatkowe usługi i prace, w zależności od
              specyfiki i wymagań klienta.
            </Text>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
