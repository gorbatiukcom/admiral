"use client";

import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { Link } from "@/components/link";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";

export default function Home() {
  return (
    <Box
      bgColor="red"
      bg="linear-gradient(rgba(26,26,26,0.25), rgba(26,26,26,0.25)), url(/images/bg-image.png)"
      bgRepeat="no-repeat"
      bgPosition={["25% 75%", "center, center"]}
      bgSize="cover"
      height="var(--chakra-vh)"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        height="100%"
        px={["16px", "80px"]}
        pb={[4, 10]}
      >
        <Flex minHeight={["152px", "186px"]}></Flex>
        <Flex flexDirection="column" height="100%" justifyContent="center">
          <Heading
            fontSize={["26px", "60px"]}
            fontWeight={400}
            color="textPrimaryWhite"
            maxWidth={["240px", "600px"]}
          >
            Nowoczesne podejście do aranżacji wnętrz
          </Heading>
          <Link href="/contacts" mt="120px" width="max-content">
            <Button
              width="max-content"
              height={["48px", "60px"]}
              px={["40px", "70px"]}
              background="radial-gradient(#0000,rgba(0, 163, 255, 0.6))"
              backdropFilter="blur(10px)"
              color="textPrimaryWhite"
              fontSize={["20px", "24px"]}
              borderRadius={8}
              transition="0.2s"
              fontWeight={400}
              _hover={{
                background: "brand.blue",
              }}
            >
              Wycena Online
            </Button>
          </Link>
        </Flex>
        <Flex width="100%" justifyContent="flex-end" gap={[4, 6]}>
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
            >
              {name}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
