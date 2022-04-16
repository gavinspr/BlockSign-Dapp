import {
  Center,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const MySignature = () => {
  const [isOpen1, setIsOpen] = React.useState(true);
  const open = () => setIsOpen(!isOpen1);
  const close = () => setIsOpen(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [urSig, setUrSig] = React.useState<any[]>([]);
  return (
    <VStack
      pt={4}
      align="left"
      // borderWidth={2}
      w="90%"
    >
      <Text>Your Signature:</Text>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen1}
        onClose={close}
        // placement="right"
        placement="top"
        closeOnBlur={false}
        arrowSize={15}
      >
        <PopoverTrigger>
          {urSig ? (
            <Image
              h="32"
              boxShadow="2px 2px 4px #3182CE"
              borderRadius={6}
              src="/sig.png"
              onClick={onOpen}
            />
          ) : (
            <Center
              boxShadow="2px 2px 4px #3182CE"
              h="32"
              borderRadius={6}
              onClick={onOpen}
            >
              <Text fontSize={18}>No Signature Minted For This Account</Text>
            </Center>
          )}
        </PopoverTrigger>
        <PopoverContent
          // ml={10}
          w="fit-content"
          boxShadow="0 1px 6px #000000"
          color="white"
          // bgGradient="linear(to-b, blue.600, blue.200)"
          bg="blue.500"
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
    </VStack>
  );
};
