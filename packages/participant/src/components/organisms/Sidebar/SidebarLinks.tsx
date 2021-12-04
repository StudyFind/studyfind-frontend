import { useColorModeValue } from "hooks";
import { useLocation } from "react-router-dom";

import { Link } from "components/atoms/Link/Link";
import { Grid, Flex } from "@chakra-ui/react";

interface LinkType {
  icon: React.ReactElement;
  name: string;
  path: string;
}

interface Props {
  links: LinkType[];
}

function SidebarLinks({ links }: Props) {
  const { pathname } = useLocation();

  const isSelected = (path: string) => {
    const pagename = path.split("/")[1];
    const truename = pathname.split("/")[1];
    return pagename === truename;
  };

  const linkColor = useColorModeValue("gray.400", "gray.500");

  return (
    <Grid marginBottom="auto">
      {links.map((link, i) => (
        <Link key={i} to={link.path} isWrapper>
          <Flex
            padding="20px"
            align="center"
            gridGap="12px"
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "white" }}
            color={isSelected(link.path) ? "white" : linkColor}
            background={isSelected(link.path) ? "rgb(0, 0, 0, 0.25)" : ""}
          >
            {link.icon}
            {link.name}
          </Flex>
        </Link>
      ))}
    </Grid>
  );
}

export default SidebarLinks;
