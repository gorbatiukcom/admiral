"use client";

import { Button, Flex, Grid, GridItem, Icon, Text } from "@chakra-ui/react";
import { IoCheckmarkCircle } from "react-icons/io5";

import { Image } from "@/components/image";
import { Link } from "@/components/link";
import { Projects, ProjectsDetalis } from "@/constants/projects";

import { Services, Steps } from "./services";

export default function ServicesDesktop() {
  return (
    <Flex
      display={["none", "flex"]}
      flexDirection="column"
      p={20}
      mx="auto"
      pt="60px"
      pb="160px"
      overflow="hidden"
    >
      <Grid
        gridTemplateColumns={`320px repeat(${Object.values(Projects).length}, 1fr)`}
        gap="0.5"
        position="relative"
      >
        <Image
          src="/images/services_dk_1.svg"
          alt="logo"
          minWidth={1500}
          width={1500}
          height={1124}
          position="absolute"
          zIndex={-1}
          pointerEvents="none"
          left="-440px"
          top="-50px"
        />
        <Image
          src="/images/services_dk_2.svg"
          alt="logo"
          width={1090}
          height={1422}
          position="absolute"
          zIndex={-1}
          pointerEvents="none"
          right="-16%"
          bottom="-900px"
        />

        <GridItem borderRight="1px dashed" borderBottom="1px dashed" pb={3}>
          <Text fontSize="26px" fontWeight={300} textTransform="uppercase">
            Project
          </Text>
        </GridItem>
        {Object.values(Projects).map((project) => {
          return (
            <GridItem key={project} borderBottom="1px dashed" pb={3}>
              <Text fontSize="26px" fontWeight={400} textAlign="center" textTransform="uppercase">
                {ProjectsDetalis[project].name}
              </Text>
            </GridItem>
          );
        })}

        {Services.map(({ name, projects }, index) => {
          return (
            <>
              <GridItem
                key={name}
                borderRight="1px dashed"
                py={2}
                pt={index === 0 ? 4 : undefined}
                pb={index === Services.length - 1 ? 6 : undefined}
              >
                <Text fontSize="16px" fontWeight={300}>
                  {name}
                </Text>
              </GridItem>
              {Object.values(Projects).map((project) => {
                return (
                  <GridItem
                    key={project}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {projects.includes(project) ? (
                      <Icon
                        as={IoCheckmarkCircle}
                        boxSize="20px"
                        color={projects.includes(project) ? "brand.blue" : "transparent"}
                      />
                    ) : (
                      <Flex
                        width="16px"
                        height="16px"
                        border="1px solid"
                        borderColor="brand.blue"
                        borderRadius="full"
                      ></Flex>
                    )}
                  </GridItem>
                );
              })}
            </>
          );
        })}

        <GridItem borderRight="1px dashed" borderTop="1px dashed" pt={4}>
          <Text fontSize="24px" fontWeight={300} textAlign="center" textTransform="uppercase">
            Cena
          </Text>
        </GridItem>
        {Object.values(Projects).map((project) => {
          return (
            <GridItem key={project} borderTop="1px dashed" pt={4}>
              <Text fontSize="20px" fontWeight={300} textAlign="center">
                {ProjectsDetalis[project].price}
              </Text>
              <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="center">
                {ProjectsDetalis[project]?.description}
              </Text>
            </GridItem>
          );
        })}
        <GridItem></GridItem>
        {Object.values(Projects).map((project) => {
          return (
            <GridItem
              key={project}
              pt={2}
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Link href={`/services/order?project=${project}`}>
                <Button
                  bg="black"
                  color="white"
                  borderRadius="10px"
                  fontWeight={400}
                  fontSize="20px"
                  px={7}
                  height="44px"
                  _hover={{
                    bg: "gray.800",
                    color: "brand.blue",
                  }}
                >
                  ZAMÓWICZ
                </Button>
              </Link>
            </GridItem>
          );
        })}
      </Grid>

      <Text
        fontSize="24px"
        fontWeight={300}
        textAlign="center"
        mt="140px"
        borderBottom="0.5px solid"
        pb={3}
      >
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
                        bgColor: "black",
                        pointerEvents: "none",
                      }
                }
              >
                <Flex width="16px" height="16px" borderRadius="full" bgColor="black" />
              </Flex>
              <Text fontSize="16px" fontWeight={300} px={2} maxWidth="180px">
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
