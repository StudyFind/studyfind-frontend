import { useState } from "react";
import { useColor, useDevice } from "hooks";

import { Box } from "@chakra-ui/react";

import AuthTabs from "./AuthTabs";
import AuthForm from "./AuthForm";

type Tab = "login" | "signup" | "forgotPassword";

function AuthCard() {
  const exists = localStorage.getItem("exists");
  const defaultTab = exists === "true" ? "login" : "signup";
  const [tab, setTab] = useState<Tab>(defaultTab);

  const { isPhone } = useDevice();

  const background = useColor("#f8f9fa", "gray.800");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Box
      width={isPhone ? "100%" : "350px"}
      rounded="md"
      borderWidth="1px"
      borderColor={borderColor}
      background={background}
    >
      <AuthTabs tab={tab} setTab={setTab} />
      <AuthForm tab={tab} setTab={setTab} />
    </Box>
  );
}

export default AuthCard;
