import React, { useContext } from "react";
import { Image, Spacer, HStack, VStack, Heading } from "@chakra-ui/react";
import { UploadDocumentButton } from "./components/UploadDocumentButton";
import { DocNameInput } from "./components/DocNameInput";
import { DocDescriptionInput } from "./components/DocDescriptionInput";
import { SendButton } from "./components/SendButton";
import { SignButton } from "./components/SignButton";
import { DocSigners } from "./components/doc-signers/DocSigners";
import { MySignature } from "./components/MySignature";
import { MyDocuments } from "./components/MyDocuments";
import {
  useMetaMask,
  useSelectedDocuments,
} from "../../context";

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

export const Sidebar = () => {
  const { nftSignature } = useMetaMask();

  const { selectedDocuments } = useSelectedDocuments();
  
  return (
    <VStack
      w="30rem"
      h="100vh"
      bg="white"
      pos="absolute"
      boxShadow="0 1px 10px #000000"
    >
      <Header />
      <UploadDocumentButton nftSignature={nftSignature} />

      {selectedDocuments ? (
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
      ) : (
        <VStack w="100%">
          <MyDocuments />
          <MySignature nftSignature={nftSignature} />
        </VStack>
      )}
    </VStack>
  );
};
