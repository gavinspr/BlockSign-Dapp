import React, { useContext, useEffect, useRef } from "react";
import { Button } from "@chakra-ui/react";
import {
  SelectedDocumentsContext,
  SelectedDocumentsContextType,
} from "../../../context";

export const UploadDocumentButton = () => {
  const { setDocuments } = useContext(
    SelectedDocumentsContext
  ) as SelectedDocumentsContextType;

  return (
    <>
      <Button onClick={setDocuments} w="60%" mt={14}>
        Upload A Document
      </Button>
    </>
  );
};
