import { ReactNode } from "react";
import { useColorModeValue } from "hooks";
import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

function Wrapper({ children }: Props) {
  const border = useColorModeValue("gray.200", "gray.700");
  const background = useColorModeValue("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      background={background}
      rounded="md"
      padding="15px"
      width="100%"
    >
      {children}
    </Box>
  );
}

export default Wrapper;
