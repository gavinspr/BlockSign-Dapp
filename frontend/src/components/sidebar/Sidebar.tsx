import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
  useDisclosure,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup,
  PopoverProps,
} from "@chakra-ui/react";
import { UploadDocumentButton } from "./components/UploadDocumentButton";
import { DocNameInput } from "./components/DocNameInput";
import { DocDescriptionInput } from "./components/DocDescriptionInput";
import { SendButton } from "./components/SendButton";
import { SignButton } from "./components/SignButton";
import { DocSigners } from "./components/doc-signers/DocSigners";
import { MetaMaskConnection } from "../navbar/components/MetaMaskConnection";
import { MySignature } from "./components/MySignature";
import { MyDocuments } from "./components/MyDocuments";
import { MetaMaskContext, MetaMaskContextType } from "../../context";

const Header = () => {
  return (
    <HStack mt={4} mb={3} justify="center">
      <Heading fontSize="5xl" aria-label="BlockSign heading">
        BlockSign
      </Heading>
      <Image src="/b.png" w="10%" aria-label="BlockSign logo" />
    </HStack>
  );
};

type SidebarProps = {};

export const Sidebar = () => {
  const [isOpen1, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen1);
  const close = () => setIsOpen(false);
  const [myDocuments, showMyDocuments] = useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urDocs, setUrDocs] = useState<any[]>([]);
  const [urSig, setUrSig] = useState<any>();
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const { nftSignature } = useContext(MetaMaskContext) as MetaMaskContextType;

  return (
    <VStack
      w="30rem"
      h="100vh"
      bg="white"
      pos="absolute" // ? needed
      boxShadow="0 1px 10px #000000"
    >
      <Header />
      <UploadDocumentButton nftSignature={nftSignature} />

      {myDocuments ? (
        <>
          <MyDocuments />
          <MySignature nftSignature={nftSignature} />
        </>
      ) : (
        <>
          <DocNameInput />
          <DocDescriptionInput />
          <DocSigners />
          <Spacer />
          <HStack
            h={32}
            w="94%"
            spacing={10}
            justify="center"
            borderTopWidth={2}
            borderColor="blue.500"
          >
            <SignButton />
            <SendButton />
          </HStack>
        </>
      )}
    </VStack>
  );
};
