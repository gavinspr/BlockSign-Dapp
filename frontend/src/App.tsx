import * as React from "react";
import {
  ChakraProvider,
  HStack,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { Global, css } from "@emotion/react";
import { Sidebar } from "./components/sidebar/Sidebar";
import MetaMaskProvider from "./context/metaMaskContext";
import { DocumentViewer } from "./components/document-viewer/DocumentViewer";
import SelectedDocumentsProvider from "./context/selectedDocumentsContext";
import { MetaMaskConnection } from "./components/navbar/components/MetaMaskConnection";
import { ColorModeSwitcher } from "./components/navbar/components/ColorModeSwitcher";

// const GlobalStyles = css`
//   .js-focus-visible :focus:not([data-focus-visible-added]) {
//     outline: none;
//     box-shadow: none;
//   }
// `;

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MetaMaskProvider>
        <SelectedDocumentsProvider>
          {/* <Global styles={GlobalStyles} /> */}
          <HStack top={3} right={4} pos="absolute" zIndex="overlay">
            <MetaMaskConnection boxShadow="0 2px 4px #000000" />
            <ColorModeSwitcher pos="relative" />
          </HStack>
          <Sidebar />
          <DocumentViewer />
        </SelectedDocumentsProvider>
      </MetaMaskProvider>
    </ChakraProvider>
  );
};
