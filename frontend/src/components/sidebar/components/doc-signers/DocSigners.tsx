import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  HStack,
  VStack,
  Container,
  Text,
  Alert,
  AlertIcon,
  Spacer,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import {
  RiAddCircleFill,
  RiIndeterminateCircleFill,
  RiInformationFill,
} from "react-icons/ri";
import { FormSigner } from "@/types/FormSigner";
import {
  useMetaMask,
} from "../../../../context";
import { SignerInfo } from "./components/SignerInfo";
import { AddSignerInputs } from "./components/AddSignerInputs";

export const DocSigners = () => {
  const [fieldInfo, showFieldInfo] = useState<boolean>(false);
  const [addNewSigner, showAddNewSigner] = useState<boolean>(false);
  const [documentSigners, setDocumentSigners] = useState<FormSigner[]>([]);

  const { wallet } = useMetaMask();

  useEffect(() => {
    documentSigners.length < 1
      ? showAddNewSigner(true)
      : showAddNewSigner(false);
  }, [documentSigners]);

  const removeSigner = (id: number) => {
    const filteredSigners = documentSigners.filter(
      (signer: FormSigner, index: number) => {
        if (index !== id) return signer;
      }
    );

    setDocumentSigners(filteredSigners);
  };

  return (
    <VStack w="100%" spacing={2}>
      {/* Show field information button on hover over field title */}
      <HStack w="90%">
        <Box
          pt={10}
          pos="relative"
          onMouseEnter={() => showFieldInfo(true)}
          onMouseLeave={() => showFieldInfo(false)}
        >
          {fieldInfo && (
            <IconButton
              top={0}
              left={14}
              bg="none"
              type="submit"
              pos="absolute"
              color="blue.500"
              aria-label="Document signers field information"
              icon={<RiInformationFill size={26} opacity={100} />}
              onMouseEnter={() => showFieldInfo(true)}
              _hover={{ bg: "none" }}
            />
          )}
          <Text>Document Signers</Text>
        </Box>
        <Spacer />
        {/* If initial signer added, show button to add new signers */}
        {documentSigners.length > 0 && (
          <Tooltip
            hasArrow
            bg="blue.500"
            placement="top"
            borderRadius={8}
            label={
              !addNewSigner
                ? "Add as many additional signers as required"
                : "Remove new signer details"
            }
            aria-label={
              !addNewSigner
                ? "Add new signer button tooltip"
                : "Remove new signer details tooltip"
            }
          >
            {/* Show remove new signer details button when signer inputs are visible */}
            <IconButton
              pt={9}
              bg="none"
              color="blue.500"
              icon={
                !addNewSigner ? (
                  <RiAddCircleFill size={20} />
                ) : (
                  <RiIndeterminateCircleFill size={20} />
                )
              }
              onClick={() => showAddNewSigner(!addNewSigner)}
              aria-label={
                !addNewSigner
                  ? "Add new signer button"
                  : "Remove new signer button"
              }
              _hover={{ bg: "none" }}
            />
          </Tooltip>
        )}
      </HStack>
      <VStack w="96%" pr={3}>
        {/* Modify scroll bar */}
        <Container
          maxH={52}
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#3182CE",
              borderRadius: "24px",
            },
          }}
        >
          {/*Display information for form signers */}
          {documentSigners.map((signer: FormSigner, index: number) => (
            <SignerInfo
              id={index}
              key={index}
              name={signer.name}
              address={signer.address}
              title={signer.title}
              removeSigner={removeSigner}
            />
          ))}
          {/*Show new signer input. If no signers auto-fill address with user's wallet address */}
          {addNewSigner && wallet && (
            <AddSignerInputs
              address={documentSigners.length < 1 ? wallet : undefined}
              setDocumentSigners={setDocumentSigners}
            />
          )}
          {/* Toggle informative alerts, hide signers array has at least 2 elements */}
          {documentSigners.length < 2 && (
            <Alert
              mt={5}
              h={10}
              w="94%"
              borderRadius={10}
              status={documentSigners.length < 1 ? "warning" : "info"}
            >
              <AlertIcon />
              <Text>
                {documentSigners.length < 1
                  ? "Start by adding your information"
                  : "Add additional signers to request"}
              </Text>
            </Alert>
          )}
        </Container>
      </VStack>
    </VStack>
  );
};
