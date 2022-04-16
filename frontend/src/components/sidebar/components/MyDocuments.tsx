import React from "react";
import { Center, Container, Text, VStack } from "@chakra-ui/react";

export const MyDocuments = () => {
  const [urDocs, setUrDocs] = React.useState<any[]>([]);
  return (
    <VStack w="90%" pt={6} align="left">
      <Text>Your Documents:</Text>
      <Container h="58vh" borderRadius={6} boxShadow="inset 0 1px 3px #3182CE">
        {urDocs.length !== 0 ? (
          urDocs.map((e: any, i: any) => <div></div>)
        ) : (
          <Center h="100%">
            <Text fontSize={20}>No Documents Uploaded</Text>
          </Center>
        )}
      </Container>
    </VStack>
  );
};
