import { BrowserRouter } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { services } from "@studyfind/firebase";

import External from "pages/External/External";
import Internal from "pages/Internal/Internal";

import Loading from "./Loading";
import { useEffect } from "react";

function App() {
  const [cred, loading] = useAuthState(services.auth);

  const theme = extendTheme({
    config: {
      useSystemColorMode: true,
      initialColorMode: "dark",
    },
  });

  useEffect(() => {
    const externalPaths = ["", "/", "/auth", "/team"];
    const currentPath = window.location.pathname;

    localStorage.removeItem("redirect");

    if (!cred && !externalPaths.includes(currentPath)) {
      localStorage.setItem("redirect", currentPath);
    }
  }, [cred]);

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {loading ? <Loading /> : cred ? <Internal /> : <External />}
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
