import { memo } from "react";
import { useColorModeValue } from "hooks";
import { Box } from "@chakra-ui/react";

interface Props {
  readonly children: React.ReactNode;
  readonly [key: string]: any;
}

export const Card = memo(({ children, ...rest }: Props) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Box
      rounded="md"
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
      {...rest}
    >
      {children}
    </Box>
  );
});
