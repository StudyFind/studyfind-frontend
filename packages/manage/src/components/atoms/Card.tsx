import { memo } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const Card = memo(({ children, ...rest }: Props) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
      rounded="md"
      {...rest}
    >
      {children}
    </Box>
  );
});
