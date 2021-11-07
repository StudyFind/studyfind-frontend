import { useColor, useDevice } from "hooks";

import { Box, Flex, HStack } from "@chakra-ui/react";

import AuthCard from "components/templates/External/Auth/AuthCard";
import ReturnHomeLink from "pages/External/ReturnHomeLink";

function Auth() {
  const background = useColor("white", "gray.900");
  const { isPhone } = useDevice();

  return (
    <Box height="100vh" background={background}>
      <HStack justify="flex-start" padding="30px">
        <ReturnHomeLink />
      </HStack>
      <Flex justify="center" align="center" padding={isPhone ? "50px 20px" : "50px 100px"}>
        <AuthCard />
      </Flex>
    </Box>
  );
}

export default Auth;
