"use client";

import "swiper/css";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  IoCalendarNumberOutline,
  IoCashOutline,
  IoChevronBack,
  IoChevronForward,
  IoEyeOutline,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Link } from "../components/link";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

const IMAGES = [
  "/images/bg-image-2.png",
  "/images/bg-image-3.jpg",
  "/images/bg-image-4.jpg",
  "/images/bg-image-5.jpg",
];
const HeroBlock = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const toggleImage = () => {
    setImageIndex((prevValue) => {
      if (prevValue + 1 >= IMAGES.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };
  return (
    <>
      <Flex position="relative">
        <Flex
          display={["flex", "none"]}
          position="absolute"
          left={0}
          right={0}
          top={0}
          h={["200px", "240px"]}
          bg="linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(26,26,26,0.9) 40%, rgba(255,255,255,0) 100%)"
          pointerEvents="none"
        />
        <Flex
          display={["flex", "none"]}
          position="absolute"
          left={0}
          right={0}
          top={0}
          h={["100dvh"]}
          bg="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(26,26,26,0.5) 40%, rgba(0,0,0,0) 100%)"
          pointerEvents="none"
        />
      </Flex>

      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems={["flex-end", "stretch"]}
        mx="auto"
        minHeight={["calc(100svh)", "calc(100svh - 96px)"]}
        bg={["url(/images/bg-image-2.png)", "none"]}
        bgRepeat="no-repeat"
        bgPosition={["center, center"]}
        bgSize="cover"
        pt={[0, 10]}
        pb={[5, 0]}
      >
        <Flex flexDir="column" justifyContent="space-between" w="100%">
          <Flex height="60px" display={["none", "flex"]} />
          <Flex
            flexDir="column"
            justifyContent="center"
            w="100%"
            maxW={["none", "800px"]}
            mx="auto"
            px={[5, 10]}
            height="100%"
            gap={[5, 5]}
            pt={[5]}
            zIndex={[0, 10]}
          >
            <Heading size={["xl", "2xl"]} lineHeight={[1, 1.3]} as="h1">
              Kompleksowy remont <br />
              mieszkań i domów
            </Heading>
            {/* <Text fontWeight={500} fontSize={["lg", "2xl"]} as="h2">
              Zacznij remont — zadzwoń po bezpłatną wizję lokalną!
            </Text> */}
            <Flex flexDir={["column-reverse", "row"]} alignItems="center" gap={[2, 4]} mt={"100px"}>
              <Link href="/contacts" width={["100%", "max-content"]}>
                <Button
                  width={["100%", "max-content"]}
                  height={["48px", "54px"]}
                  px={[5, 6]}
                  bg="bgBase"
                  color="textPrimaryWhite"
                  border="1px solid"
                  fontSize={["16px", "20px"]}
                  borderRadius="lg"
                  transition="0.2s"
                  fontWeight={600}
                  _hover={{
                    color: "brand.blue",
                  }}
                >
                  Zamów rozmowę telefoniczną
                </Button>
              </Link>
              <Link href="/uslugi/order" width={["100%", "max-content"]}>
                <Button
                  width={["100%", "max-content"]}
                  height={["48px", "54px"]}
                  px={[5, 6]}
                  bg="brand.blue"
                  color="textPrimaryWhite"
                  fontSize={["16px", "20px"]}
                  borderRadius="lg"
                  transition="0.2s"
                  fontWeight={600}
                  _hover={{
                    color: "black",
                  }}
                >
                  Zamówić remont
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            width="100%"
            justifyContent="flex-end"
            gap={6}
            display={["none", "flex"]}
            pr={10}
            pb={5}
          >
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

        <Flex
          display={["none", "flex"]}
          w="100%"
          height="calc(100svh - 96px - 40px)"
          position="relative"
          overflow="hidden"
          onClick={toggleImage}
          cursor="pointer"
        >
          <img
            src={IMAGES[imageIndex]}
            alt="room"
            style={{
              width: "100%",
              objectFit: "cover",
              borderRadius: "8px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

const AdvantageItem = ({
  icon,
  title,
  description,
  notes,
}: {
  icon: any;
  title: string;
  description: string;
  notes?: string;
}) => (
  <Flex
    flexDirection="column"
    justifyContent="space-between"
    bg="brand.blueDark"
    p={[5, 8]}
    borderRadius={["20px"]}
    width="100%"
    maxWidth="420px"
    minHeight={["368px", "368px"]}
  >
    <Box>
      <Icon as={icon} boxSize={[8, 10]}></Icon>
      <Text fontSize={["xl", "2xl"]} my={[2, 4]}>
        {title}
      </Text>
    </Box>
    <Box>
      <Text fontSize={["sm", "md"]} color="textPrimaryWhite" whiteSpace="pre-wrap">
        {description}
      </Text>
      {notes && (
        <Text fontSize={["sm", "md"]} color="textPrimaryWhite" textAlign="center" mt={3}>
          {notes}
        </Text>
      )}
    </Box>
  </Flex>
);

const SlidePrevButton = ({ disabled }: { disabled: boolean }) => {
  const swiper = useSwiper();

  return (
    <Flex
      as="button"
      onClick={() => swiper.slidePrev()}
      bg={disabled ? "gray.800" : "black"}
      borderRadius="100%"
      width="40px"
      height="40px"
      justifyContent="center"
      alignItems="center"
      disabled={disabled}
      cursor={disabled ? "default" : undefined}
    >
      <Icon as={IoChevronBack} boxSize={6} color={disabled ? "gray.400" : "white"} />
    </Flex>
  );
};
const SlideNextButton = ({ disabled }: { disabled: boolean }) => {
  const swiper = useSwiper();

  return (
    <Flex
      as="button"
      onClick={() => swiper.slideNext()}
      bg={disabled ? "gray.800" : "black"}
      borderRadius="100%"
      width="40px"
      height="40px"
      justifyContent="center"
      alignItems="center"
      disabled={disabled}
      cursor={disabled ? "default" : undefined}
    >
      <Icon as={IoChevronForward} boxSize={6} color={disabled ? "gray.400" : "white"} />
    </Flex>
  );
};
const AdvantagesBlock = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <Swiper
      slidesOffsetBefore={20}
      slidesOffsetAfter={20}
      onReachBeginning={() => {
        setIsBeginning(true);
      }}
      onFromEdge={() => {
        setIsEnd(false);
        setIsBeginning(false);
      }}
      onReachEnd={() => {
        setIsEnd(true);
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 1.4,
          spaceBetween: 5,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 2.5,
          spaceBetween: 5,
        },
        1550: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1900: {
          slidesPerView: 4.2,
          spaceBetween: 5,
        },
        2000: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvantageItem
          icon={IoPersonOutline}
          title="Indywidualne podejście"
          description={`Uwzględniamy wszystkie życzenia i wymagania naszych klientów, 
proponując indywidualne rozwiązania dla każdego projektu. 
Nasi architekci pracują w ścisłej współpracy z klientem, aby stworzyć unikalne i funkcjonalne obiekty.`}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvantageItem
          icon={IoCalendarNumberOutline}
          title="Dotrzymujemy terminów"
          description={`Doceniamy czas naszych klientów i ściśle przestrzegamy terminów realizacji prac. Precyzyjne planowanie i efektywna organizacja procesów pozwalają nam dostarczać obiekty punktualnie.`}
          notes="W przypadku nieterminowego wykonania, zwracamy 10% wartości remontu."
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvantageItem
          icon={IoPhonePortraitOutline}
          title="Całość w Twoim telefonie!"
          description={`Uwzględniamy wszystkie życzenia i wymagania naszych klientów, 
proponując indywidualne rozwiązania dla każdego projektu. 
Nasi architekci pracują w ścisłej współpracy z klientem, aby stworzyć unikalne i funkcjonalne obiekty.`}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvantageItem
          icon={IoCashOutline}
          title="Przejrzyste rozliczanie kosztów"
          description={`Każdy ruch środków na Twoim koncie przeznaczonym na remont będzie potwierdzony raportem! Tylko Ty potwierdzasz wszystkie wydatki, niezależnie od tego, czy chodzi o zakup materiałów, czy o opłatę za pracę fachowców.`}
        />
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <AdvantageItem
          icon={IoEyeOutline}
          title="Fotograficzna i wideo rejestracja"
          description={`Nie muszą Państwo przyjeżdżać co dwa dni na miejsce, aby monitorować postęp prac. Robimy zdjęcia i filmy każdego etapu, a Państwo mogą śledzić wszystko na swoim telefonie.`}
        />
      </SwiperSlide>
      <Flex width="100%" justifyContent="center" gap={[5]} p={5}>
        <SlidePrevButton disabled={isBeginning} />
        <SlideNextButton disabled={isEnd} />
      </Flex>
    </Swiper>
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
        fontSize={["sm", "xl"]}
        fontWeight={400}
        color="textSecondary"
        textAlign="center"
      >
        <Text display="inline" as="h2">
          Jesteśmy firmą remontowo-budowlaną z Warszawy
        </Text>
        ,{" "}
        <Text display="inline" as="h3">
          specjalizującą się w kompleksowych remontach mieszkań i domów
        </Text>
        . Nasz zespół tworzą doświadczeni specjaliści, którzy z pasją podchodzą do każdego projektu.
        Stawiamy na profesjonalizm, jakość oraz indywidualne podejście do każdego klienta. Nasze
        prace charakteryzują się dbałością o detale oraz terminowością, co sprawia, że cieszymy się
        zaufaniem i uznaniem na rynku. Posiadamy wieloletnie doświadczenie, które pozwala nam
        realizować nawet najbardziej wymagające projekty. Naszym celem jest przekształcanie
        przestrzeni w miejsca, w których nasi klienci będą czuć się komfortowo i szczęśliwie.
      </Text>
    </Flex>
  );
};

const Steps = [
  {
    id: "step0",
    points: [
      "Koncepcja wnętrza i ustalenie budżetu: omówienie z klientem zakresu, stylu i kosztów.",
      "Harmonogram i kosztorys: stworzenie planu działań oraz listy materiałów.",
      "Zakup materiałów i sprzętu: zabezpieczenie wszystkiego, co potrzebne na kolejnych etapach.",
    ],
  },
  {
    id: "step1",
    points: [
      "Rozbiórka niepotrzebnych elementów: stare ściany działowe, okna, drzwi, podłogi.",
      "Usunięcie starej armatury i instalacji: jeśli wymaga tego projekt.",
      "Zabezpieczenie pomieszczeń: ochrona mebli (jeśli zostają), podłoża i innych powierzchni, które nie będą remontowane.",
    ],
  },
  {
    id: "step2",
    points: [
      "Budowa nowych ścianek działowych i konstrukcji sufitowych (np. podwieszanych).",
      "Instalacje elektryczne: układanie kabli, montaż gniazdek, wyłączników i oświetlenia.",
      "Instalacje hydrauliczne: montaż rur, grzejników, przyłączy wodno-kanalizacyjnych.",
      "Inne systemy inżynierskie (ogrzewanie podłogowe, wentylacja mechaniczna itp.), jeśli przewidziano w projekcie.",
    ],
  },
  {
    id: "step3",
    points: [
      "Wyrównywanie ścian i sufitów (tynkowanie, szpachlowanie).",
      "Układanie podłóg (panele, parkiet, płytki).",
      "Malowanie lub tapetowanie ścian i sufitów.",
      "Montaż okien i drzwi, listew przypodłogowych, opasek drzwiowych.",
      "Elementy dekoracyjne: sztukateria, listwy ozdobne, oświetlenie dekoracyjne.",
      "Montaż mebli kuchennych, zabudowanych urządzeń oraz innych konstrukcji meblowych (szafy, półki itp.).",
    ],
  },
  {
    id: "step4",
    points: [
      "Sprzątanie: pozbycie się odpadów poremontowych, mycie podłóg i okien.",
      "Kontrola jakości: test działania instalacji, przegląd wykończenia pod kątem ewentualnych usterek.",
      "Przekazanie mieszkania: omówienie z klientem finalnego efektu i przekazanie dokumentacji (gwarancje, instrukcje).",
    ],
  },
];
const StepsBlock = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      p={[4, 10]}
      maxWidth="container.max"
      mx="auto"
      mb={[4, 10]}
      gap={[4, 10]}
    >
      <Heading textAlign="center" size={["lg", "xl"]} fontWeight={500} whiteSpace="pre-wrap">
        Etapy współpracy z Budcor
      </Heading>

      <Flex
        flexDirection="column"
        mx="auto"
        maxWidth="container.max"
        bg="bgPrimary"
        borderRadius={["20px"]}
        px={[5, 10]}
        py={[0, 0]}
      >
        <Flex
          flexDirection={["column"]}
          flexWrap="wrap"
          pt={[10, "68px"]}
          pb={[10, 0]}
          gap={[10, 0]}
        >
          {Steps.map(({ id, points }, index) => (
            <Flex key={id} flexDirection={["column", "row"]} gap={[1]} width={["100%"]}>
              <Flex
                position="relative"
                display={["none", "flex"]}
                sx={
                  index + 1 !== Steps.length
                    ? {
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: "4px",
                          top: "10px",
                          bottom: "0",
                          width: "2px",
                          bg: "white",
                          zIndex: 1,
                        },
                      }
                    : undefined
                }
              >
                <Flex width="10px" height="10px" borderRadius="full" bgColor="white" mr={[3]} />
              </Flex>
              <Text
                fontSize={["40px", "72px"]}
                fontWeight={500}
                mr={[8]}
                minWidth="48px"
                lineHeight="100%"
                mt={[0, "-30px"]}
                mb={[5, 0]}
                textAlign="center"
              >
                {index + 1}
              </Text>
              <Flex
                flexDirection="column"
                pb={[0, index + 1 !== Steps.length ? "64px" : 10]}
                mt={[0, "-26px"]}
              >
                {points.map((text) => {
                  return (
                    <Text key={text} color="textPrimaryWhite">
                      {`• ${text}`}
                    </Text>
                  );
                })}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Home = () => {
  return (
    <Box width="100%">
      <HeroBlock />
      <Flex
        maxWidth="1100px"
        mx="auto"
        py={[10, "80px"]}
        px={[4]}
        flexDirection="column"
        gap={[4, 6]}
      >
        <Text textAlign="center" fontSize={["md", "3xl"]}>
          Indywidualne podejście zamiast gotowych szablonów
        </Text>
        <Text textAlign="left" fontSize={["sm", "2xl"]} lineHeight={["28px", "40px"]}>
          Nie pracujemy według szablonu — każde wnętrze tworzymy od podstaw, dopasowując je do
          potrzeb i stylu klienta. <br />
          Dobieramy materiały, które harmonijnie współgrają z Twoim charakterem i wizją wnętrza.
        </Text>
      </Flex>
      <AdvantagesBlock />
      {/* <AboutBlock /> */}
      <StepsBlock />
    </Box>
  );
};
