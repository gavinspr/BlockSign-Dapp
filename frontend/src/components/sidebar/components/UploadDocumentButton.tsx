import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import {
  SelectedDocumentsContext,
  SelectedDocumentsContextType,
  useSelectedDocuments,
} from "../../../context";

type UploadDocumentButtonProps = {
  nftSignature: string | undefined;
};

export const UploadDocumentButton = ({
  nftSignature,
}: UploadDocumentButtonProps) => {
  const { setDocuments } = useSelectedDocuments();

  const [popover, showPopover] = useState<boolean>(false);

  useEffect(() => {
    !nftSignature && showPopover(false);
  });

  return (
    <>
      <Popover
        returnFocusOnClose={false}
        isOpen={popover}
        // onClose={close}
        // placement="right"
        closeOnBlur={false}
        // arrowSize={15}
      >
        <PopoverTrigger>
          <Button
            onClick={setDocuments}
            // w="60%" mt={14}
            w="40%"
            borderRadius={14}
            colorScheme="blue"
            boxShadow="0 1px 3px #000000"
          >
            Upload A Document
          </Button>
        </PopoverTrigger>
        <PopoverContent
          w="fit-content"
          boxShadow="0 1px 6px #000000"
          color="white"
          bg="blue.500"
        >
          <PopoverHeader fontWeight="semibold" border="0">
            Sign documents on the Blockchain!
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
    </>
  );
};
