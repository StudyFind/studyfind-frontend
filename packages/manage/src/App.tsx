import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Message } from "components";
import { theme } from "constants/theme";

import ResetPassword from "pages/ResetPassword";
import VerifyEmail from "pages/VerifyEmail";

function App() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode") || "";
  const code = params.get("oobCode") || "";

  const render = () => {
    if (!mode) {
      return (
        <Message
          status="failure"
          title="404 Error"
          description="The action you want to perform could not be found"
        />
      );
    }

    if (!code) {
      return (
        <Message
          status="failure"
          title="400 Error"
          description="The action code is missing from your link"
        />
      );
    }

    return mode === "resetPassword" ? <ResetPassword code={code} /> : <VerifyEmail code={code} />;
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex height="100vh" width="100vw" justify="center" align="center">
        {render()}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
