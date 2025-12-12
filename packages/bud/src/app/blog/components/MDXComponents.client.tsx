"use client";

import {
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Link } from "../../../components/link"; 

export const CTA = ({ children, href }: { children: React.ReactNode; href?: string }) => {
  return (
    <Link href={href || "/contacts"} width="fit-content" my={8} display="block">
      <Button
        px={8}
        py={6}
        bg="brand.blue"
        color="white"
        fontSize="lg"
        borderRadius="lg"
        _hover={{ bg: "blue.600" }}
      >
        {children}
      </Button>
    </Link>
  );
};

export const MyH1 = (props: any) => <Heading as="h1" size="2xl" mt={10} mb={4} {...props} />;
export const MyH2 = (props: any) => <Heading as="h2" size="xl" mt={8} mb={3} {...props} />;
export const MyH3 = (props: any) => <Heading as="h3" size="lg" mt={6} mb={2} {...props} />;
export const MyP = (props: any) => <Text fontSize="lg" lineHeight="tall" my={4} {...props} />;
export const MyA = (props: any) => <Link color="brand.blue" fontWeight="bold" {...props} />;
export const MyUl = (props: any) => <Box as="ul" pl={5} my={4} {...props} />;
export const MyOl = (props: any) => <Box as="ol" pl={5} my={4} {...props} />;
export const MyLi = (props: any) => <Text as="li" fontSize="lg" {...props} />;

export { Box, Button };
