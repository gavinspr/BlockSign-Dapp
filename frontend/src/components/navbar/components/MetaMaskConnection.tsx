import React, { useState, useEffect,  } from "react";
import {
  useMetaMask,
} from "../../../context";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Flex,
  Icon,
  Spacer,
  Text,
  Spinner,
  ButtonProps,
} from "@chakra-ui/react";
import { RiLogoutCircleRLine, RiSettings4Fill } from "react-icons/ri";
import { FaWallet, FaChevronDown } from "react-icons/fa";

type MetaMaskConnectionProps = ButtonProps;

export const MetaMaskConnection = (props: MetaMaskConnectionProps) => {
  const { wallet, connectWallet } = useMetaMask();

  const displayWallet: string = `0x...${wallet.slice(-4)}`;

  useEffect(() => {
    connectWallet();
  }, []);

  // useEffect(() => {
  //   fetchBalances();
  // }, [wallet]);

  return wallet.length > 0 ? (
    <Flex align="center">
      <Menu>
        <MenuButton
          as={Button}
          size="sm"
          fontSize="md"
          borderRadius={30}
          // background="blue.500"
          colorScheme="blue"
          leftIcon={<FaWallet />}
          rightIcon={<FaChevronDown />}
          _hover={{ background: "blue.300" }}
          {...props}
        >
          {displayWallet}
        </MenuButton>
        <MenuList borderRadius={20}>
          <MenuDivider />
          <MenuGroup>
            <MenuItem _hover={{ background: "none" }}>
              <Text fontSize="sm" fontWeight="bold" color="blue.500">
                Profile
              </Text>
              <Spacer />
              <Icon as={RiSettings4Fill} w={5} h={5} color="gray.500" />
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem
              // onClick={() => handleDisconnection()}
              _hover={{ background: "none" }}
            >
              <Text fontSize="sm" fontWeight="bold" color="blue.500">
                Disconnect Wallet
              </Text>
              <Spacer />
              <Icon as={RiLogoutCircleRLine} w={5} h={5} color="red.500" />
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Flex>
  ) : (
    <Button
      boxShadow="0 2px 4px #000000"
      size="sm"
      // color="white"
      // fontSize="md"
      borderRadius={30}
      colorScheme="blue"
      // background="blue.500"
      onClick={() => connectWallet()}
      // _hover={{ background: "blue.300" }}
      {...props}
    >
      Connect Wallet
    </Button>
  );
};
