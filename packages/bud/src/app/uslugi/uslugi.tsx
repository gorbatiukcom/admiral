"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IoAdd } from "react-icons/io5";

import { Image } from "../../components/image";
import { Link } from "../../components/link";
import { ServicesBud } from "./uslugi-budowlane/services-data";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt?: string;
  priority?: boolean;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  href,
  imageSrc,
  imageAlt = "",
  priority,
}) => {
  return (
    <Flex
      position="relative"
      borderRadius={["20px", "24px"]}
      overflow="hidden"
      width="100%"
      mx="auto"
      // 3:4 card ratio on mobile, taller on larger screens
      sx={{
        aspectRatio: "5 / 8",
        "@media (min-width: 640px)": { aspectRatio: "4 / 7" },
      }}
      bg="gray.800"
    >
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        quality={70}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
        objectFit="cover"
      />
      {/* gradient overlay for readability */}
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.8) 100%)"
      />

      <Flex
        position="absolute"
        left={[4, 6]}
        right={[4, 6]}
        bottom={[4, 6]}
        direction="column"
        gap={[4, 6]}
      >
        <Heading as="h3" fontWeight={500} fontSize={["2xl", "3xl"]} lineHeight="1.1" color="white">
          {title}
        </Heading>

        <Text
          color="white"
          fontSize={["sm", "sm"]}
          opacity={0.95}
          maxW={["100%", "90%"]}
          whiteSpace="pre-wrap"
          minH={["100px", "140px"]}
        >
          {description}
        </Text>

        <Link href={href} width={["100%"]} maxWidth={["unset", "300px"]} mx="auto">
          <Button
            size={["md"]}
            width={["100%"]}
            borderRadius="100px"
            bg="white"
            color="textPrimary"
            px={[6]}
            py={[2]}
            _hover={{ bg: "gray.100" }}
          >
            Zamówić
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export const Uslugi = () => {
  return (
    <Box px={[4, 10]}>
      <Flex flexDirection="column" mx="auto" maxWidth="container.max" py={[4, 10]}>
        <Heading textAlign="center" fontWeight={500} as="p" mb={[6, 10]}>
          Nasze usługi
        </Heading>

        <Flex direction={["column", "row"]} gap={[6, 6]} justifyContent="space-between">
          <Flex width={["100%", "calc(33.333% - 22px)"]}>
            <ServiceCard
              title="Remont pod klucz"
              description={`Remont pod klucz to gwarancja indywidualnego podejścia i kompleksowej opieki nad projektem — od pierwszego szkicu po wykończenie, aby stworzyć wnętrze gotowe do zamieszkania bez żadnych kłopotów.`}
              href="/uslugi/remont-pod-klucz"
              imageSrc="/images/uslugi/uslugi-remont-pod-klucz.png"
            />
          </Flex>

          <Flex width={["100%", "calc(33.333% - 22px)"]}>
            <ServiceCard
              title="Projektowanie wnętrz"
              description="Projektowanie wnętrz to tworzenie przestrzeni, 
która odzwierciedla Twój charakter i styl życia, 
z uwzględnieniem każdego detalu i Twoich oczekiwań"
              href="/uslugi/projektowanie-wnetrz"
              imageSrc="/images/uslugi/uslugi-projektowanie-wnetrz.png"
            />
          </Flex>

          <Flex width={["100%", "calc(33.333% - 22px)"]}>
            <ServiceCard
              title="Usługi budowlane"
              description={`Usługi remontowe to możliwość przemiany Twojego domu lub mieszkania w nowoczesną i przytulną przestrzeń, w pełni zgodną z Twoimi oczekiwaniami. 
Cały proces bierzemy na siebie, aby efekt był dokładnie taki, jakiego pragniesz`}
              href="/uslugi/uslugi-budowlane"
              imageSrc="/images/uslugi/uslugi-uslugi-budowlane.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
