import { useColor } from "hooks";
import { Box, Flex } from "@chakra-ui/react";

type Tab = "login" | "signup" | "forgotPassword";

type TabData = {
  value: Tab;
  label: string;
};

interface Props {
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function AuthTabs({ tab, setTab }: Props) {
  const tabs: TabData[] = [
    { value: "signup", label: "Sign up" },
    { value: "login", label: "Login" },
  ];

  const borderBottomColor = useColor("gray.200", "gray.700");
  const activeBorderBottomColor = useColor("blue.500", "blue.400");

  return (
    <Flex>
      {tabs.map((t) => (
        <Box
          key={t.value}
          as="button"
          flex="1"
          padding="1rem 0.75rem"
          fontWeight="600"
          color={t.value === tab ? "blue.400" : "gray.500"}
          marginBottom={t.value === tab ? "-1px" : "0"}
          borderBottomWidth={t.value === tab ? "3px" : "1px"}
          borderBottomColor={t.value === tab ? activeBorderBottomColor : borderBottomColor}
          onClick={() => setTab(t.value)}
        >
          {t.label}
        </Box>
      ))}
    </Flex>
  );
}

export default AuthTabs;
