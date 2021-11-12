import React, { memo } from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

interface Props {
  label?: string;
  error?: string;
  children: JSX.Element;
}

export const InputWrapper = memo(({ label, error, children }: Props) => {
  const LABEL = label && <FormLabel>{label}</FormLabel>;
  const ERROR = error && <FormErrorMessage>{error}</FormErrorMessage>;

  return (
    <FormControl isInvalid={!!error}>
      {LABEL}
      {children}
      {ERROR}
    </FormControl>
  );
});
