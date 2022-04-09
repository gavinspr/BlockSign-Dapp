import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export const DocDescriptionInput = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";
  return (
    <FormControl w="90%">
      <FormLabel>Document Description/Details</FormLabel>
      <Textarea
        id="description"
        value={input}
        onChange={handleInputChange}
        maxH={60}
      />
      {/* {!isError ? ( */}
      <FormHelperText>
        Add any additional details pertaining to the document.
      </FormHelperText>
      {/* ) 
      : (
        // <FormErrorMessage>Email is required.</FormErrorMessage>
      )} */}
    </FormControl>
  );
};
