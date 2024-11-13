"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";

import { LogoSm } from "../icons/logo_sm";
import { Link } from "../link";

const NavigationLinks = [
  {
    url: "/",
    segment: null,
    name: "Strona Główna",
  },
  {
    url: "/services",
    segment: "services",
    name: "Usługi",
  },
  {
    url: "/portfolio",
    segment: "portfolio",
    name: "Portfolio",
  },
  {
    url: "/contacts",
    segment: "contacts",
    name: "Kontakty",
  },
];

export const Footer = () => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Flex width="100%" bg="bgPrimary" borderRadius="20px 20px 0px 0px" mt={[4, 10]}>
      <Flex
        flexDirection={["column", "row"]}
        maxWidth="container.max"
        width="100%"
        mx="auto"
        px={[4, 10]}
        py={[10]}
        gap={[10, 16]}
      >
        <Flex
          width={["100%", "18%"]}
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
          order={[10, 0]}
        >
          <Link
            href="/"
            color="black"
            p={2}
            borderRadius="12px"
            transitionDuration="200ms"
            _hover={{ color: "brand.orange" }}
            width="max-content"
            bg="white"
          >
            <Icon as={LogoSm} width={85.3} height={135} />
          </Link>

          <Box mt={[4, 10]}>
            <Text color="textSecondary">©️ 2024 Admiral Interior</Text>
          </Box>
        </Flex>
        <Flex flexDirection="column" width={["100%", "20%"]}>
          <Text fontSize="lg" color="textSecondary" fontWeight={600} mb={2}>
            Menu
          </Text>
          <Flex flexDirection="column" gap={1}>
            {NavigationLinks.map(({ url, segment, name }) => (
              <Link
                key={name}
                href={url}
                color={activeSegment === segment ? "brand.orange" : ""}
                fontSize="md"
                cursor="pointer"
                _hover={{
                  color: activeSegment === segment ? undefined : "brand.orange",
                }}
              >
                {name}
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" width={["100%", "30%"]}>
          <Text fontSize="lg" color="textSecondary" fontWeight={600} mb={2}>
            Kontakt
          </Text>
          <Flex flexDirection="column" gap={1}>
            {[
              {
                url: "mailto:admiralinterior.info@gmail.com",
                name: "admiralinterior.info@gmail.com",
              },
              {
                url: "tel:+48577125400",
                name: "tel: +48 577 125 400",
              },
            ].map(({ url, name }) => (
              <Link
                key={name}
                href={url}
                fontSize="md"
                cursor="pointer"
                _hover={{
                  color: "brand.orange",
                }}
              >
                {name}
              </Link>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" width={["100%", "30%"]}>
          {/* <Box height="27px" mb={2} /> */}
          <Flex flexDirection="column" gap={1}>
            {[
              {
                url: "/services",
                name: "Projektowanie wnętrz Warszawa",
              },
              {
                url: "/services",
                name: "Projektowanie wnętrz Łódż",
              },
              {
                url: "/services",
                name: "Projektowanie wnętrz Lublin",
              },
            ].map(({ url, name }) => (
              <Link
                key={name}
                href={url}
                fontSize="md"
                cursor="pointer"
                _hover={{
                  color: "brand.orange",
                }}
              >
                {name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
