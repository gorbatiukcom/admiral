"use client";

import { Flex, Image, Text } from "@chakra-ui/react";

import { Link } from "@/components/link";
import { PortfolioProjects } from "@/constants/portfolio";

export default function Home() {
  return (
    // <Flex flexWrap="wrap" p={2} gap={2} pt="252px" pb="16px" bg="black">
    <Flex flexWrap="wrap" p={2} gap={2} mt="52px" pb="16px">
      {PortfolioProjects.map(({ name, image, projectId }) => {
        return (
          <Link href={`/portfolio/${projectId}`} key={name} width="calc(50% - 4px)">
            <Flex key={name} position="relative" role="group" cursor="pointer">
              <Image
                src={image}
                alt={name}
                width="100%"
                borderRadius="8px"
                _groupHover={{
                  filter: "auto",
                  brightness: "50%",
                  transitionDuration: "0.2s",
                }}
              />
              <Text
                position="absolute"
                bottom="48px"
                left="48px"
                color="transparent"
                fontSize="40px"
                _groupHover={{
                  color: "white",
                  transitionDuration: "0.2s",
                }}
              >
                {name}
              </Text>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}
