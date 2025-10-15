"use client";

import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle, IoCheckmarkCircle } from "react-icons/io5";

import { Link } from "../../../components/link";
import {
  DesignProject,
  DesignProjects,
  ProjectsDetalis,
  ProjectsLinks,
  Services,
  Steps,
} from "./projektowanie-wnetrz-data";

export function ProjektowanieWnetrzMobile() {
  const [activeProject, setProject] = useState(
    DesignProjects["projektowanie-wnetrz-koncepcja"] as DesignProject,
  );

  return (
    <Flex display={["flex", "none"]} flexDirection="column" p={4} pb={10} position="relative">
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Icon
          as={IoArrowBackCircle}
          boxSize="38px"
          onClick={() => setProject(ProjectsLinks[activeProject].prev)}
        />
        <Text
          fontSize="2xl"
          lineHeight="30px"
          fontWeight={500}
          // bg="white"
          color="textPrimaryWhite"
          width="100%"
          textAlign="center"
          py="22px"
        >
          {ProjectsDetalis[activeProject].name}
        </Text>
        <Icon
          as={IoArrowForwardCircle}
          boxSize="38px"
          onClick={() => setProject(ProjectsLinks[activeProject].next)}
        />
      </Flex>

      <Flex flexDirection="column" gap={4} mt={10}>
        {Services.map(({ name, projects }, index) => {
          // if (!projects.includes(activeProject)) return null;
          return (
            <Flex key={name} width="100%" justifyContent="space-between" gap={2}>
              <Text fontSize="16px" fontWeight={300}>
                {name}
              </Text>
              {projects.includes(activeProject) ? (
                <Icon
                  as={IoCheckmarkCircle}
                  boxSize="20px"
                  color={projects.includes(activeProject) ? "brand.blueLight" : "transparent"}
                  mr="-2px"
                />
              ) : (
                <Flex
                  width="16px"
                  height="16px"
                  minWidth="16px"
                  border="1px solid"
                  borderColor="brand.blueLight"
                  borderRadius="full"
                ></Flex>
              )}
            </Flex>
          );
        })}
      </Flex>

      <Text fontSize="20px" fontWeight={300} mx="auto" mt={8}>
        {ProjectsDetalis[activeProject].price}
      </Text>

      <Link href={`/uslugi/order?project=${activeProject}`} mt={4}>
        <Button
          bg="white"
          color="black"
          borderRadius="10px"
          fontWeight={600}
          fontSize="20px"
          px={7}
          width="100%"
          height="44px"
          _hover={{
            color: "brand.blue",
          }}
        >
          Zamówić
        </Button>
      </Link>
      <>
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
      </>
      <Text fontSize={["22px", "24px"]} fontWeight={300} textAlign="center" mt="60px" pb={5}>
        Jest możliwość wziąć na raty wszystkie rodzaje usług RRSO 0%
      </Text>
      <Flex width="260px" height="4px" bg="brand.blue" mx="auto" borderRadius="2px" />
    </Flex>
  );
}
