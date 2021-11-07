import { useColor } from "hooks";

import { Flex } from "@chakra-ui/react";

import SidebarLogo from "./SidebarLogo";
import SidebarLinks from "./SidebarLinks";
import SidebarUser from "./SidebarUser";
import { auth } from "@studyfind/firebase";

interface LinkType {
  icon: React.ReactElement;
  name: string;
  path: string;
}

interface Props {
  name: string;
  email: string;
  links: LinkType[];
  [key: string]: any;
}

function Sidebar({ name, email, links, ...rest }: Props) {
  const background = useColor("blue.900", "gray.900");
  const user = auth.getUser();

  return (
    <Flex
      height="100%"
      width="100%"
      direction="column"
      background={background}
      borderRightWidth="1px"
      borderRightColor="gray.700"
      {...rest}
    >
      <SidebarLogo />
      <>
        <SidebarLinks links={links} />
        <SidebarUser name={user?.displayName || ""} email={user?.email || ""} />
      </>
    </Flex>
  );
}

export default Sidebar;
