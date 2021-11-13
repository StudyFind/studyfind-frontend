import { useColor } from "hooks";

import { Flex, Heading } from "@chakra-ui/react";

import ToolbarNotifications from "./ToolbarNotifications/ToolbarNotifications";
import ToolbarAccount from "./ToolbarAccount/ToolbarAccount";
import ToolbarSupport from "./ToolbarSupport/ToolbarSupport";

interface Props {
  heading: string;
  [key: string]: any;
}

function Toolbar({ heading, ...rest }: Props) {
  const borderColor = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.800");

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
        <ToolbarSupport />
        <ToolbarAccount />
        <ToolbarNotifications />
      </Flex>
    </Flex>
  );
}

export default Toolbar;
