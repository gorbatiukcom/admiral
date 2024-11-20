"use client";

import {
  Box,
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
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { InputStyle } from "../../components/InputStyle";
import { Link } from "../../components/link";
import { trackEvent } from "../../constants/analytics";

type Inputs = {
  email: string;
  phone: string;
  message: string;
};

export default function Contacts() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const router = useRouter();

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
    axios.defaults.headers.post["Accept"] = "application/json";
    await axios.post("https://getform.io/f/ebpddnkb", data).catch((error) => {
      trackEvent({
        name: "error",
        sendTo: ["mixpanel"],
        props: {
          errorName: "contactFormError",
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
      });
      console.log("🚀 ~ sendForm ~ error:", error);
    });
    trackEvent({
      name: "contactForm",
      sendTo: ["mixpanel", "gtm"],
      props: {
        email: data.email,
        phone: data.phone,
      },
    });
    router.push("/contacts/confirmation");
  };

  const onInvalidSubmit: SubmitErrorHandler<any> = async (data) => {
    trackEvent({
      name: "contactFormInvalid",
      sendTo: ["mixpanel"],
    });
  };

  return (
    <Box p={[4, 10]}>
      <Flex
        p={[4, 10]}
        mt={[4, 10]}
        mb={[0, 10]}
        mx="auto"
        width="100%"
        maxWidth="container.max"
        borderRadius="20px"
        flexDirection={["column", "row"]}
        bg="bgPrimary"
      >
        <Flex
          flexDirection="column"
          borderRight={[null, "1px dashed"]}
          width="100%"
          pr={[0, "60px"]}
          pb={[10, 0]}
        >
          <Text
            // display={["none", "flex"]}
            fontSize={["32px", "60px"]}
            lineHeight={["32px", "60px"]}
            fontWeight={[700]}
            pb={[4, 5]}
            textAlign={["center", "left"]}
          >
            Cześć
          </Text>

          <form onSubmit={handleSubmit(onSubmit, onInvalidSubmit)}>
            <FormControl isInvalid={!!errors.email?.message}>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                {...InputStyle}
                id="email"
                placeholder="Wpisz swój e-mail tutaj"
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
                placeholder="Wpisz swój telefon tutaj"
                {...register("phone")}
              />
              <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message?.message} mt={4}>
              <FormLabel htmlFor="name">Wiadomosć</FormLabel>
              <Textarea
                {...InputStyle}
                id="message"
                placeholder="Wpisz swoją wiadomosć tutaj"
                rows={4}
                {...register("message", {
                  required: "To pole jest wymagane",
                })}
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
              >
                Wysłać
              </Button>
            </Flex>
          </form>
        </Flex>
        <Flex
          flexDirection="column"
          paddingLeft={[0, 9]}
          maxWidth="360px"
          justifyContent="space-between"
        >
          <Flex flexDirection="column">
            <Text fontSize={["20px", "24px"]} fontWeight={[500, 700]} pb={[2, 4]}>
              Nazwa firmy i adres do korespondencji
            </Text>
            <Text fontSize={["14px", "16px"]} color="textSecondary" fontWeight={400}>
              Volantes Sp z o.o.
            </Text>
            <Text fontSize={["14px", "16px"]} color="textSecondary" fontWeight={400}>
              NIP: 725 230 67 13
            </Text>
            <Text fontSize={["14px", "16px"]} color="textSecondary" fontWeight={400}>
              Aleja Tadeusza Kościuszki 80/82 lok.301
            </Text>
            <Text fontSize={["14px", "16px"]} color="textSecondary" fontWeight={400}>
              Łódź 90-437
            </Text>
          </Flex>
          <Flex flexDirection="column" mt={[4, 0]}>
            <Text fontSize={["20px", "24px"]} fontWeight={[500, 600]} pb={[2, 4]}>
              Kontakty
            </Text>
            <Link
              href="tel:+48536089652"
              fontSize={["14px", "16px"]}
              color="textSecondary"
              fontWeight={400}
              cursor="pointer"
              _hover={{
                color: "brand.blue",
              }}
            >
              +48 536 089 652
            </Link>
            <Link
              href="mailto:admiralbud.info@gmail.com"
              fontSize={["14px", "16px"]}
              color="textSecondary"
              fontWeight={400}
              cursor="pointer"
              _hover={{
                color: "brand.blue",
              }}
            >
              admiralbud.info@gmail.com
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
