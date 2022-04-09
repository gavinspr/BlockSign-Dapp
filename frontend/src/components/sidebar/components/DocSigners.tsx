import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Spacer,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { RiAddCircleFill } from "react-icons/ri";

type SignerInfoProps = {
  name: string;
  address: string;
  title?: string | undefined;
};

const SignerInfo = ({ name, address, title }: SignerInfoProps) => {
  return (
    <HStack>
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          type="text"
          // value={input}
          // onChange={handleInputChange}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="name">Address</FormLabel>
        <Input
          id="name"
          type="text"
          // value={input}
          // onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="name">Title</FormLabel>
        <Input
          id="name"
          type="text"
          // value={input}
          // onChange={handleInputChange}
        />
      </FormControl>
    </HStack>
  );
};

export const DocSigners = () => {
  const [signers, setSigners] = useState<SignerInfoProps[]>([]);

  useEffect(() => {
    console.log("ye");
    setSigners((old) => [...old, { name: "", address: "fdfd" }]);
  }, []);

  return (
    <VStack w="100%" spacing={5}>
      <HStack w="90%">
        <Text>Document Signers</Text>
        <Spacer />
        <IconButton
          bg="none"
          // size={10}
          color="blue.500"
          aria-label="Add Signers"
          icon={<RiAddCircleFill size={20} />}
          _hover={{ bg: "none" }}
        />
      </HStack>
      <VStack w="96%" pr={3}>
        <Container
          maxH={52}
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#3182CE",
              borderRadius: "24px",
            },
          }}
        >
          {signers &&
            signers.map((e, i) => (
              <SignerInfo
                key={i}
                name={"name"}
                address={"Address"}
                title={"title"}
              />
            ))}
        </Container>
      </VStack>
    </VStack>
  );
};
