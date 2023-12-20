"use client";

import { Button, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle, IoCheckmarkCircle } from "react-icons/io5";

import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { Project } from "@/constants/portfolio";
import { Projects, ProjectsDetalis } from "@/constants/projects";

import { ProjectsLinks, Services, Steps } from "./services";

export default function ServicesMobile() {
  const [project, setProject] = useState(Projects.basic as Project);

  return (
    <Flex display={["flex", "none"]} flexDirection="column" p={4} pb={10}>
      <Flex width="100%" justifyContent="space-between">
        <Icon
          as={IoArrowBackCircle}
          boxSize="44px"
          onClick={() => setProject(ProjectsLinks[project].prev)}
        />
        <Text fontSize="26px" fontWeight={400}>
          {ProjectsDetalis[project].name}
        </Text>
        <Icon
          as={IoArrowForwardCircle}
          boxSize="44px"
          onClick={() => setProject(ProjectsLinks[project].next)}
        />
      </Flex>

      <Flex flexDirection="column" gap={4} mt={10}>
        {Services.map(({ name, projects }, index) => {
          if (!projects.includes(project)) return null;
          return (
            <Flex key={name} width="100%" justifyContent="space-between">
              <Text fontSize="16px" fontWeight={300}>
                {name}
              </Text>
              {projects.includes(project) ? (
                <Icon
                  as={IoCheckmarkCircle}
                  boxSize="20px"
                  color={projects.includes(project) ? "brand.blue" : "transparent"}
                  mr="-2px"
                />
              ) : (
                <Flex
                  width="16px"
                  height="16px"
                  minWidth="16px"
                  border="1px solid"
                  borderColor="brand.blue"
                  borderRadius="full"
                ></Flex>
              )}
            </Flex>
          );
        })}
      </Flex>

      <Text fontSize="20px" fontWeight={300} mx="auto" mt={8}>
        {ProjectsDetalis[project].price}
      </Text>

      <Link href={`/services/order?project=${project}`} mt={4}>
        <Button
          bg="black"
          color="white"
          borderRadius="10px"
          fontWeight={400}
          fontSize="20px"
          px={7}
          width="100%"
          height="44px"
          _hover={{
            bg: "gray.800",
            color: "brand.blue",
          }}
        >
          ZAMÓWICZ
        </Button>
      </Link>

      <Text
        fontSize="24px"
        fontWeight={300}
        textAlign="center"
        borderBottom="0.5px solid"
        pb={3}
        mb={5}
        mt={10}
      >
        Algorytm współpracy i opłat
      </Text>
      {Steps.map(({ description }, index) => {
        return (
          <Flex
            key={description}
            justifyContent="space-around"
            alignItems="center"
            width="100%"
            mb={3}
          >
            <Text fontSize="72px">{index + 1}</Text>
            <Text fontSize="16px" fontWeight={300} px={2} maxWidth="180px">
              {description}
            </Text>
          </Flex>
        );
      })}
      <Text fontSize={["22px", "24px"]} fontWeight={300} textAlign="center" mt="60px" pb={5}>
        Jest możliwość wziąć na raty wszystkie rodzaje usług RRSO 0%
      </Text>
      <Flex width="260px" height="4px" bg="brand.blue" mx="auto" borderRadius="2px" />
    </Flex>
  );
}
