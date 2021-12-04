import { MenuList, Grid } from "@chakra-ui/react";
import { FaBug, FaLightbulb, FaQuestion, FaQuestionCircle } from "react-icons/fa";

import ToolbarLink from "../ToolbarLink";
import ToolbarSupportItem from "./ToolbarSupportItem";

function ToolbarSupport() {
  const sublinks = [
    { name: "Report a bug", icon: FaBug, link: "/support/bug" },
    { name: "Suggest a feature", icon: FaLightbulb, link: "/support/feature" },
    { name: "FAQs", icon: FaQuestion, link: "/support/faqs" },
  ];

  const MENU = (
    <MenuList padding="10px" maxHeight="300px" overflowY="scroll">
      <Grid gap="6px">
        {sublinks.map((sublink, i) => (
          <ToolbarSupportItem key={i} {...sublink} />
        ))}
      </Grid>
    </MenuList>
  );

  return <ToolbarLink name="support" icon={<FaQuestionCircle />} menu={MENU} />;
}

export default ToolbarSupport;
