"use client";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

import { InputStyle } from "@/components/InputStyle";
import { Link } from "@/components/link";

import { Project, Projects, ProjectsDetalis } from "../page";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectSize: string;
  message: string;
};

export const ProjectsLinks: {
  [index in Project]: { prev: Project; next: Project };
} = {
  [Projects.basic]: {
    prev: "comprehensive",
    next: "advanced",
  },
  [Projects.advanced]: {
    prev: "basic",
    next: "authorSupervision",
  },
  [Projects.authorSupervision]: {
    prev: "advanced",
    next: "comprehensive",
  },
  [Projects.comprehensive]: {
    prev: "authorSupervision",
    next: "basic",
  },
};

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeProject = searchParams.get("project") as Project;

  console.log("🚀 ~ Home ~ searchParams:", searchParams);
  const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
  console.log("🚀 ~ Home ~ searchParams.entries():", searchParams.entries());
  console.log("🚀 ~ Home ~ searchParams.get(a):", searchParams.get("a"));
  console.log("🚀 ~ Home ~ current:", current);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // axios.defaults.headers.post["Accept"] = "application/json";
    // await axios
    //   .post("https://getform.io/f/f4a8de8f-cb20-4317-b5d8-27c7ac9a37b7", data)
    //   .catch((error) => {
    //     console.log("🚀 ~ sendForm ~ error:", error);
    //   });
    router.push("/contacts/confirmation");
  };

  return (
    <Flex p="40px" my="40px" mx="auto" width="100%" maxWidth="1000px" border="1px dashed">
      <Flex flexDirection="column" borderRight="1px dashed" width="100%" pr="60px">
        <Text fontSize="60px" lineHeight="60px" fontWeight={400} pb="40px">
          Witamy
        </Text>
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
            <FormErrorMessage>{errors.projectSize && errors.projectSize.message}</FormErrorMessage>
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
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        paddingLeft="36px"
        maxWidth="330px"
        width="100%"
      >
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
          <Link href={`/services/order?project=${ProjectsLinks[activeProject].prev}`}>
            <Icon as={IoArrowBackCircle} boxSize="44px" />
          </Link>
          <Link href={`/services/order?project=${ProjectsLinks[activeProject].next}`}>
            <Icon as={IoArrowForwardCircle} boxSize="44px" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
