"use client";

import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { Link } from "@/components/link";

const SocialMediaLinks = [
  {
    url: "#",
    name: "behance",
  },
  {
    url: "#",
    name: "instagram",
  },
  {
    url: "#",
    name: "facebook",
  },
];

export default function Home() {
  return (
    <Box
      bgColor="red"
      bg="linear-gradient(rgba(26,26,26,0.25), rgba(26,26,26,0.25)), url(/images/bg-image.png) center center no-repeat"
      bgSize="cover"
      height="100vh"
      // minHeight="1000px"
    >
      <Flex flexDirection="column" justifyContent="flex-start" height="100%" px="80px" pb="40px">
        <Flex minHeight="186px"></Flex>
        <Flex flexDirection="column" height="100%" justifyContent="center">
          <Heading fontSize="60px" fontWeight={400} color="textPrimaryWhite" maxWidth="600px">
            Nowoczesne podejście do aranżacji wnętrz
          </Heading>
          <Link href="/contacts" mt="120px" width="max-content">
            <Button
              width="max-content"
              height="60px"
              px="70px"
              background="linear-gradient(93.04deg, rgba(50, 50, 50, 0.4) -9.18%, rgba(0, 0, 0, 0.4) 111.7%)"
              backdropFilter="blur(10px)"
              color="textPrimaryWhite"
              fontSize="24px"
              lineHeight="36px"
              borderRadius={0}
              transition="backdrop-filter 0.2s"
              fontWeight={400}
              _hover={{
                backdropFilter: "blur(2px)",
              }}
            >
              Wycena Online
            </Button>
          </Link>
        </Flex>
        <Flex mr={-3}>
          <Flex width="100%" justifyContent="flex-end">
            {SocialMediaLinks.map(({ url, name }) => (
              <Link
                key={name}
                href={url}
                px={3}
                color="textPrimaryWhite"
                fontSize="18px"
                lineHeight="40px"
                cursor="pointer"
                fontWeight={600}
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
    </Box>
  );
}
