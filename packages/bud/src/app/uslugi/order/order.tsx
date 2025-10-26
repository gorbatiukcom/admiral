"use client";

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { InputStyle } from "../../../components/InputStyle";
import { trackEvent } from "../../../constants/analytics";
import { Project, Projects, ProjectsDetalis } from "../../../constants/projects";

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
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();

  // Phone change tracking
  const phoneValue = watch("phone");
  const debouncedPhoneChange = useCallback(
    debounce((value) => {
      trackEvent({
        name: "phoneChange",
        sendTo: ["mixpanel"],
        props: {
          phone: value,
        },
      });
    }, 1000),
    [],
  );
  useEffect(() => {
    if (phoneValue) {
      debouncedPhoneChange(phoneValue);
    }

    // Cleanup debounce on component unmount
    return () => {
      debouncedPhoneChange.cancel();
    };
  }, [phoneValue, debouncedPhoneChange]);

  // Email change tracking
  const emailValue = watch("email");
  const debouncedEmailChange = useCallback(
    debounce((value) => {
      trackEvent({
        name: "emailChange",
        sendTo: ["mixpanel"],
        props: {
          email: value,
        },
      });
    }, 1000),
    [],
  );
  useEffect(() => {
    if (emailValue) {
      debouncedEmailChange(emailValue);
    }

    // Cleanup debounce on component unmount
    return () => {
      debouncedEmailChange.cancel();
    };
  }, [emailValue, debouncedEmailChange]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const projectName = ProjectsDetalis?.[activeProject]?.name || "Order without project type";
    axios.defaults.headers.post["Accept"] = "application/json";
    await axios
      .post("https://getform.io/f/ebpddnkb", {
        ...data,
        project: projectName,
      })
      .catch((error) => {
        console.log("🚀 ~ onSubmit ~ error:", error);
        trackEvent({
          name: "error",
          sendTo: ["mixpanel"],
          props: {
            errorName: "serviceContactFormError",
            email: data.email,
            phone: data.phone,
            project: projectName,
            message: data.message,
          },
        });
      });

    trackEvent({
      name: "serviceContactForm",
      sendTo: ["mixpanel", "gtm"],
      props: {
        email: data.email,
        phone: data.phone,
        project: projectName,
      },
    });
    router.push("/contacts/confirmation");
  };

  const onInvalidSubmit: SubmitErrorHandler<any> = async (data) => {
    trackEvent({
      name: "serviceContactFormInvalid",
      sendTo: ["mixpanel", "gtm"],
    });
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

          <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
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
            {activeProject === Projects["remont-pod-klucz"] ? (
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
