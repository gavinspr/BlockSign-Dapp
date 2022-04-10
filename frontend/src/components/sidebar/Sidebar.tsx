import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { UploadButton } from "./components/UploadButton";
import { DocNameInput } from "./components/DocNameInput";
import { DocDescriptionInput } from "./components/DocDescriptionInput";
import { SendButton } from "./components/SendButton";
import { SignButton } from "./components/SignButton";
import { DocSigners } from "./components/doc-signers/DocSigners";

type SidebarProps = {};

export const Sidebar = () => {
  return (
    <VStack
      // flexDir="column"
      // borderRightWidth={1}
      // borderRightColor="blue.500"
      // backgroundColor="blue.400"
      maxW="24rem"
      // mt={5}
      // flex="1"
      h="94vh"
      // overflow=""
      // spacing={10}
position="sticky"  
      boxShadow="0 1px 4px #3182CE"
    >
      <UploadButton />
      <DocNameInput />
      <DocDescriptionInput />
      <DocSigners />
      <Spacer />
      <HStack spacing={10} justify="center" h={32} w="94%"
              borderTopWidth={2}
              borderColor="blue.500"
      >
        <SignButton />
        <SendButton />
      </HStack>
    </VStack>
  );
};
