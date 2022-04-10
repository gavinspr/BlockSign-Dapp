import { Box, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { MetaMaskConnection } from "./components/MetaMaskConnection";

type NavbarProps = {};

export const Navbar = () => {
  return (
    <HStack h={14} spacing={5} boxShadow="0 1px 4px #000000e3">
      {/*// todo: logo component */}
      <Heading fontSize="2xl" ml={20}>BlockSign</Heading>
      <Text fontSize="sm">My Documents</Text>
      <Spacer />
      <MetaMaskConnection />
      <ColorModeSwitcher />
    </HStack>
  );
};
