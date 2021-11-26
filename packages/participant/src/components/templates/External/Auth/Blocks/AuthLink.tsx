import { useColorModeValue } from "hooks";
import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const AuthLink = ({ children, ...rest }: Props) => {
  const color = useColorModeValue("#718096", "gray.500");
  const hoverColor = useColorModeValue("blue.500", "blue.400");

  const hoverStyles = {
    color: hoverColor,
    borderBottomColor: hoverColor,
  };

  return (
    <Box
      as="button"
      type="button"
      display="inline-block"
      cursor="pointer"
      margin="auto"
      color="#718096"
      fontSize="0.9rem"
      borderBottomWidth="1px"
      borderBottomStyle="dashed"
      borderBottomColor={color}
      _hover={hoverStyles}
      _focus={hoverStyles}
      {...rest}
    >
      {children}
    </Box>
  );
};
