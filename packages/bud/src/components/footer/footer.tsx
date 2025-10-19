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
    url: "/uslugi",
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
        py={[10, 16]}
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
            color="brand.blue"
            borderRadius="12px"
            transitionDuration="200ms"
            _hover={{ color: "white" }}
            width="max-content"
          >
            <Icon as={LogoSm} width="100px" height="22px" />
          </Link>

          <Box mt={[4, 10]}>
            <Text color="textSecondary">©️ {new Date().getFullYear()} Budcor</Text>
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
                color={activeSegment === segment ? "brand.blue" : ""}
                fontSize="md"
                cursor="pointer"
                _hover={{
                  color: activeSegment === segment ? undefined : "brand.blue",
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
                url: "mailto:budcor.info@gmail.com",
                name: "budcor.info@gmail.com",
              },
              {
                url: "tel:+48794510151",
                name: "tel: +48 794 510 151",
              },
              {
                url: "https://www.facebook.com/profile.php?id=61566105481215",
                name: "Facebook",
              },
              {
                url: "https://www.instagram.com/budcor_",
                name: "Instagram",
              },
            ].map(({ url, name }) => (
              <Link
                key={name}
                href={url}
                fontSize="md"
                cursor="pointer"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  color: "brand.blue",
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
                url: "/uslugi/uslugi-budowlane",
                name: "Remont mieszkań",
              },
              {
                url: "/uslugi/remont-pod-klucz",
                name: 'Remont mieszkania "pod klucz"',
              },
              {
                url: "/uslugi/projektowanie-wnetrz",
                name: "Projektowanie wnętrz",
              },
            ].map(({ url, name }) => (
              <Link
                key={name}
                href={url}
                fontSize="md"
                cursor="pointer"
                // target={isExternal ? "_blank" : undefined}
                _hover={{
                  color: "brand.blue",
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
