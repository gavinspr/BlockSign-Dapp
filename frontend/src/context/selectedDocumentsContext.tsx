import React, { createContext, useContext, useEffect, useState } from "react";
import { fileDialog } from "file-select-dialog";

export type SelectedDocumentsContextType = {
  setDocuments: () => void;
  selectedDocuments: string;
};

export const SelectedDocumentsContext =
  createContext<SelectedDocumentsContextType | null>(null);

export const useSelectedDocuments = () =>
  useContext(SelectedDocumentsContext) as SelectedDocumentsContextType;

const SelectedDocumentsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedDocuments, setSelectedDocuments] = useState<any>();

  const setDocuments = async () => {
    const fileList = await fileDialog();

    var file = new Blob([fileList[0]], { type: "application/pdf" });
    var fileURL = URL.createObjectURL(file);

    setSelectedDocuments(fileURL);
  };

  return (
    <SelectedDocumentsContext.Provider
      value={{
        setDocuments,
        selectedDocuments,
      }}
    >
      {children}
    </SelectedDocumentsContext.Provider>
  );
};

export default SelectedDocumentsProvider;
