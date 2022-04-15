import { Box, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { MetaMaskConnection } from "./components/MetaMaskConnection";

type NavbarProps = {};

export const Navbar = () => {
  return (
    <HStack
      // h={14}
      // h="6vh"
      h="fit-content"
      pt={2}
      pb={2}
      spacing={5}
      boxShadow="0 2px 4px #000000e3"
      pos="absolute"
      w="100%"
      // zIndex="overlay"
      // background="white"
      // bgGradient="linear(to-tr, blue.500, blue.100)"
      
    >
      {/*// todo: logo component */}
      <Heading fontSize="2xl" ml={20}>
        BlockSign
      </Heading>
      <Text fontSize="sm">My Documents</Text>
      <Spacer />
      <MetaMaskConnection />
      <ColorModeSwitcher />
    </HStack>
  );
};
