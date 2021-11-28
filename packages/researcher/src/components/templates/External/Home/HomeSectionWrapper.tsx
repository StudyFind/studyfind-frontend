import { Stack } from "@chakra-ui/react";
import { useColorModeValue, useDevice } from "hooks";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

function HomeSectionWrapper({ children, ...rest }: Props) {
  const { isPhone } = useDevice();

  const backgroundColor = useColorModeValue("white", "gray.900");

  return (
    <Stack
      justify="center"
      align="center"
      paddingX={isPhone ? "40px" : "100px"}
      paddingY="50px"
      minHeight="100vh"
      width="100vw"
      background={backgroundColor}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default HomeSectionWrapper;
