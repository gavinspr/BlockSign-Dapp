import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  Button,
  VStack,
  Center,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton,
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

type MySignatureProps = {
  nftSignature: string | undefined;
};

export const MySignature = ({ nftSignature }: MySignatureProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [popover, showPopover] = useState<boolean>(false);

  useEffect(() => {
    // make sure takes into account loading nft sig for accounts that do have them
    !nftSignature && showPopover(true);
  }, []);

  return (
    <VStack w="90%" pt={4} align="left">
      <Text>Your Signature:</Text>
      <Popover
        arrowSize={15}
        placement="top"
        isOpen={popover}
        closeOnBlur={false}
        returnFocusOnClose={false}
        onClose={() => showPopover(false)}
      >
        <PopoverTrigger>
          {nftSignature ? (
            <Image
              h="32"
              src={nftSignature}
              borderRadius={6}
              boxShadow="2px 2px 4px #3182CE"
              onClick={onOpen}
              _hover={{ boxShadow: "4px 4px 8px #2C5282" }}
            />
          ) : (
            <Center
              h="32"
              borderRadius={6}
              onClick={onOpen}
              boxShadow="2px 2px 4px #3182CE"
              _hover={{
                background: "blue.50",
                boxShadow: "4px 4px 8px #2C5282",
              }}
            >
              <Text fontSize={18}>No Signature Minted For This Account</Text>
            </Center>
          )}
        </PopoverTrigger>
        <PopoverContent
          w="fit-content"
          bg="blue.500"
          color="white"
          boxShadow="0 1px 6px #000000"
        >
          <PopoverHeader border={0} fontWeight="semibold">
            Get started with BlockSign!
          </PopoverHeader>
          <PopoverArrow
            bgGradient="linear(to-tr, blue.600, blue.200)"
            bg="blue.500"
          />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Modal size="4xl" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent h="55%" ml="25%">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
