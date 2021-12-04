import { useState } from "react";
import { useColorModeValue, useDevice } from "hooks";

import { Flex } from "@chakra-ui/react";

import SidebarLogo from "./SidebarLogo";
import SidebarLinks from "./SidebarLinks";
import SidebarUser from "./SidebarUser";

interface LinkType {
  icon: React.ReactElement;
  name: string;
  path: string;
}

interface Props {
  name: string | null;
  email: string | null;
  links: LinkType[];
  [key: string]: any;
}

function Sidebar({ name, email, links, ...rest }: Props) {
  const { isPhone } = useDevice();

  const [active, setActive] = useState(false);

  const background = useColorModeValue("blue.900", "gray.900");

  const toggleActive = () => {
    if (isPhone) {
      setActive((prev) => !prev);
    }
  };

  return (
    <Flex
      height={active ? "100vh" : "100%"}
      width="100%"
      direction="column"
      background={background}
      borderRightWidth={isPhone ? "" : "1px"}
      borderRightColor={isPhone ? "" : "gray.700"}
      borderBottomWidth={isPhone ? "1px" : ""}
      borderBottomColor={isPhone ? "gray.700" : ""}
      {...rest}
    >
      <SidebarLogo isPhone={isPhone} active={active} toggleActive={toggleActive} />
      {(!isPhone || active) && (
        <>
          <SidebarLinks links={links} />
          <SidebarUser name={name || ""} email={email || ""} />
        </>
      )}
    </Flex>
  );
}

export default Sidebar;
