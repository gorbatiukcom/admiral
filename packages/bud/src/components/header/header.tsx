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

import { LogoSm } from "../icons/logo_sm";
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
  // {
  //   url: "/portfolio",
  //   segment: "portfolio",
  //   name: "Portfolio",
  // },
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
        alignItems="center"
        position={isTransparent ? "relative" : undefined}
        marginBottom={isTransparent ? "-96px" : undefined}
        maxWidth="container.max"
        mx="auto"
        py="20px"
        zIndex={10}
      >
        <Link
          href="/"
          color="brand.blue"
          borderRadius="8px"
          transitionDuration="200ms"
          _hover={{ color: "white" }}
          width="max-content"
          h={"48px"}
          display="flex"
          alignItems="center"
        >
          <Icon as={LogoSm} width="140px" height="31px" />
        </Link>
        <Flex>
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
                color: activeSegment === segment ? undefined : "brand.blue",
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
            href="https://admiralinterior.com/"
            pl={5}
            pr={3}
            bg="brand.orange"
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
              Admiral Interior
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
          href="tel:+48536089652"
          py={2}
          px={5}
          mr={-5}
          color={color}
          fontSize="20px"
          fontWeight={500}
          lineHeight="40px"
          cursor="pointer"
          _hover={{
            color: "brand.blue",
          }}
        >
          +48 536 089 652
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
      py={3}
      px={4}
      position={isTransparent ? "relative" : undefined}
      marginBottom={isTransparent ? "-72px" : undefined}
      justifyContent="space-between"
      alignItems="center"
      zIndex={10}
    >
      <Link
        href="/"
        color="brand.blue"
        borderRadius="8px"
        transitionDuration="200ms"
        _hover={{ color: "white" }}
        width="max-content"
        h={"48px"}
        display="flex"
        alignItems="center"
        // pt={3}
      >
        <Icon as={LogoSm} width="100px" height="22px" />
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
                  color: "brand.blue",
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
              href="https://admiralinterior.com/"
              py={1}
              pl={5}
              pr={2}
              fontWeight={500}
              fontSize="20px"
              lineHeight="40px"
              cursor="pointer"
              _hover={{
                color: "brand.blue",
              }}
              position="relative"
              bg="brand.orange"
              color="textPrimaryWhite"
              borderRadius="100px"
              onClick={onClose}
            >
              <Flex alignItems="center" justifyContent="space-between">
                Admiral Interior
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
                href="tel:+48536089652"
                color="textPrimaryWhite"
                fontSize={["14px", "18px"]}
                lineHeight={["21px", "40px"]}
                fontWeight={600}
                cursor="pointer"
                _hover={{
                  color: "brand.blue",
                }}
              >
                +48 536 089 652
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
                      color: "brand.blue",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </Link>
                ))}
              </Flex>
              <Link href="/contacts" mt={2} onClick={onClose}>
                <Button
                  width="100%"
                  height={["48px", "60px"]}
                  px={["16px", "32px"]}
                  bg="white"
                  color="textPrimary"
                  fontSize={["md", "24px"]}
                  borderRadius="full"
                  transition="0.2s"
                  fontWeight={500}
                  _hover={{
                    color: "brand.blue",
                  }}
                >
                  Zamów rozmowę telefoniczną
                </Button>
              </Link>
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
