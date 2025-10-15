import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoArrowBackCircle } from "react-icons/io5";

import { Link } from "../../components/link";

export const BackSection = ({ link }: { link: string }) => {
  return (
    <Box px={[4, 10]} pt={[4, 10]}>
      <Flex justifyContent="flex-start" width="100%" mx="auto" maxWidth="container.max">
        <Link
          href={link}
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          role="group"
          _hover={{ textDecoration: "none" }}
        >
          <Icon
            as={IoArrowBackCircle}
            boxSize={[10, 10]}
            transition="0.2s"
            _groupHover={{ color: "brand.blue" }}
          />
          <Text fontSize={["sm", "md"]} fontWeight={400}>
            Wszystkie usługi
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};
