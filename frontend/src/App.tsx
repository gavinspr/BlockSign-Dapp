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
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Navbar } from "./components/navbar/Navbar";
import { Global, css } from "@emotion/react";
import { Sidebar } from "./components/sidebar/Sidebar";
import galaxy from "./galaxy.jpg";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

export const App = () => (
  <ChakraProvider theme={theme}>
    <Global styles={GlobalStyles} />
    {/* <Box textAlign="center" fontSize="xl"> */}
    {/* <Grid minH="100vh" p={3}> */}
    {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    <Navbar />
    <Sidebar />
    {/* <Box> */}
    {/* <Image boxSize="200px" src={galaxy} /> */}
    {/* </Box> */}

    {/* <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack> */}
    {/* </Grid>
    </Box> */}
  </ChakraProvider>
);
