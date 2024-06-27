"use client";

import "swiper/css";

// import "swiper/css/navigation";
import { Box, Button, Flex, Heading, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import {
  IoAdd,
  IoCalendarNumberOutline,
  IoCashOutline,
  IoChevronBack,
  IoChevronForward,
  IoEyeOffOutline,
  IoPerson,
  IoPersonOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

import { Link } from "../components/link";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

const HeroBlock = () => {
  return (
    <Box
      bg="linear-gradient(rgba(26,26,26,0.20), rgba(26,26,26,0.20)), url(/images/bg-image-2.png)"
      bgRepeat="no-repeat"
      bgPosition={["center, center"]}
      bgSize="cover"
      height="var(--chakra-vh)"
      p={[4, 10]}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        height="100%"
        maxWidth="container.max"
        mx="auto"
      >
        <Flex alignItems="center" justifyContent={["center", "space-between"]}>
          <Link href="/services/order" width="max-content">
            <Button
              width="max-content"
              height={["48px", "60px"]}
              pl={["32px", "32px"]}
              pr={["16px", "16px"]}
              bg="white"
              color="textPrimary"
              fontSize={["20px", "24px"]}
              borderRadius="full"
              transition="0.2s"
              fontWeight={600}
              _hover={{
                color: "brand.orange",
              }}
            >
              <Flex justifyContent="space-between" alignItems="center" width="100%" gap={10}>
                Zamówić remont
                <Flex bg="brand.orange" borderRadius="100%" p={1}>
                  <Icon as={IoAdd} color="white" boxSize={[6, 8]} />
                </Flex>
              </Flex>
            </Button>
          </Link>

          <Link href="/contacts" width="max-content" display={["none", "block"]}>
            <Button
              width="max-content"
              height={["48px", "60px"]}
              px={["32px", "32px"]}
              bg="white"
              color="textPrimary"
              fontSize={["20px", "24px"]}
              borderRadius="full"
              transition="0.2s"
              fontWeight={600}
              _hover={{
                color: "brand.orange",
              }}
            >
              Zamów rozmowę telefoniczną
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
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
    bg="bgPrimary"
    p={[5, 8]}
    borderRadius={["20px"]}
    width="100%"
    maxWidth="420px"
    // border="1px solid red"
    height={["320px", "368px"]}
  >
    <Box>
      <Icon as={icon} boxSize={[8, 10]}></Icon>
      <Text fontSize={["xl", "2xl"]} my={[2, 4]}>
        {title}
      </Text>
    </Box>
    <Box>
      <Text fontSize={["sm", "md"]} color="textSecondary">
        {description}
      </Text>
      {notes && (
        <Text fontSize={["sm", "md"]} color="#FF791B" textAlign="center" mt={3}>
          {notes}
        </Text>
      )}
    </Box>
  </Flex>
);

const SlidePrevButton = ({ disabled }: { disabled: boolean }) => {
  const swiper = useSwiper();
  console.log("🚀 ~ SlidePrevButton ~ swiper:", swiper);
  return (
    <IconButton
      aria-label="prev"
      icon={<Icon as={IoChevronBack} boxSize={6} color={disabled ? "gray.500" : undefined} />}
      isRound={true}
      colorScheme="blackAlpha"
      onClick={() => swiper.slidePrev()}
      disabled={disabled}
    />
  );
};
const SlideNextButton = ({ disabled }: { disabled: boolean }) => {
  const swiper = useSwiper();

  return (
    <IconButton
      aria-label="prev"
      icon={<Icon as={IoChevronForward} boxSize={6} color={disabled ? "gray.500" : undefined} />}
      isRound={true}
      colorScheme="blackAlpha"
      onClick={() => swiper.slideNext()}
      disabled={disabled}
    />
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
        console.log("🚀 ~ AdvantagesBlock ~ START:");
        setIsBeginning(true);
      }}
      onFromEdge={() => {
        console.log("🚀 ~ AdvantagesBlock ~ MIDDLE:");
        setIsEnd(false);
        setIsBeginning(false);
      }}
      onReachEnd={() => {
        setIsEnd(true);
        console.log("🚀 ~ AdvantagesBlock ~ END:");
      }}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1.3,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 1.4,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1550: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1900: {
          slidesPerView: 5.5,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <AdvantageItem
          icon={IoPersonOutline}
          title="Indywidualne podejście"
          description="Uwzględniamy wszystkie życzenia i wymagania naszych klientów, proponując indywidualne rozwiązania dla każdego projektu. Nasi architekci pracują w ścisłej współpracy z klientem, aby stworzyć unikalne i funkcjonalne obiekty."
        />
      </SwiperSlide>
      <SwiperSlide>
        <AdvantageItem
          icon={IoCalendarNumberOutline}
          title="Dotrzymujemy terminów"
          description="Doceniamy czas naszych klientów i ściśle przestrzegamy terminów realizacji prac. Precyzyjne planowanie i efektywna organizacja procesów pozwalają nam dostarczać obiekty punktualnie."
          notes="W przypadku nieterminowego wykonania, zwracamy 20% wartości remontu."
        />
      </SwiperSlide>
      <SwiperSlide>
        <AdvantageItem
          icon={IoPhonePortraitOutline}
          title="Całość w Twoim telefonie!"
          description="Uwzględniamy wszystkie życzenia i wymagania naszych klientów, proponując indywidualne rozwiązania dla każdego projektu. Nasi architekci pracują w ścisłej współpracy z klientem, aby stworzyć unikalne i funkcjonalne obiekty."
        />
      </SwiperSlide>
      <SwiperSlide>
        <AdvantageItem
          icon={IoEyeOffOutline}
          title="Przejrzyste rozliczanie kosztów"
          description="Każdy ruch środków na Twoim koncie przeznaczonym na remont będzie potwierdzony raportem! Tylko Ty potwierdzasz wszystkie wydatki, niezależnie od tego, czy chodzi o zakup materiałów, czy o opłatę za pracę fachowców."
        />
      </SwiperSlide>
      <SwiperSlide>
        <AdvantageItem
          icon={IoPersonOutline}
          title="Fotograficzna i wideo rejestracja"
          description="Nie muszą Państwo przyjeżdżać co dwa dni na miejsce, aby monitorować postęp prac. Robimy zdjęcia i filmy każdego etapu, a Państwo mogą śledzić wszystko na swoim telefonie."
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
        Jesteśmy firmą remontowo-budowlaną z Warszawy, specjalizującą się w kompleksowych remontach
        mieszkań i domów. Nasz zespół tworzą doświadczeni specjaliści, którzy z pasją podchodzą do
        każdego projektu. Stawiamy na profesjonalizm, jakość oraz indywidualne podejście do każdego
        klienta. Nasze prace charakteryzują się dbałością o detale oraz terminowością, co sprawia,
        że cieszymy się zaufaniem i uznaniem na rynku. Posiadamy wieloletnie doświadczenie, które
        pozwala nam realizować nawet najbardziej wymagające projekty. Naszym celem jest
        przekształcanie przestrzeni w miejsca, w których nasi klienci będą czuć się komfortowo i
        szczęśliwie.
      </Text>
    </Flex>
  );
};

export const Home = () => {
  return (
    <Box width="100%">
      <HeroBlock />
      <Text
        textAlign="center"
        fontSize={["sm", "2xl"]}
        maxWidth="780px"
        mx="auto"
        py={[10, "80px"]}
        px={[4]}
      >
        Oferujemy wysokiej jakości rozwiązania budowlane, oparte na przejrzystości,
        odpowiedzialności i zaufaniu. Takie relacje z klientami pomagają poprawić reputację firmy i
        przyciągaćnowych klientów, poszukujących niezawodnych wykonawców do swoich projektów.
      </Text>
      <AdvantagesBlock />
      <AboutBlock />
    </Box>
  );
};
