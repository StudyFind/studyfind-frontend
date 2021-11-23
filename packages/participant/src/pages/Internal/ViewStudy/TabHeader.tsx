import { ReactNode } from "react";
import { Heading, HStack } from "@chakra-ui/react";

interface Props {
  heading: string;
  children?: ReactNode;
}

function TabHeader({ heading, children }: Props) {
  return (
    <HStack justify="space-between" align="center" marginBottom="20px">
      <Heading size="lg">{heading}</Heading>
      <HStack spacing="10px" align="center">
        {children}
      </HStack>
    </HStack>
  );
}

export default TabHeader;
