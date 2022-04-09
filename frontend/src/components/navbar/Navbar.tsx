import { Box, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import { MetaMaskConnection } from "./components/metamask-connection/MetaMaskConnection";

type NavbarProps = {};

export const Navbar = () => {
  return (
    <HStack h={14} spacing={5} boxShadow="0 1px 4px #000000e3">
      {/*// todo: logo component */}
      <p>BlockSign</p>
      <p>My Documents</p>
      <Spacer />
      <MetaMaskConnection />
      <ColorModeSwitcher />
    </HStack>
  );
};
