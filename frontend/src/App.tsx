import * as React from "react";
import {
  ChakraProvider,
  Box,
  // Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  GridItem,
  Flex,
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Navbar } from "./components/navbar/Navbar";
import { Global, css } from "@emotion/react";
import { Sidebar } from "./components/sidebar/Sidebar";
import galaxy from "./galaxy.jpg";
import MetaMaskProvider from "./context/metaMaskContext";
// import { DocumentViewerz } from "./components/document-viewer/DocumentViewerz";
import SelectedDocumentsProvider from "./context/selectedDocumentsContext";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App = () => (
  <ChakraProvider theme={theme}>
    <MetaMaskProvider>
      <SelectedDocumentsProvider>
        <Global styles={GlobalStyles} />
        {/* <Grid
        templateRows='repeat(8, 1fr)'
        templateColumns='repeat(5, 1fr)'
        // borderWidth={3}
        // gap={0}
        // h="100"
        // w="100%"
      > */}
        {/* <GridItem
        colSpan={5}
        rowSpan={1}
        > */}
        {/* <Flex> */}
        <Navbar />
        {/* </GridItem>
        <GridItem
        rowSpan={6}
        colSpan={2}
      > */}
        <Sidebar />
        {/* </Flex> */}
        {/* </GridItem>
        <GridItem
        colSpan={4}
      > */}
        {/* <DocumentViewerz /> */}
        {/* </GridItem>
      </Grid> */}
      </SelectedDocumentsProvider>
    </MetaMaskProvider>
  </ChakraProvider>
);
