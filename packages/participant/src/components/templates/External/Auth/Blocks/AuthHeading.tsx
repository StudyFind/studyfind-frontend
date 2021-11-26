import { useColorModeValue } from "hooks";
import { Heading } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const AuthHeading = ({ children, ...rest }: Props) => {
  const color = useColorModeValue("blue.500", "blue.400");

  return (
    <Heading marginBottom="6px" color={color} fontSize="1.75rem" textAlign="center" {...rest}>
      {children}
    </Heading>
  );
};
