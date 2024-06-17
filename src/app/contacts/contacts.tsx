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
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

import { InputStyle } from "@/components/InputStyle";
import { Link } from "@/components/link";

type Inputs = {
  email: string;
  phone: string;
  message: string;
};

export default function Contacts() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    axios.defaults.headers.post["Accept"] = "application/json";
    await axios
      .post("https://getform.io/f/761a3fe2-3d7a-49fa-8e52-9831853d010e", data)
      .catch((error) => {
        console.log("🚀 ~ sendForm ~ error:", error);
      });
    router.push("/contacts/confirmation");
  };

  return (
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
          fontSize={["32px", "60px"]}
          lineHeight={["32px", "60px"]}
          fontWeight={400}
          pb={[4, 10]}
          textAlign={["center", "left"]}
        >
          Witamy
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Text fontSize={["20px", "24px"]} fontWeight={[500, 600]} pb={[2, 6]}>
            Nazwa firmy i adres do korespondencji
          </Text>
          <Text fontSize={["14px", "16px"]} fontWeight={300}>
            Volantes Sp z o.o.
          </Text>
          <Text fontSize={["14px", "16px"]} fontWeight={300}>
            NIP: 725 230 67 13
          </Text>
          <Text fontSize={["14px", "16px"]} fontWeight={300}>
            Aleja Tadeusza Kościuszki 80/82 lok.301
          </Text>
          <Text fontSize={["14px", "16px"]} fontWeight={300}>
            Łódź 90-437
          </Text>
        </Flex>
        <Flex flexDirection="column" mt={[4, 0]}>
          <Text fontSize={["20px", "24px"]} fontWeight={[500, 600]} pb={[2, 6]}>
            Kontakty
          </Text>
          <Link
            href="tel:+48577125400"
            fontSize={["14px", "16px"]}
            fontWeight={400}
            cursor="pointer"
            _hover={{
              color: "brand.blue",
            }}
          >
            +48 577 125 400
          </Link>
          <Link
            href="mailto:admiralinterior.info@gmail.com"
            fontSize={["14px", "16px"]}
            fontWeight={400}
            cursor="pointer"
            _hover={{
              color: "brand.blue",
            }}
          >
            admiralinterior.info@gmail.com
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
