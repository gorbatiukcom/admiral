"use client";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

import { Image } from "@/components/image";
import { Link } from "@/components/link";

const NavigationLinks = [
  {
    url: "/",
    name: "Strona Główna",
  },
  {
    url: "/services",
    name: "Usługi",
  },
  {
    url: "/portfolio",
    name: "Portfolio",
  },
  {
    url: "/contacts",
    name: "Kontakty",
  },
];

const HeaderContent = ({
  isTransparent,
  pathname,
}: {
  isTransparent: boolean;
  pathname: string;
}) => {
  console.log("🚀 ~ pathname:", pathname);
  const color = isTransparent ? "textPrimaryWhite" : "textPrimary";
  return (
    <Flex
      width="100%"
      pt={0}
      px="120px"
      justifyContent="space-between"
      alignItems="flex-start"
      // bg={isTransparent ? "green" : undefined}
      position={isTransparent ? "relative" : undefined}
      marginBottom={isTransparent ? "-186px" : undefined}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={124}
          height={186}
          bg={isTransparent ? "white" : undefined}
          // onClick={logoHandler}
        />
      </Link>
      <Flex pt="40px">
        {NavigationLinks.map(({ url, name }) => (
          <Link
            key={name}
            href={url}
            py={2}
            px={5}
            color={color}
            fontSize="20px"
            lineHeight="40px"
            cursor="pointer"
            _hover={{
              color: "brand.blue",
            }}
            position="relative"
            _before={
              pathname === url
                ? {
                    content: `""`,
                    position: "absolute",
                    display: "block",
                    width: "40%",
                    height: "2px",
                    bottom: 0,
                    left: "calc(50% - 20%)",
                    background: "brand.blue",
                    pointerEvents: "none",
                    borderRadius: "2px",
                  }
                : undefined
            }
          >
            {name}
          </Link>
        ))}
      </Flex>
      <Link
        href="tel:+48536089652"
        py={2}
        px={5}
        pt="48px"
        mr={-5}
        color={color}
        fontSize="20px"
        lineHeight="40px"
        cursor="pointer"
        _hover={{
          color: "brand.blue",
        }}
      >
        +48 536 089 652
      </Link>
    </Flex>
  );
};

const navItems = [
  {
    title: "lol",
    element: <Flex>Lol</Flex>,
  },
];
export const Header = ({ children }: { children: any }) => {
  const pathname = usePathname();
  const isTransparent = ["/"].includes(pathname);

  return (
    <Box
      _before={
        isTransparent
          ? {
              content: `""`,
              position: "absolute",
              display: "block",
              width: "100%",
              height: "186px",
              top: 0,
              left: 0,
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0) 80%)",
              pointerEvents: "none",
            }
          : undefined
      }
    >
      <HeaderContent isTransparent={isTransparent} pathname={pathname} />

      {children}
    </Box>
  );
};
