import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { Upload } from "./components/Upload";

type SidebarProps = {};

export const Sidebar = () => {
  return (
    <VStack
      // flexDir="column"
      // borderWidth={1}
      // borderColor="red"
      // backgroundColor="blue.400"
      w={80}
      // mt={5}
      // flex="1"
      h="94vh"
      // overflow=""
      boxShadow="0 1px 4px #4299E1"
    >
      <Upload />
      {/* <Button>Sign</Button> */}
      {/* <Button>Send</Button> */}
    </VStack>
  );
};
