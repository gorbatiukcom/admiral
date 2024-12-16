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
  Icon,
  IconButton,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef } from "react";
import { IoArrowForward, IoMenu, IoMenuSharp } from "react-icons/io5";

import { Image } from "../image";
import { Link } from "../link";
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

const DesktopHeader = ({
  isTransparent,
  segment: activeSegment,
}: {
  isTransparent: boolean;
  segment: string | null;
}) => {
  const color = isTransparent ? "textPrimaryWhite" : "textPrimaryWhite";
  return (
    <Flex px={10}>
      <Flex
        display={["none", "flex"]}
        width="100%"
        justifyContent="space-between"
        alignItems="flex-start"
        position={isTransparent ? "relative" : undefined}
        marginBottom={isTransparent ? "-188px" : undefined}
        maxWidth="container.max"
        mx="auto"
      >
        <Link href="/" pt={3} pb={3} px={3} bg="white" borderRadius="0px 0px 12px 12px">
          <Image src="/images/logo.svg" alt="logo" width={100} height={164} objectFit="contain" />
        </Link>
        <Flex pt="40px">
          {NavigationLinks.map(({ url, segment, name }) => (
            <Link
              key={name}
              href={url}
              px={5}
              color={activeSegment === segment ? "textPrimary" : color}
              fontSize="20px"
              lineHeight="48px"
              fontWeight={500}
              cursor="pointer"
              _hover={{
                color: activeSegment === segment ? undefined : "brand.orange",
              }}
              position="relative"
              zIndex={0}
              _before={
                activeSegment === segment
                  ? {
                      content: `""`,
                      position: "absolute",
                      display: "block",
                      width: "100%",
                      height: "100%",
                      bottom: 0,
                      left: 0,
                      background: "white",
                      pointerEvents: "none",
                      borderRadius: "full",
                      zIndex: -1,
                    }
                  : undefined
              }
            >
              {name}
            </Link>
          ))}
          <Link
            href="https://budcor.com/"
            pl={5}
            pr={3}
            bg="brand.blue"
            fontSize="20px"
            lineHeight="48px"
            fontWeight={500}
            cursor="pointer"
            _hover={{
              color: "black",
            }}
            position="relative"
            zIndex={0}
            borderRadius="100px"
          >
            <Flex alignItems="center" justifyContent="space-between" gap={4}>
              Budcor
              <Flex
                bg="white"
                color="black"
                p={1}
                borderRadius="100%"
                justifyContent="center"
                alignItems="center"
                transform="rotate(-45deg)"
              >
                <Icon as={IoArrowForward} />
              </Flex>
            </Flex>
          </Link>
        </Flex>
        <Link
          href="tel:+48577125400"
          py={2}
          px={5}
          pt="48px"
          mr={-5}
          color={color}
          fontSize="20px"
          fontWeight={500}
          lineHeight="40px"
          cursor="pointer"
          _hover={{
            color: "brand.orange",
          }}
        >
          +48 577 125 400
        </Link>
      </Flex>
    </Flex>
  );
};

const MobileHeader = ({
  isTransparent,
  segment: activeSegment,
}: {
  isTransparent: boolean;
  segment: string | null;
}) => {
  const burgerColor = "textPrimaryWhite";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null as any);

  return (
    <Flex
      display={["flex", "none"]}
      width="100%"
      pt={0}
      pl={0}
      pr={4}
      position={isTransparent ? "relative" : undefined}
      marginBottom={isTransparent ? "-164px" : undefined}
      justifyContent="space-between"
    >
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={164}
          objectFit="contain"
          p={2}
          bg="white"
          borderRadius="0px 0px 8px 0px"
        />
      </Link>
      <IconButton
        mt={2}
        mr="-6px"
        ref={btnRef}
        aria-label="menu"
        color={burgerColor}
        icon={<Icon as={IoMenuSharp} boxSize="36px" />}
        background="transparent"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        variant="small"
      >
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="textPrimaryWhite" size="lg" />
          <DrawerBody display="flex" flexDirection="column" justifyContent="center" px={5} gap={4}>
            {NavigationLinks.map(({ url, segment, name }) => (
              <Link
                key={name}
                href={url}
                py={1}
                px={5}
                fontWeight={500}
                fontSize="20px"
                lineHeight="40px"
                cursor="pointer"
                _hover={{
                  color: "brand.orange",
                }}
                position="relative"
                bg={activeSegment === segment ? "white" : "black"}
                // color="textPrimaryWhite"
                color={activeSegment === segment ? "textPrimary" : "textPrimaryWhite"}
                borderRadius={activeSegment === segment ? "100px" : undefined}
                textAlign={activeSegment === segment ? "center" : undefined}
                onClick={onClose}
              >
                {name}
              </Link>
            ))}
            <Link
              href="https://budcor.com/"
              py={1}
              pl={5}
              pr={2}
              fontWeight={500}
              fontSize="20px"
              lineHeight="40px"
              cursor="pointer"
              _hover={{
                color: "dark",
              }}
              position="relative"
              bg="brand.blue"
              color="textPrimaryWhite"
              borderRadius="100px"
              onClick={onClose}
            >
              <Flex alignItems="center" justifyContent="space-between">
                Budcor
                <Flex
                  bg="white"
                  color="black"
                  p={1}
                  borderRadius="100%"
                  justifyContent="center"
                  alignItems="center"
                  transform="rotate(-45deg)"
                >
                  <Icon as={IoArrowForward} boxSize={6} />
                </Flex>
              </Flex>
            </Link>
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start" p={5}>
            <Flex flexDirection="column" gap={2} width="100%">
              <Link
                href="tel:+48577125400"
                color="textPrimaryWhite"
                fontSize={["14px", "18px"]}
                lineHeight={["21px", "40px"]}
                fontWeight={600}
                cursor="pointer"
                _hover={{
                  color: "brand.orange",
                }}
              >
                +48 577 125 400
              </Link>

              <Flex width="100%" justifyContent="flex-start" gap={[4, 6]}>
                {SocialMediaLinks.map(({ url, name }) => (
                  <Link
                    key={name}
                    href={url}
                    color="textPrimaryWhite"
                    fontSize={["14px", "18px"]}
                    lineHeight={["21px", "40px"]}
                    cursor="pointer"
                    fontWeight={600}
                    _hover={{
                      color: "brand.orange",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export const Header = () => {
  const segment = useSelectedLayoutSegment();

  const isTransparent = segment === null;

  return (
    <>
      <MobileHeader isTransparent={isTransparent} segment={segment} />
      <DesktopHeader isTransparent={isTransparent} segment={segment} />
    </>
  );
};
