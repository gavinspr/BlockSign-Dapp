import { Center, Container, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const MyDocuments = () => {

  const [urDocs, setUrDocs] = React.useState<any[]>([]);
  return (
    <VStack
    pt={6}
    align="left"
    // borderWidth={2}
    w="90%"
  >
    <Text>Your Documents:</Text>
    <Container
      // borderWidth={2}
      boxShadow="inset 0 1px 3px #3182CE"
      borderRadius={6}
      h="58vh"
    >
      {urDocs.length !== 0 ? (
        urDocs.map((e: any, i: any) => <Text>ppp</Text>)
      ) : (
        <Center h="100%">
          <Text fontSize={20}>No Documents Uploaded</Text>
        </Center>
      )}
    </Container>
  </VStack>
  )
}
