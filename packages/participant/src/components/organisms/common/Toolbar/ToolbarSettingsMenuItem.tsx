import { useColor } from "hooks";
import { MenuItem, Text, Icon } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  name: string;
  link: string;
}

function ToolbarSettingsMenuItem({ icon, name, link }: Props) {
  const borderColor = useColor("gray.200", "gray.700");
  const hoverBackground = useColor("gray.200", "gray.800");
  const activeBackground = useColor("gray.300", "gray.700");

  const styles = {
    color: "gray.400",
    background: "transparent",
    borderColor,
    _hover: { bg: hoverBackground },
    _active: { bg: activeBackground },
  };

  return (
    <MenuItem
      as={Link}
      to={link}
      display="flex"
      borderRadius="4px"
      padding="8px 12px"
      justifyContent="flex-start"
      alignItems="center"
      gridGap="10px"
      fontWeight="500"
      {...styles}
    >
      <Icon as={icon} />
      <Text marginLeft="4px">{name}</Text>
    </MenuItem>
  );
}

export default ToolbarSettingsMenuItem;
