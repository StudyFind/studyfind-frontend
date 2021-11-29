import { memo } from "react";
import { useColorModeValue, useDevice } from "hooks";
import { Box } from "@chakra-ui/react";
import { Loader } from "../Loader/Loader";

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

export const Page = memo(({ isLoading, children, ...rest }: Props) => {
  const { isPhone } = useDevice();

  const background = useColorModeValue("#f8f9fa", "gray.800");

  return (
    <Box background={background} padding={isPhone ? "20px" : "40px"} {...rest}>
      {isLoading ? <Loader height={`calc(100vh - ${isPhone ? 40 : 80}px)`} /> : children}
    </Box>
  );
});
