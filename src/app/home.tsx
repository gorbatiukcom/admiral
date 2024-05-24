"use client";

import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";

import { Link } from "@/components/link";
import { SocialMediaLinks } from "@/components/SocialMediaLinks";

const HeroBlock = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      px={[4, "72px"]}
      py={[4, 5]}
      position="relative"
      maxHeight="calc(100dvh - 188px)"
      height="calc(100dvh - 188px)"
    >
      <Flex justifyContent="space-between" gap={10}>
        <Flex flexDirection="column" justifyContent="space-between">
          <div></div>
          <Heading
            fontSize={["26px", "36px"]}
            fontWeight={500}
            color="textPrimary"
            width={["240px", "400px"]}
            minWidth={["240px", "400px"]}
          >
            Tworzymy komfort dla naszych klientów
          </Heading>
          <Link href="/services/order" width="max-content">
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
                // background: "brand.blue",
                color: "brand.blue",
              }}
            >
              Wycena Online
            </Button>
          </Link>
        </Flex>
        <Box
          position="relative"
          _before={{
            content: `""`,
            position: "absolute",
            display: "block",
            width: "100%",
            height: "100%",
            top: "-20px",
            left: "-20px",
            pointerEvents: "none",
            borderRadius: "20px",
            border: "2px dashed",
          }}
        >
          <Image
            src="/images/bg-image-2-x2.png"
            alt="bg-image"
            objectFit="contain"
            borderRadius="20px"
            position="relative"
            maxHeight="calc(80dvh - 188px)"
          />
        </Box>
      </Flex>
      <Flex width="100%" justifyContent="flex-end" gap={[4, 6]} pb={5}>
        {SocialMediaLinks.map(({ url, name }) => (
          <Link
            key={name}
            href={url}
            color="textPrimary"
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
      <Flex
        position="absolute"
        width="100%"
        overflow="hidden"
        zIndex={-1}
        pointerEvents="none"
        left="0px"
        bottom="0px"
      >
        <Image src="/images/home.svg" alt="logo" minWidth="110vw" ml="-5vw" mb="-20vh" />
      </Flex>
    </Flex>
  );
};

const FastBlock = () => {
  return (
    <Flex
      flexDirection="column"
      bg="black"
      borderRadius="20px"
      px="72px"
      py={10}
      mt={-5}
      color="textPrimaryWhite"
      gap={10}
    >
      <Heading fontSize={["26px", "36px"]} fontWeight={500} textAlign="center">
        Nie trać swojego czasu
      </Heading>
      <Flex gap="80px">
        <Text fontSize="xl" fontWeight={400} width="100%">
          Jesteśmy zadowoleni, że możemy zaoferować Państwu wygodę i elastyczność: przyjedziemy w
          dowolne miejsce, które dla Państwa dogodne. Nasz zespół pracowni projektowej wnętrz jest
          gotowy omówić. Państwa preferencje i zrealizować je w rzeczywistości, gdziekolwiek by się
          Pan/i nie znajdowali/a. Cenimy Państwa czas i komfort, dlatego jesteśmy gotowi dostosować
          się do Państwa harmonogramu i lokalizacji, aby proces realizacji Państwa pomysłów był jak
          najbardziej wygodny. Ta usługa jest dostępna w miastach:Warszawa, Łódź, Lublin
        </Text>
        <Text fontSize="xl" width="100%">
          Jesteśmy zadowoleni, że możemy zaoferować Państwu wygodę i elastyczność: przyjedziemy w
          dowolne miejsce, które dla Państwa dogodne. Nasz zespół pracowni projektowej wnętrz jest
          gotowy omówić. Państwa preferencje i zrealizować je w rzeczywistości, gdziekolwiek by się
          Pan/i nie znajdowali/a. Cenimy Państwa czas i komfort, dlatego jesteśmy gotowi dostosować
          się do Państwa harmonogramu i lokalizacji, aby proces realizacji Państwa pomysłów był jak
          najbardziej wygodny. Ta usługa jest dostępna w miastach:Warszawa, Łódź, Lublin
        </Text>
      </Flex>
    </Flex>
  );
};
const AboutBlock = () => {
  return (
    <Flex flexDirection="column" alignItems="center" px="72px" py="120px">
      <Heading mb={10} fontWeight={400}>
        O Nas
      </Heading>
      <Text color="textPrimary" fontSize="xl" textAlign="center" fontWeight={300} width="100%">
        Witajcie, w naszym studiu projektowania wnętrz, zlokalizowanym w Warszawie, gdzie
        doświadczenie i kreatywność są kluczem do tworzenia doskonałych przestrzeni. Jesteśmy
        zespołem profesjonalistów, zjednoczonych wspólną pasją do designu, gotowych realizować wasze
        marzenia. Nasze doświadczenie pozwala nam zrozumieć wasze potrzeby i preferencje. Pracujemy
        z każdym klientem indywidualnie, uwzględniając ich styl życia, gust i ograniczenia
        budżetowe, aby stworzyć unikalną przestrzeń, odzwierciedlającą ich osobowość. W naszym
        studiu znajdziesz nie tylko doświadczonych profesjonalistów, ale także inspirującą
        atmosferę, gdzie każdy pomysł jest omawiany i przekształcany w koncepcję, a każdy detal
        projektowany jest z miłością i uwagą. Specjalizujemy się w tworzeniu wnętrz, które łączą w
        sobie funkcjonalność, komfort i estetykę. Bez względu na to, czy potrzebujesz designu dla
        mieszkania, domu, biura czy restauracji, jesteśmy gotowi zrealizować wasze pomysły, tworząc
        przestrzeń, która będzie was codziennie cieszyć. Powierzcie nam swoje zaufanie, a wasze
        mieszkanie, dom, biuro i restauracja staną się miejscem, do którego będziecie chcieli wracać
        z przyjemnością i dumą. Dodatkowo, choć nasze studio znajduje się w Warszawie, to świadczymy
        usługi projektowe także w innych miastach, takich jak Łódź, Lublin i wiele innych,
        dostosowując się do potrzeb naszych klientów.{" "}
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
