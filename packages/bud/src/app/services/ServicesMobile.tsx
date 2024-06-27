"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { IoAdd, IoArrowBackCircle, IoArrowForwardCircle, IoCheckmarkCircle } from "react-icons/io5";

import { Link } from "../../components/link";
import { Project, Projects, ProjectsDetalis } from "../../constants/projects";
import { ProjectsLinks, ServicesBud } from "./services-data";

export default function ServicesMobile() {
  const [activeProject, setProject] = useState(Projects.remont as Project);

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
      {ServicesBud.filter(({ id }) => id === activeProject).map(
        ({ id, description, description2, services }) => (
          <Flex
            key={id}
            flexDirection="column"
            mx="auto"
            maxWidth="container.max"
            bg="bgPrimary"
            borderRadius={["20px"]}
            px={[4, 10]}
            py={[5, 10]}
          >
            <Text fontSize="sm" textAlign="center" mx="auto">
              {description}
            </Text>
            <Flex flexDirection="column" my={[5, 10]} gap={[5, 10]}>
              {services.map(({ id, title, points }) => (
                <Flex key={id} flexDirection="column" gap={[1]}>
                  <Text textAlign="center" fontWeight={500} mb={[1]}>
                    {title}
                  </Text>
                  {points.map((text) => {
                    return (
                      <Text key={text} color="textSecondary">
                        {text}
                      </Text>
                    );
                  })}
                </Flex>
              ))}
            </Flex>
            {description2 && (
              <Text fontSize="sm" textAlign="center" mb={[5, 10]} mx="auto">
                {description2}
              </Text>
            )}

            <Link href={`/services/order?project=${activeProject}`} mx="auto" mt={5}>
              <Button
                size={["xl"]}
                width="max-content"
                mx="auto"
                borderRadius="100px"
                bg="rgba(114, 114, 114, 0.5)"
                color="textPrimaryWhite"
                py={[2]}
                pl={[4]}
                pr={[2]}
                _hover={{
                  color: "textPrimary",
                  bg: "white",
                }}
              >
                <Flex justifyContent="space-between" alignItems="center" width="100%" gap={10}>
                  Zamówić
                  <Flex bg="brand.orange" borderRadius="100%" p={1}>
                    <Icon as={IoAdd} boxSize={6} />
                  </Flex>
                </Flex>
              </Button>
            </Link>
            <Text textAlign="center" color="brand.orange" fontSize="sm" mt={[4, 8]}>
              Każdy rodzaj remontu może obejmować dodatkowe usługi i prace, w zależności od
              specyfiki i wymagań klienta.
            </Text>
          </Flex>
        ),
      )}
    </Flex>
  );
}
