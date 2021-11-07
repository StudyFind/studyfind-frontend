import { useLocation } from "react-router-dom";
import { useColor } from "hooks";
import { Box, Grid } from "@chakra-ui/react";
import { FaSearch, FaClipboard, FaNewspaper, FaCalendarAlt } from "react-icons/fa";

import Sidebar from "components/organisms/common/Sidebar/Sidebar";
import Toolbar from "components/organisms/common/Toolbar/Toolbar";
import Router from "components/organisms/common/Router";

import FindStudies from "pages/Internal/FindStudies/FindStudies";
import YourStudies from "pages/Internal/YourStudies/YourStudies";
import ViewStudy from "pages/Internal/ViewStudy/ViewStudy";
import NewsFeed from "pages/Internal/NewsFeed/NewsFeed";
import Notifications from "./Notifications/Notifications";
import Schedule from "pages/Internal/Schedule/Schedule";
import Account from "pages/Internal/Account/Account";
import Feature from "pages/Internal/Support/Feature/Feature";
import Bug from "pages/Internal/Support/Bug/Bug";
import FAQs from "pages/Internal/Support/FAQs/FAQs";
import { createGlobalStyle } from "styled-components";

function Internal() {
  const location = useLocation();
  const background = useColor("white", "gray.800");

  const links = [
    { name: "Find Studies", path: "/find-studies", icon: <FaSearch /> },
    { name: "Your Studies", path: "/your-studies", icon: <FaClipboard /> },
    { name: "News Feed", path: "/news-feed", icon: <FaNewspaper /> },
    { name: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
  ];

  const page = location.pathname.split("/")[1];

  const heading = page
    .split("-")
    .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
    .join(" ");

  // const SIDEBAR_WIDTH = "275px";
  // const TOOLBAR_HEIGHT = "68px";

  return (
    <Grid flexDirection="row" templateColumns="275px 1px 1fr">
      <InternalGlobalStyle />
      <Box width="275px" height="100vh" position="fixed" left="0" top="0">
        <Sidebar name="Yohan Jhaveri" email="yohan@studyfind.org" links={links} />
      </Box>
      <Box
        background={background}
        width="calc(100vw - 275px)"
        height="68px"
        position="fixed"
        right="0"
        top="0"
        zIndex={100}
      >
        <Toolbar heading={heading} />
      </Box>
      <Box
        background={background}
        minHeight="calc(100vh - 68px)"
        width="calc(100vw - 275px)"
        marginLeft="275px"
        marginTop="68px"
        padding="20px"
      >
        <Router
          routes={[
            { path: "/find-studies", component: FindStudies },
            { path: "/your-studies", component: YourStudies },
            { path: "/view-study", component: ViewStudy },
            { path: "/news-feed", component: NewsFeed },
            { path: "/notifications", component: Notifications },
            { path: "/schedule", component: Schedule },
            { path: "/account/:tab", component: Account },
            { path: "/support/bug", component: Bug },
            { path: "/support/feature", component: Feature },
            { path: "/support/faqs", component: FAQs },
          ]}
          redirectTo="/find-studies"
        />
      </Box>
    </Grid>
  );
}

const InternalGlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
    height: 100%;
  }
  body {
    height: 100%;
    overflow: auto;
  }
`;

export default Internal;
