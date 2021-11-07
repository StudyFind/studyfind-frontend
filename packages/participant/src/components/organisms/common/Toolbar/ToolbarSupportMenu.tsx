import { MenuList, Grid } from "@chakra-ui/react";
import { FaBug, FaLightbulb, FaQuestion } from "react-icons/fa";
import ToolbarSupportMenuItem from "./ToolbarSupportMenuItem";

function ToolbarSupportMenu() {
  const sublinks = [
    { name: "Report a bug", icon: FaBug, link: "/support/bug" },
    { name: "Suggest a feature", icon: FaLightbulb, link: "/support/feature" },
    { name: "FAQs", icon: FaQuestion, link: "/support/faqs" },
  ];

  return (
    <MenuList padding="10px" maxHeight="300px" overflowY="scroll">
      <Grid gap="6px">
        {sublinks.map((sublink, i) => (
          <ToolbarSupportMenuItem key={i} {...sublink} />
        ))}
      </Grid>
    </MenuList>
  );
}

export default ToolbarSupportMenu;
