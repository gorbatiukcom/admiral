"use client";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Link } from "@/components/link";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";

const HeroBlock = () => {
  return (
    <Box
      bg="linear-gradient(rgba(26,26,26,0.35), rgba(26,26,26,0.35)), url(/images/bg-image.png)"
      bgRepeat="no-repeat"
      bgPosition={["25% 75%", "center, center"]}
      bgSize="cover"
      height="var(--chakra-vh)"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        height="100%"
        px={["16px", "80px"]}
        pb={[4, 10]}
        maxWidth="container.max"
        mx="auto"
      >
        <Flex minHeight={["152px", "188px"]}></Flex>
        <Flex flexDirection="column" height="100%" justifyContent="center">
          <Heading
            fontSize={["26px", "36px"]}
            fontWeight={500}
            color="textPrimaryWhite"
            maxWidth={["240px", "400px"]}
          >
            Tworzymy komfort dla naszych klientów
          </Heading>
          <Link href="/services/order" mt="120px" width="max-content">
            <Button
              width="max-content"
              height={["48px", "60px"]}
              px={["40px", "40px"]}
              background="black"
              color="textPrimaryWhite"
              fontSize={["20px", "24px"]}
              borderRadius="full"
              transition="0.2s"
              fontWeight={600}
              _hover={{
                color: "brand.blue",
              }}
            >
              Wycena Online
            </Button>
          </Link>
        </Flex>
        <Flex width="100%" justifyContent="flex-end" gap={[4, 6]}>
          {SocialMediaLinks.map(({ url, name }) => (
            <Link
              key={name}
              href={url}
              color="textPrimaryWhite"
              fontSize={["14px", "18px"]}
              lineHeight={["21px", "40px"]}
              cursor="pointer"
              fontWeight={600}
              _hover={{
                color: "brand.blue",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

const FastBlock = () => {
  return (
    <Flex px={[4, 10]} mt={[5, 10]} justifyContent="center">
      <Flex bg="bgPrimary" borderRadius="20px">
        <Flex
          flexDirection="column"
          px={[4, 10]}
          py={[5, 10]}
          // mt={-5}
          color="textPrimaryWhite"
          gap={[4, 10]}
          maxWidth="container.max"
          mx="auto"
        >
          <Heading
            fontSize={["26px", "36px"]}
            fontWeight={500}
            textAlign="center"
            bg="linear-gradient(0deg, #00A3FF 23.08%, rgba(0, 102, 204, 0.76) 74.04%)"
            bgClip="text"
          >
            Nie trać swojego czasu
          </Heading>
          <Flex
            gap={[4, 10]}
            justifyContent="space-between"
            alignItems="center"
            flexDirection={["column", "row"]}
          >
            <Text
              fontSize={["md", "xl"]}
              fontWeight={400}
              width="100%"
              color="textSecondary"
              order={[1, 0]}
            >
              Jesteśmy zadowoleni, że możemy zaoferować Państwu wygodę i elastyczność: przyjedziemy
              w dowolne miejsce, które dla Państwa dogodne. Nasz zespół pracowni projektowej wnętrz
              jest gotowy omówić. Państwa preferencje i zrealizować je w rzeczywistości,
              gdziekolwiek by się Pan/i nie znajdowali/a. Cenimy Państwa czas i komfort, dlatego
              jesteśmy gotowi dostosować się do Państwa harmonogramu i lokalizacji, aby proces
              realizacji Państwa pomysłów był jak najbardziej wygodny.
              <br></br>
              Ta usługa jest dostępna w miastach: Warszawa, Łódź, Lublin
            </Text>
            <Image
              order={[0, 1]}
              src="/images/landing2.png"
              alt="landing2"
              height={["", 284]}
              objectFit="contain"
              borderRadius="16px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
const AboutBlock = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      p={[4, 10]}
      maxWidth="container.max"
      mx="auto"
      mb={[4, 10]}
    >
      <Heading mb={[4, 10]} fontSize={["26px", "36px"]} fontWeight={500} textAlign="center">
        O Nas
      </Heading>
      <Text
        width="100%"
        fontSize={["md", "xl"]}
        fontWeight={400}
        color="textSecondary"
        textAlign="center"
      >
        Witajcie, w naszym studiu projektowania wnętrz, zlokalizowanym w{" "}
        <Text as="span" color="textPrimaryWhite">
          Warszawie
        </Text>
        , gdzie doświadczenie i kreatywność są kluczem do tworzenia doskonałych przestrzeni.
        Jesteśmy zespołem profesjonalistów, zjednoczonych wspólną pasją do designu, gotowych
        realizować wasze marzenia. Nasze doświadczenie pozwala nam zrozumieć wasze potrzeby i
        preferencje. Pracujemy z każdym klientem indywidualnie, uwzględniając ich styl życia, gust i
        ograniczenia budżetowe, aby stworzyć unikalną przestrzeń, odzwierciedlającą ich osobowość. W
        naszym studiu znajdziesz nie tylko doświadczonych profesjonalistów, ale także inspirującą
        atmosferę, gdzie każdy pomysł jest omawiany i przekształcany w koncepcję, a każdy detal
        projektowany jest z miłością i uwagą. Specjalizujemy się w tworzeniu wnętrz, które łączą w
        sobie funkcjonalność, komfort i estetykę. Bez względu na to, czy potrzebujesz designu dla
        mieszkania, domu, biura czy restauracji, jesteśmy gotowi zrealizować wasze pomysły, tworząc
        przestrzeń, która będzie was codziennie cieszyć. Powierzcie nam swoje zaufanie, a wasze
        mieszkanie, dom, biuro i restauracja staną się miejscem, do którego będziecie chcieli wracać
        z przyjemnością i dumą. Dodatkowo, choć nasze studio znajduje się w{" "}
        <Text as="span" color="textPrimaryWhite">
          Warszawie
        </Text>
        , to świadczymy usługi projektowe także w innych miastach, takich jak{" "}
        <Text as="span" color="textPrimaryWhite">
          Łódź
        </Text>
        ,{" "}
        <Text as="span" color="textPrimaryWhite">
          Lublin
        </Text>{" "}
        i wiele innych, dostosowując się do potrzeb naszych klientów.
      </Text>
    </Flex>
  );
};

export const Home = () => {
  return (
    <Box width="100%">
      <HeroBlock />
      <FastBlock />
      <AboutBlock />
    </Box>
  );
};
