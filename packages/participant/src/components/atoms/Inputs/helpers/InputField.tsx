import React from "react";

import { useColor } from "hooks";
import { Input } from "@chakra-ui/react";

type Props = {
  as?: React.FC;
  error?: string;
  [key: string]: any;
};

export const InputField = ({ as, error, ...rest }: Props) => {
  const errorPlaceholderColor = useColor("red.400", "red.400");
  const errorBackground = useColor("red.100", "red.800");
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");
  const hoverBorderColor = useColor("gray.300", "gray.600");
  const placeholderColor = useColor("gray.400", "gray.500");

  const Field = as || Input;

  return (
    <Field
      width="100%"
      autoComplete="off"
      borderColor={borderColor}
      background={error ? errorBackground : backgroundColor}
      _placeholder={{ color: error ? errorPlaceholderColor : placeholderColor }}
      _hover={{ borderColor: hoverBorderColor }}
      {...rest}
    />
  );
};
