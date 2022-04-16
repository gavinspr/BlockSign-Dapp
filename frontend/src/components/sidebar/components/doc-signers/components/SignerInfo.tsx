import React from "react";
import { Text, HStack, VStack, Tooltip, IconButton } from "@chakra-ui/react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SIGNER_INPUTS } from "../../../../../constants";

type SignerInfoProps = {
  id: number;
  name: string;
  address: string;
  title?: string | undefined;
  removeSigner: (id: number) => void;
};

export const SignerInfo = ({
  id,
  name,
  address,
  title,
  removeSigner,
}: SignerInfoProps) => {
  return (
    <HStack align="left" mb={2}>
      {SIGNER_INPUTS.map((input: string, index: number) => (
        <VStack
          key={index}
          spacing={0}
          align="left"
          w={input === "address" ? "40%" : "30%"}
        >
          <Text fontSize={10} fontWeight="bold">
            {input.charAt(0).toUpperCase() + input.slice(1)}:
          </Text>
          <Text fontSize={input === "address" ? 10 : 12}>
            {input === "name"
              ? name
              : input === "address"
              ? address
              : title
              ? title
              : "none"}
          </Text>
        </VStack>
      ))}
      <Tooltip
        hasArrow
        bg="blue.500"
        placement="top"
        borderRadius={8}
        label="Remove signer"
        aria-label="Remove signer button tooltip"
      >
        <IconButton
          bg="none"
          color="red.400"
          aria-label="Remove signer button"
          icon={<RiCloseCircleLine size={20} />}
          onClick={() => removeSigner(id)}
          _hover={{ bg: "none" }}
        />
      </Tooltip>
    </HStack>
  );
};
