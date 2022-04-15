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
import { UploadDocumentButton } from "./components/UploadDocumentButton";
import { DocNameInput } from "./components/DocNameInput";
import { DocDescriptionInput } from "./components/DocDescriptionInput";
import { SendButton } from "./components/SendButton";
import { SignButton } from "./components/SignButton";
import { DocSigners } from "./components/doc-signers/DocSigners";

type SidebarProps = {};

export const Sidebar = () => {
  return (
    // <>
    <VStack
      w="27rem"
      minH="94vh"
      pos="absolute"
      top="6vh"
      boxShadow="0 1px 4px #3182CE"
      // zIndex="overlay"
      bg="white"
      // bgGradient="linear(to-r, blue.200, teal.500)"
    >
      <UploadDocumentButton />
      <DocNameInput />
      <DocDescriptionInput />
      <DocSigners />
      <Spacer />
      <HStack
        spacing={10}
        justify="center"
        h={32}
        w="94%"
        borderTopWidth={2}
        borderColor="blue.500"
      >
        <SignButton />
        <SendButton />
      </HStack>
    </VStack>
  );
};
