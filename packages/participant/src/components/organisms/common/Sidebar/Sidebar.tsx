import { useState } from "react";
import { useColor, useDevice } from "hooks";

import { auth } from "@studyfind/firebase";

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
  links: LinkType[];
  [key: string]: any;
}

function Sidebar({ links, ...rest }: Props) {
  const [active, setActive] = useState(false);
  const { isPhone } = useDevice();

  const background = useColor("blue.900", "gray.900");
  const user = auth.getUser();

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
          <SidebarUser name={user?.displayName || ""} email={user?.email || ""} />
        </>
      )}
    </Flex>
  );
}

export default Sidebar;
