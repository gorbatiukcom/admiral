import { Flex, Icon } from "@chakra-ui/react";
import { IoArrowBackCircle } from "react-icons/io5";

import { Link } from "../../components/link";

export const BackSection = ({ link }: { link: string }) => {
  return (
    <Flex
      justifyContent="flex-start"
      width="100%"
      mx="auto"
      maxWidth="container.max"
      px={[4, 10]}
      pt={[10]}
    >
      <Link href={link}>
        <Icon
          as={IoArrowBackCircle}
          boxSize={10}
          _hover={{ color: "brand.blue" }}
          transition="0.2s"
        />
      </Link>
    </Flex>
  );
};
