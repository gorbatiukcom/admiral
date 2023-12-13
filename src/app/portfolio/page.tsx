"use client";

import { Flex, Image, Text } from "@chakra-ui/react";

enum Projects {
  basic = "basic",
  advanced = "advanced",
  authorSupervision = "authorSupervision",
  comprehensive = "comprehensive",
}

type Project = keyof typeof Projects;

const PortfolioProjects = [
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
  {
    name: "Budynek w Łodżi",
    src: "/images/portfolio_1.png",
  },
];

export default function Home() {
  return (
    // <Flex flexWrap="wrap" p={2} gap={2} pt="252px" pb="16px" bg="black">
    <Flex flexWrap="wrap" p={2} gap={2} mt="52px" pb="16px">
      {PortfolioProjects.map(({ name, src }) => {
        return (
          <Flex
            key={name}
            position="relative"
            width="calc(50% - 4px)"
            role="group"
            cursor="pointer"
          >
            <Image
              src={src}
              alt={name}
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
        );
      })}
    </Flex>
  );
}
