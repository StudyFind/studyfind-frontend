import { MenuList, Grid } from "@chakra-ui/react";
import { auth } from "@studyfind/firebase";
import {
  FaDoorOpen,
  FaShieldAlt,
  FaBell,
  FaMapMarkedAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

import ToolbarLink from "../ToolbarLink";
import ToolbarAccountItem from "./ToolbarAccountItem";

function ToolbarAccount() {
  const sublinks = [
    { name: "Profile", icon: FaUser, link: "/account/profile" },
    { name: "Notifications", icon: FaBell, link: "/account/notifications" },
    { name: "Timezone", icon: FaMapMarkedAlt, link: "/account/timezone" },
    { name: "Security", icon: FaShieldAlt, link: "/account/security" },
    { name: "Sign out", icon: FaDoorOpen, link: "", color: "red.400", onClick: auth.signout },
  ];

  const MENU = (
    <MenuList padding="10px" maxHeight="300px" overflowY="scroll">
      <Grid gap="6px">
        {sublinks.map((sublink, i) => (
          <ToolbarAccountItem key={i} {...sublink} />
        ))}
      </Grid>
    </MenuList>
  );

  return <ToolbarLink name="account" icon={<FaUserCircle />} menu={MENU} />;
}

export default ToolbarAccount;
