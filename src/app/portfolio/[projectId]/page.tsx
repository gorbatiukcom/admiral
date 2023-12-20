"use client";
import { Flex, Heading, Image } from "@chakra-ui/react";

import { PortfolioProjects } from "@/constants/portfolio";

export default function Home({ params }: { params: { projectId: string } }) {
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
      <Heading px={[4, 10]} mx="auto" mb={[4, 10]} fontWeight={400} fontSize={["2xl", "3xl"]}>
        {projectData?.name}
      </Heading>

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
                maxHeight="100dvh"
                objectFit="contain"
              />
            );
          })}
      </Flex>
    </Flex>
  );
}
