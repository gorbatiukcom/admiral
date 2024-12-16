"use client";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Link } from "../../../components/link";
import { PortfolioProjects } from "../../../constants/portfolio";

export type Props = {
  params: { projectId: string };
};

export default function Project({ params }: Props) {
  const projectData = PortfolioProjects.find((project) => project.projectId === params.projectId);

  if (!projectData) {
    return (
      <Flex flexDirection="column" p={10}>
        <Heading px={10} mx="auto">
          Project not found
        </Heading>
      </Flex>
    );
  }

  return (
    <Flex flexDirection="column" alignItems="center" pt={[4, 10]} pb={10}>
      <Flex flexDirection="column" px={[4, 10]} mx="auto" mb={[4, 10]}>
        <Heading fontWeight={400} fontSize={["2xl", "3xl"]} textAlign="center">
          {projectData?.name}
        </Heading>
        {projectData?.shortDescription ? (
          <Text
            fontSize={["16px", "20px"]}
            fontWeight={400}
            textAlign="center"
            mt={[2, 4]}
            // whiteSpace="pre-line"
          >
            {projectData?.shortDescription}
          </Text>
        ) : null}
        {projectData?.description ? (
          <Text
            fontSize={["16px", "20px"]}
            fontWeight={400}
            textAlign="center"
            mt={[2, 4]}
            // whiteSpace="pre-line"
          >
            {projectData?.description}
          </Text>
        ) : null}
      </Flex>

      <Flex flexDirection="column" alignItems="center" justifyContent="center" px={2} gap={2}>
        {projectData?.images &&
          projectData.images.map((url) => {
            return (
              <Image
                key={url}
                src={url}
                alt={projectData?.name}
                borderRadius="10px"
                width="max-content"
                maxHeight="100svh"
                objectFit="contain"
              />
            );
          })}
      </Flex>
      <Flex
        justifyContent={["center", "flex-end"]}
        position="fixed"
        width="100%"
        bottom={["16px", "40px"]}
        px={["16px", "40px"]}
      >
        <Link href="/services/order" width="max-content">
          <Button
            width="max-content"
            height={["40px", "60px"]}
            px={["20px", "70px"]}
            background="black"
            color="textPrimaryWhite"
            fontSize={["16px", "24px"]}
            borderRadius={8}
            transition="0.2s"
            fontWeight={500}
            border="2px solid white"
            _hover={{
              background: "brand.blue",
            }}
          >
            Zamówić projekt
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
