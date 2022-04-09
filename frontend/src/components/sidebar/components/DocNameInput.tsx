import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const DocNameInput = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <FormControl isRequired w="90%" >
      <FormLabel htmlFor="name" >
        Document Name
      </FormLabel>
      <Input
        id="name"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      {/* {!isError ? ( */}
      <FormHelperText>Enter a name for your document.</FormHelperText>
      {/* ) 
      : (
        // <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
    </FormControl>
  );
};
