import { Box, Button, Heading, Text } from "@chakra-ui/react";

import { Link } from "../../../components/link";

const CTA = ({ children, href }: { children: React.ReactNode; href?: string }) => {
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

export const MDXComponents = {
  h1: (props: any) => <Heading as="h1" size="2xl" mt={10} mb={6} {...props} />,
  h2: (props: any) => <Heading as="h2" size="xl" mt={8} mb={4} {...props} />,
  h3: (props: any) => <Heading as="h3" size="lg" mt={6} mb={3} {...props} />,
  p: (props: any) => <Text fontSize="lg" lineHeight="tall" mb={4} {...props} />,
  a: (props: any) => <Link color="brand.blue" textDecoration="underline" {...props} />,
  ul: (props: any) => <Box as="ul" pl={6} mb={4} {...props} />,
  ol: (props: any) => <Box as="ol" pl={6} mb={4} {...props} />,
  li: (props: any) => <Box as="li" mb={2} fontSize="lg" {...props} />,
  CTA,
};
