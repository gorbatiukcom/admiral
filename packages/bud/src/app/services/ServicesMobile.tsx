"use client";

import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle, IoCheckmarkCircle } from "react-icons/io5";

import { Link } from "../../components/link";
import { Project } from "../../constants/portfolio";
import { Projects, ProjectsDetalis } from "../../constants/projects";
import { ProjectsLinks, Services, Steps } from "./services-data";

export default function ServicesMobile() {
  const [activeProject, setProject] = useState(Projects.basic as Project);

  return (
    <Flex display={["flex", "none"]} flexDirection="column" p={4} pb={10} position="relative">
      <Flex width="100%" justifyContent="space-between">
        <Flex flexDirection="column">
          <Box
            width="100%"
            height="18px"
            bg="white"
            borderRadius="3px 0px 0px 12px"
            position="relative"
            _before={{
              content: `""`,
              position: "absolute",
              display: "block",
              width: "38px",
              height: "38px",
              top: "100%",
              left: 0,
              background: "transparent",
              pointerEvents: "none",
              borderRadius: "0px 100% 100% 0px",
              boxShadow: "22px 0px 0px 10px white",
            }}
          />
          <Icon
            as={IoArrowBackCircle}
            boxSize="38px"
            onClick={() => setProject(ProjectsLinks[activeProject].prev)}
          />
          <Box
            width="100%"
            height="18px"
            bg="white"
            borderRadius="12px 0px 0px 3px"
            position="relative"
          />
        </Flex>
        <Text
          fontSize="xl"
          lineHeight="30px"
          fontWeight={600}
          bg="white"
          color="textPrimary"
          width="100%"
          textAlign="center"
          py="22px"
        >
          {ProjectsDetalis[activeProject].name}
        </Text>
        <Flex flexDirection="column">
          <Box
            width="100%"
            height="18px"
            bg="white"
            borderRadius="0px 3px 12px 0px"
            position="relative"
            _before={{
              content: `""`,
              position: "absolute",
              display: "block",
              width: "38px",
              height: "38px",
              top: "100%",
              pointerEvents: "none",
              borderRadius: "100% 0px 0px 100%",
              boxShadow: "-22px 0px 0px 10px white",
            }}
          />
          <Icon
            as={IoArrowForwardCircle}
            boxSize="38px"
            onClick={() => setProject(ProjectsLinks[activeProject].next)}
          />
          <Box
            width="100%"
            height="18px"
            bg="white"
            borderRadius="0px 12px 3px 0px"
            position="relative"
          />
        </Flex>
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
                  color={projects.includes(activeProject) ? "brand.blue" : "transparent"}
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
        {ProjectsDetalis[activeProject].price}
      </Text>

      <Link href={`/services/order?project=${activeProject}`} mt={4}>
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
      {activeProject !== "comprehensive" ? (
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
      ) : null}
      <Text fontSize={["22px", "24px"]} fontWeight={300} textAlign="center" mt="60px" pb={5}>
        Jest możliwość wziąć na raty wszystkie rodzaje usług RRSO 0%
      </Text>
      <Flex width="260px" height="4px" bg="brand.blue" mx="auto" borderRadius="2px" />
    </Flex>
  );
}
