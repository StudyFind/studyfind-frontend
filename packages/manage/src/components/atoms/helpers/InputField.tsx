import { memo } from "react";

import { Input, useColorModeValue } from "@chakra-ui/react";

type Props = {
  as?: React.FC;
  error?: string;
  [key: string]: any;
};

export const InputField = memo(({ as, error, ...rest }: Props) => {
  const errorPlaceholderColor = useColorModeValue("red.400", "red.400");
  const errorBackground = useColorModeValue("red.100", "red.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const backgroundColor = useColorModeValue("white", "gray.900");
  const hoverBorderColor = useColorModeValue("gray.300", "gray.600");
  const placeholderColor = useColorModeValue("gray.400", "gray.500");

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
});
