import { MenuList, Grid } from "@chakra-ui/react";
import { FaBell, FaMapMarkedAlt } from "react-icons/fa";
import ToolbarSettingsMenuItem from "./ToolbarSettingsMenuItem";

function ToolbarSettingsMenu() {
  const sublinks = [
    { name: "Notifications", icon: FaBell, link: "/account/notifications" },
    { name: "Timezone", icon: FaMapMarkedAlt, link: "/account/timezone" },
  ];

  return (
    <MenuList padding="10px" maxHeight="300px" overflowY="scroll">
      <Grid gap="6px">
        {sublinks.map((sublink, i) => (
          <ToolbarSettingsMenuItem key={i} {...sublink} />
        ))}
      </Grid>
    </MenuList>
  );
}

export default ToolbarSettingsMenu;
