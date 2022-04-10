import React, { useState, useEffect, useContext } from "react";
import { MetaMaskContext, MetaMaskContextType } from "../../../context";
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
} from "@chakra-ui/react";
import { RiLogoutCircleRLine, RiSettings4Fill } from "react-icons/ri";
import { FaWallet, FaChevronDown } from "react-icons/fa";

export const MetaMaskConnection = () => {
  const { wallet, connectWallet } = useContext(
    MetaMaskContext
  ) as MetaMaskContextType;

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
          background="blue.500"
          colorScheme="blue"
          leftIcon={<FaWallet />}
          rightIcon={<FaChevronDown />}
          _hover={{ background: "blue.300" }}
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
      size="sm"
      // color="white"
      // fontSize="md"
      borderRadius={30}
      colorScheme="blue"
      // background="blue.500"
      // onClick={() => connectWallet()}
      // _hover={{ background: "blue.300" }}
    >
      Connect Wallet
    </Button>
  );
};

// type MetaMaskConnectionProps = ButtonProps;

// export const MetaMaskConnection: React.FC<MetaMaskConnectionProps> = (
//   props
// ) => {
//   return (
//     <Button
//       size="sm"
//       color="white"
//       // fontSize="md"
//       borderRadius={30}
//       background="blue.500"
//       // onClick={() => connectWallet()}
//       // _hover={{ background: "blue.300" }}
//       {...props}
//     >
//       Connect Wallet
//     </Button>
//   );
// };
