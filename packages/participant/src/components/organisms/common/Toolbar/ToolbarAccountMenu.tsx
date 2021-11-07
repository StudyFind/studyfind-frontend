import { MenuList, Grid } from "@chakra-ui/react";
import { auth } from "@studyfind/firebase";
import { FaDoorOpen, FaShieldAlt, FaBell, FaMapMarkedAlt, FaUser } from "react-icons/fa";
import ToolbarAccountMenuItem from "./ToolbarAccountMenuItem";

function ToolbarAccountMenu() {
  const sublinks = [
    { name: "Profile", icon: FaUser, link: "/account/profile" },
    { name: "Notifications", icon: FaBell, link: "/account/notifications" },
    { name: "Timezone", icon: FaMapMarkedAlt, link: "/account/timezone" },
    { name: "Security", icon: FaShieldAlt, link: "/account/security" },
    { name: "Sign out", icon: FaDoorOpen, link: "", color: "red.400", onClick: auth.signout },
  ];

  return (
    <MenuList padding="10px" maxHeight="300px" overflowY="scroll">
      <Grid gap="6px">
        {sublinks.map((sublink, i) => (
          <ToolbarAccountMenuItem key={i} {...sublink} />
        ))}
      </Grid>
    </MenuList>
  );
}

export default ToolbarAccountMenu;
