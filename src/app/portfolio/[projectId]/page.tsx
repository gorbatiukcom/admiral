"use client";
import { Flex, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import emotionStyled from "@emotion/styled";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

import { PortfolioProjects } from "@/constants/portfolio";

pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const Loading = () => {
  return (
    <Flex h="84vh" justifyContent="center" alignItems="center">
      <Spinner size="lg"></Spinner>
    </Flex>
  );
};

const PDFDocumentWrapper = emotionStyled.div`
  canvas {
    width: 100% !important;
    height: auto !important;
    max-width: 1800px;
  }
`;

const PortfolioPDF = ({ pdf }: { pdf: string }) => {
  const [numPages, setNumPages] = useState(0);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <PDFDocumentWrapper>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={Loading}>
        {[...Array(numPages)].map((num, index) => {
          return (
            <Page
              key={num}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          );
        })}
      </Document>
    </PDFDocumentWrapper>
  );
};
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
    <Flex flexDirection="column" alignItems="center" pt={10} bg="black">
      <Heading px={10} mx="auto" mb={10}>
        {projectData?.name}
      </Heading>
      {/* <Image src={projectData?.image} alt={projectData?.name} borderRadius="8px" /> */}
      <Image src="/images/cc13-1.jpg" alt={projectData?.name} borderRadius="8px" width="100%" />
      <Image src="/images/cc14-1.jpg" alt={projectData?.name} borderRadius="8px" width="100%" />
      <Image src="/images/cc15-3.jpg" alt={projectData?.name} borderRadius="8px" width="100%" />

      {/* {projectData.pdf ? (
        <PortfolioPDF pdf={projectData.pdf} />
      ) : (
        <Image src={projectData?.image} alt={projectData?.name} borderRadius="8px" />
      )} */}
    </Flex>
  );
}
