import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import { FaBell, FaUserCircle, FaSun, FaMoon, FaQuestionCircle } from "react-icons/fa";

import ToolbarLink from "./ToolbarLink";
import ToolbarSettingsMenu from "./ToolbarSettingsMenu";
import ToolbarAccountMenu from "./ToolbarAccountMenu";
import ToolbarSupportMenu from "./ToolbarSupportMenu";
import { useColor } from "hooks";

interface Props {
  heading: string;
  [key: string]: any;
}

function Toolbar({ heading, ...rest }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.800");

  const links = [
    {
      name: "mode",
      icon: colorMode === "light" ? <FaMoon /> : <FaSun />,
      onClick: toggleColorMode,
    },
    {
      name: "notifications",
      menu: <ToolbarSettingsMenu />,
      icon: <FaBell />,
    },
    {
      name: "account",
      menu: <ToolbarAccountMenu />,
      icon: <FaUserCircle />,
    },
    {
      name: "support",
      menu: <ToolbarSupportMenu />,
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <Flex
      height="100%"
      width="100%"
      padding="20px"
      justify="space-between"
      align="center"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      background={background}
    >
      <Heading fontSize="22px" color="teal.400">
        {heading}
      </Heading>
      <Flex justify="flex-end" align="center" gridGap="10px" {...rest}>
        {links.map((link, i) => (
          <ToolbarLink
            key={i}
            name={link.name}
            icon={link.icon}
            menu={link.menu}
            onClick={link.onClick}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default Toolbar;
