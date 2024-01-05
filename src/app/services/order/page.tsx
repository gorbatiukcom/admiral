"use client";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

import { Image as NextImage } from "@/components/image";
import { InputStyle } from "@/components/InputStyle";
import { Link } from "@/components/link";
import { Project, Projects, ProjectsDetalis } from "@/constants/projects";

import { ProjectsLinks } from "../services";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectSize: string;
  message: string;
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeProject = searchParams.get("project") as Project;

  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    axios.defaults.headers.post["Accept"] = "application/json";
    await axios
      .post("https://getform.io/f/761a3fe2-3d7a-49fa-8e52-9831853d010e", {
        ...data,
        project: activeProject,
      })
      .catch((error) => {
        console.log("🚀 ~ sendForm ~ error:", error);
      });
    router.push("/contacts/confirmation");
  };

  return (
    <Flex
    // maxWidth="100vw"
    // overflowX="hidden"
    >
      <Flex
        p={[4, 10]}
        my={[4, 10]}
        mb={[0, 10]}
        flexDirection={["column", "row"]}
        mx="auto"
        width="100%"
        maxWidth="1000px"
        border={[null, "1px dashed"]}
      >
        <Flex
          flexDirection="column"
          borderRight={[null, "1px dashed"]}
          width="100%"
          pr={[0, "60px"]}
          pb={[10, 0]}
        >
          <Text
            fontSize={["32px", "60px"]}
            lineHeight={["32px", "60px"]}
            fontWeight={[500, 400]}
            pb={[10, 10]}
            textAlign={["center", "left"]}
          >
            Witamy
          </Text>
          {/* MOBILE */}
          <Flex
            display={["flex", "none"]}
            width="100%"
            alignItems="center"
            pb={10}
            position="relative"
          >
            {Object.keys(Projects).map((project) => {
              return (
                <Image
                  key={project}
                  src={`/images/services_dk_${project}.svg`}
                  alt="logo"
                  minWidth="150%"
                  width="150%"
                  position="absolute"
                  zIndex={-1}
                  pointerEvents="none"
                  display={activeProject === project ? undefined : "none"}
                  left="-25%"
                  top={-75}
                />
              );
            })}
            <Link
              href={`/services/order?project=${ProjectsLinks[activeProject].prev}`}
              scroll={false}
              replace={true}
            >
              <Icon as={IoArrowBackCircle} boxSize="44px" />
            </Link>
            <Flex flexDirection="column" alignItems="center" width="100%">
              <Text fontSize="20px" fontWeight={300}>
                {ProjectsDetalis[activeProject].price}
              </Text>
              <Text fontSize="20px" fontWeight={400} mt={2}>
                PROJEKT
              </Text>
              <Text fontSize="24px" fontWeight={400}>
                {ProjectsDetalis[activeProject].name}
              </Text>
            </Flex>
            <Link
              href={`/services/order?project=${ProjectsLinks[activeProject].next}`}
              scroll={false}
              replace={true}
            >
              <Icon as={IoArrowForwardCircle} boxSize="44px" />
            </Link>
          </Flex>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name?.message}>
              <FormLabel htmlFor="name">Imię i nazwisko</FormLabel>
              <Input
                {...InputStyle}
                id="name"
                placeholder="Jan Kowalski"
                {...register("name", {
                  required: "To pole jest wymagane",
                })}
              />
              <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email?.message} mt={4}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                {...InputStyle}
                id="email"
                placeholder="jan_kowalski@gmail.com"
                {...register("email", {
                  required: "To pole jest wymagane",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail jest nieprawidłowy",
                  },
                })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.phone?.message} mt={4}>
              <FormLabel htmlFor="phone">Telefon</FormLabel>
              <Input
                {...InputStyle}
                id="phone"
                placeholder="+48 222 444 777"
                {...register("phone", {
                  required: "To pole jest wymagane",
                })}
              />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.city?.message} mt={4}>
              <FormLabel htmlFor="city">Miasto w którym znajduje się obiekt</FormLabel>
              <Input
                {...InputStyle}
                id="city"
                placeholder="Warszawa"
                {...register("city", {
                  required: "To pole jest wymagane",
                })}
              />
              <FormErrorMessage>{errors.city && errors.city.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.projectSize?.message} mt={4}>
              <FormLabel htmlFor="projectSize">Rozmiar obiektu w metrach kwadratowych</FormLabel>
              <Input
                {...InputStyle}
                id="projectSize"
                placeholder="150 m2"
                {...register("projectSize", {
                  required: "To pole jest wymagane",
                })}
              />
              <FormErrorMessage>
                {errors.projectSize && errors.projectSize.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message?.message} mt={4}>
              <FormLabel htmlFor="name">Wiadomosć</FormLabel>
              <Textarea
                {...InputStyle}
                id="message"
                placeholder="Wpisz swoją wiadomosć tutaj..."
                rows={4}
              />
              <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
            </FormControl>
            <Flex justifyContent="flex-end">
              <Button
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                bg="black"
                color="white"
                borderRadius="8px"
                fontWeight={400}
                fontSize="20px"
                px={7}
                height="44px"
                width={["100%", null]}
                _hover={{
                  bg: "gray.800",
                  color: "brand.blue",
                }}
              >
                Wysłać
              </Button>
            </Flex>
          </form>
        </Flex>
        {/* DESKTOP */}
        <Flex
          display={["none", "flex"]}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingLeft="36px"
          maxWidth="330px"
          width="100%"
          position="relative"
        >
          {Object.keys(Projects).map((project) => {
            return (
              <NextImage
                key={project}
                src={`/images/services_dk_${project}.svg`}
                alt="logo"
                minWidth={754}
                width={754}
                height={1000}
                position="absolute"
                zIndex={-1}
                pointerEvents="none"
                display={activeProject === project ? undefined : "none"}
                // left=""
                // top=""
              />
            );
          })}

          <Text fontSize="24px" fontWeight={300}>
            {ProjectsDetalis[activeProject].price}
          </Text>
          <Text fontSize="24px" fontWeight={400} mt={2}>
            PROJEKT
          </Text>
          <Text fontSize="36px" fontWeight={400}>
            {ProjectsDetalis[activeProject].name}
          </Text>
          <Flex justifyContent="space-between" width="200px" mt="28px">
            <Link
              href={`/services/order?project=${ProjectsLinks[activeProject].prev}`}
              scroll={false}
              replace={true}
            >
              <Icon as={IoArrowBackCircle} boxSize="44px" />
            </Link>
            <Link
              href={`/services/order?project=${ProjectsLinks[activeProject].next}`}
              scroll={false}
              replace={true}
            >
              <Icon as={IoArrowForwardCircle} boxSize="44px" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
