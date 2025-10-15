"use client";

import { Button, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

import { Link } from "../../../components/link";
import { DesignProjects, ProjectsDetalis, Services, Steps } from "./projektowanie-wnetrz-data";

export function ProjektowanieWnetrzDesktop() {
  return (
    <Flex
      display={["none", "flex"]}
      flexDirection="column"
      maxWidth="container.max"
      px={[4, 10]}
      mx="auto"
      pb={10}
      overflow="hidden"
    >
      <Grid
        gridTemplateColumns={`320px repeat(${Object.values(DesignProjects).length}, 1fr)`}
        gap="0.5"
        position="relative"
      >
        <GridItem borderRight="1px dashed" borderBottom="1px dashed" pb={3}>
          <Text fontSize="lg" fontWeight={600} textTransform="uppercase">
            Project
          </Text>
        </GridItem>
        {Object.values(DesignProjects).map((project) => {
          return (
            <GridItem key={project} borderBottom="1px dashed" pb={3}>
              <Text fontSize="lg" fontWeight={600} textAlign="center" textTransform="uppercase">
                {ProjectsDetalis[project].name}
              </Text>
            </GridItem>
          );
        })}

        {Services.map(({ name, projects }, index) => {
          return (
            <Fragment key={name}>
              <GridItem
                borderRight="1px dashed"
                py={2}
                pt={index === 0 ? 4 : undefined}
                pb={index === Services.length - 1 ? 6 : undefined}
              >
                <Text fontSize="18px" fontWeight={300}>
                  {name}
                </Text>
              </GridItem>
              {Object.values(DesignProjects).map((project) => {
                return (
                  <GridItem
                    key={`${name}-${project}`}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {projects.includes(project) ? (
                      <Icon
                        as={IoCheckmarkCircle}
                        boxSize="20px"
                        color={projects.includes(project) ? "brand.blueLight" : "transparent"}
                      />
                    ) : (
                      <Flex
                        width="16px"
                        height="16px"
                        border="1px solid"
                        borderColor="brand.blueLight"
                        borderRadius="full"
                      ></Flex>
                    )}
                  </GridItem>
                );
              })}
            </Fragment>
          );
        })}

        <GridItem borderRight="1px dashed" borderTop="1px dashed" pt={4}>
          <Text fontSize="20px" fontWeight={600} textAlign="center">
            Cena
          </Text>
        </GridItem>
        {Object.values(DesignProjects).map((project) => {
          return (
            <GridItem key={project} borderTop="1px dashed" pt={4}>
              <Text fontSize="20px" fontWeight={600} textAlign="center">
                {ProjectsDetalis[project].price}
              </Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="center">
                {ProjectsDetalis[project]?.description}
              </Text>
            </GridItem>
          );
        })}
        <GridItem></GridItem>
        {Object.values(DesignProjects).map((project) => {
          return (
            <GridItem
              key={project}
              pt={2}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Link href={`/uslugi/order?project=${project}`}>
                <Button
                  bg="white"
                  color="black"
                  borderRadius="10px"
                  fontSize="20px"
                  px={7}
                  height="44px"
                  _hover={{
                    color: "brand.blue",
                  }}
                >
                  Zamówić
                </Button>
              </Link>
            </GridItem>
          );
        })}
      </Grid>

      <Text fontSize="24px" fontWeight={300} textAlign="center" mt="140px" pb={3}>
        Algorytm współpracy i opłat
      </Text>
      <Flex justifyContent="space-between" pt="48px">
        {Steps.map(({ description }, index) => {
          return (
            <Flex key={description} flexDirection="column" alignItems="center" width="100%">
              <Text fontSize="72px">{index + 1}</Text>
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                my={6}
                width="100%"
                position="relative"
                _before={
                  Steps.length === index + 1
                    ? undefined
                    : {
                        content: `""`,
                        position: "absolute",
                        display: "block",
                        width: "calc(100% - 48px)",
                        height: "1px",
                        top: "8px",
                        left: "calc(50% + 24px)",
                        bgColor: "white",
                        pointerEvents: "none",
                      }
                }
              >
                <Flex width="16px" height="16px" borderRadius="full" bgColor="white" />
              </Flex>
              <Text fontSize="16px" fontWeight={300} px={2} maxWidth="260px" whiteSpace="pre-wrap">
                {description}
              </Text>
            </Flex>
          );
        })}
      </Flex>
      <Text fontSize="24px" fontWeight={300} textAlign="center" mt="60px" pb={5}>
        Jest możliwość wziąć na raty wszystkie rodzaje usług RRSO 0%
      </Text>
      <Flex width="260px" height="4px" bg="brand.blue" mx="auto" borderRadius="2px" />
    </Flex>
  );
}
