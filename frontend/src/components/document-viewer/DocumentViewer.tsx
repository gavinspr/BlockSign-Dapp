import React, { useContext, useEffect, useRef, useState } from "react";
import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import ReactSignatureCanvas from "react-signature-canvas";
import {
  SelectedDocumentsContext,
  SelectedDocumentsContextType,
} from "../../context";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Draggable from "react-draggable";

export const DocumentViewer = () => {
  const { selectedDocuments } = useContext(
    SelectedDocumentsContext
  ) as SelectedDocumentsContextType;

  console.log(selectedDocuments);

  const docs = [
    {
      uri: selectedDocuments?.split("blob:")[1],
    },
  ];

  // function printDocument() {
  //   const input = document.getElementById("divToPrint");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     // pdf.output('dataurlnewwindow');
  //     pdf.save("download.pdf");
  //   });
  // }

  console.log(selectedDocuments?.split("blob:")[1]);
  const [page, setPage] = useState(1);
  return (
    <>
      {/* <Button mt={16} onClick={printDocument}>
        Print
      </Button> */}
      <Box
        // id="divToPrint"
        // bgGradient='linear(to-r, green.200, pink.500)'
        // bgGradient="linear(to-br, blue.300, blue.50)"
        // w="26rem"
        minH="94vh"
        // h="100vh"
        w="75vw"
        // w="100%"
        // h="100%"
        pos="absolute"
        // top="6vh"
        right={0}

        //  boxShadow="0 1px 4px #3182CE"
        // borderWidth={3}
        // borderColor="red"
      >
        {selectedDocuments ? (
          <Center
            // pos="relative"
            id="divToPrint"
            // alignContent="center"
            // justifyContent="center"
            // borderWidth={3}
            // borderColor="blue"
          >
            {/* <Draggable>
            <Box
              id="divToPrint"
              zIndex="overlay"
              borderColor="purple"
              borderWidth={3}
              pos="absolute"
              top={40}
              // right={10}
              width="20%"
              >
              <Text mr={12}>Gavin Sproles</Text>
            </Box>
          </Draggable> */}
            {/* <Box pos="relative" w="100%" h="100%"> */}
            {/* <DocViewer
            
              // id="divToPrint"
              pluginRenderers={DocViewerRenderers}
              documents={docs}
              style={{
                boxShadow: "inset 0 1px 4px #00000024",
                width: "60%",
                height: "86vh",
                position: "absolute",
                top: 40,
                // zIndex
              }}
              config={{
                header: {
                  disableHeader: true,
                  disableFileName: true,
                },
              }}
            /> */}

            <Image
              pos="absolute"
              top={10}
              w="60%"
              h="86vh"
              src={selectedDocuments}
            />
            {/* </Box> */}
          </Center>
        ) : (
          <Center
            w="45%"
            h="28vh"
            m="auto"
            display="flex"
            justifyContent="center"
            pos="relative"
            top={80}
            borderRadius={8}
            borderStyle="dashed"
            borderWidth={3}
            borderColor="gray.500"
          >
            <Heading
              textAlign="center"
              color="gray.500"
              // fontSize={30}
            >
              Select A Document To View
              <br />
              Or
              <br />
              Upload A New Document
            </Heading>
          </Center>
        )}
      </Box>
    </>
  );
};
