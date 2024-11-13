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

import { Image as NextImage } from "../../../components/image";
import { InputStyle } from "../../../components/InputStyle";
import { Link } from "../../../components/link";
import { Project, Projects, ProjectsDetalis } from "../../../constants/projects";
import { ProjectsLinks } from "../services-data";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectSize: string;
  haveProject?: string;
  message: string;
};

export default function Order() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeProject = searchParams.get("project") as Project;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    axios.defaults.headers.post["Accept"] = "application/json";
    await axios
      .post("https://getform.io/f/ebpddnkb", {
        ...data,
        project: ProjectsDetalis[activeProject].name,
      })
      .catch((error) => {
        console.log("🚀 ~ sendForm ~ error:", error);
      });
    router.push("/contacts/confirmation");
  };

  return (
    <Flex p={[4, 10]}>
      <Flex
        p={[4, 10]}
        my={[4, 10]}
        mb={[0, 10]}
        flexDirection={["column", "row"]}
        mx="auto"
        width="100%"
        maxWidth={activeProject ? "container.max" : "700px"}
        borderRadius="20px"
        bg="bgPrimary"
      >
        <Flex
          flexDirection="column"
          borderRight={activeProject ? [null, "1px solid"] : undefined}
          width="100%"
          pr={activeProject ? [0, "60px"] : undefined}
        >
          {/* MOBILE */}
          {activeProject ? (
            <Flex
              display={["flex", "none"]}
              flexDirection="column"
              alignItems="center"
              width="100%"
              pb={[5, 10]}
            >
              <Text fontSize="2xl" color="textSecondary" fontWeight={500} mt={2}>
                PROJEKT
              </Text>
              <Text fontSize="2xl" fontWeight={500} textAlign="center" maxWidth="240px">
                {ProjectsDetalis[activeProject].name}
              </Text>
            </Flex>
          ) : (
            <Text
              display={["flex", "none"]}
              fontSize={["32px", "60px"]}
              lineHeight={["32px", "60px"]}
              fontWeight={[700]}
              pb={[5, 5]}
              textAlign="center"
              mx="auto"
            >
              Cześć
            </Text>
          )}
          <Text
            display={["none", "flex"]}
            fontSize={["32px", "60px"]}
            lineHeight={["32px", "60px"]}
            fontWeight={[700]}
            pb={[5, 5]}
          >
            Cześć
          </Text>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name?.message} zIndex={1}>
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
            <FormControl isInvalid={!!errors.email?.message} mt={4} zIndex={1}>
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
            <FormControl isInvalid={!!errors.phone?.message} mt={4} zIndex={1}>
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
            <FormControl isInvalid={!!errors.city?.message} mt={4} zIndex={1}>
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
            <FormControl isInvalid={!!errors.projectSize?.message} mt={4} zIndex={1}>
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
            {activeProject === "keyRemont" ? (
              <FormControl isInvalid={!!errors.haveProject?.message} mt={4} zIndex={1}>
                <FormLabel htmlFor="projectSize">Posiadanie projektu wnętrza</FormLabel>
                <Input
                  {...InputStyle}
                  id="haveProject"
                  placeholder="Tak / Nie"
                  {...register("haveProject", {
                    required: "To pole jest wymagane",
                  })}
                />
                <FormErrorMessage>
                  {errors.projectSize && errors.projectSize.message}
                </FormErrorMessage>
              </FormControl>
            ) : null}
            <FormControl isInvalid={!!errors.message?.message} mt={4} zIndex={1}>
              <FormLabel htmlFor="name">Wiadomosć</FormLabel>
              <Textarea
                {...InputStyle}
                id="message"
                placeholder="Wpisz swoją wiadomosć tutaj..."
                rows={4}
                {...register("message")}
              />
              <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
            </FormControl>
            <Flex justifyContent="flex-end">
              <Button
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                bg="textPrimaryWhite"
                color="textPrimary"
                borderRadius="8px"
                fontWeight={600}
                fontSize="20px"
                px={7}
                height="44px"
                width={["100%", null]}
                _hover={{
                  color: "brand.blue",
                }}
                zIndex={1}
              >
                Wysłać
              </Button>
            </Flex>
          </form>
        </Flex>
        {/* DESKTOP */}
        {activeProject ? (
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
            <Text fontSize="24px" fontWeight={500} mt={2} color="textSecondary" zIndex={1}>
              PROJEKT
            </Text>
            <Text fontSize="24px" fontWeight={500} textAlign="center" zIndex={1} maxWidth="240px">
              {ProjectsDetalis[activeProject].name}
            </Text>
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
}
