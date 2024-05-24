"use client";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef } from "react";
import { IoMenu, IoMenuSharp } from "react-icons/io5";

import { Image } from "@/components/image";
import { Link } from "@/components/link";

import { SocialMediaLinks } from "../SocialMediaLinks";

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
    <Flex
      width="100%"
      bg="black"
      color="textPrimaryWhite"
      px={["72px"]}
      py={[10]}
      borderRadius="20px 20px 0 0"
      gap={16}
    >
      <Flex gap={16}>
        <Link href="/">
          <Image
            src="/images/logo_sm_x4.jpg"
            alt="logo"
            width={100}
            height={140}
            objectFit="cover"
            bg="white"
            borderRadius="8px"
          />
        </Link>
        <Flex flexDirection="column">
          <Heading mb={5} size="lg">
            Menu
          </Heading>
          <Flex flexDirection="column" gap={1}>
            {NavigationLinks.map(({ url, segment, name }) => (
              <Link
                key={name}
                href={url}
                color={activeSegment === segment ? "brand.blue" : "textPrimaryWhite"}
                fontSize="lg"
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
      </Flex>
      <Flex flexDirection="column">
        <Heading mb={5} size="lg">
          Kontakt
        </Heading>
        <Flex flexDirection="column" gap={1}>
          <Text fontSize="lg">email</Text>
          <Text fontSize="lg">tel</Text>
          <Text fontSize="lg">social</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
