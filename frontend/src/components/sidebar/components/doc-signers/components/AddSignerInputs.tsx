import React, { Dispatch, SetStateAction } from "react";
import {
  HStack,
  Input,
  FormLabel,
  FormControl,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { FormSigner } from "@/types/FormSigner";
import { SIGNER_INPUTS } from "../../../../../constants";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  address: string;
  title: string;
};

type AddSignerInputsProps = {
  address: string | undefined;
  setDocumentSigners: Dispatch<SetStateAction<FormSigner[]>>;
};

export const AddSignerInputs = ({
  address,
  setDocumentSigners,
}: AddSignerInputsProps) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setDocumentSigners((signers: FormSigner[]) => [
      ...signers,
      { name: data.name, address: data.address, title: data.title },
    ]);
  };

  // Keep tooltips updated with current input values
  const onChange: SubmitHandler<Inputs> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)}>
      <HStack>
        {SIGNER_INPUTS.map((input: string, index: number) => (
          <FormControl key={index} isRequired={input !== "title"}>
            <FormLabel fontSize={14}>
              {input.charAt(0).toUpperCase() + input.slice(1)}
            </FormLabel>
            <Tooltip
              hasArrow
              arrowSize={6}
              bg="blue.500"
              fontSize={13}
              borderRadius={8}
              placement="bottom-start"
              aria-label={`${input} field tooltip`}
              label={getValues(
                input === "name"
                  ? "name"
                  : input === "address"
                  ? "address"
                  : "title"
              )}
            >
              <Input
                size="sm"
                id={input}
                type="text"
                defaultValue={input === "address" ? address : undefined}
                {...register(
                  input === "name"
                    ? "name"
                    : input === "address"
                    ? "address"
                    : "title"
                )}
              />
            </Tooltip>
          </FormControl>
        ))}
        <Tooltip
          hasArrow
          bg="blue.500"
          placement="top"
          borderRadius={8}
          label="Add signer"
          aria-label="Add signer button tooltip"
        >
          <IconButton
            pt={6}
            bg="none"
            type="submit"
            color="green.500"
            aria-label="Add signers button"
            icon={<RiCheckboxCircleLine size={20} />}
            _hover={{ bg: "none" }}
          />
        </Tooltip>
      </HStack>
    </form>
  );
};
