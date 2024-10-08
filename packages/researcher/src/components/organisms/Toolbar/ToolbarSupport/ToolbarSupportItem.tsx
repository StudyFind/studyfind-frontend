import { useColorModeValue } from "hooks";
import { MenuItem, Text, Icon, Button } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  name: string;
  link?: string;
  [key: string]: any;
}

function ToolbarSupportItem({ icon, name, link, ...rest }: Props) {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBackground = useColorModeValue("gray.200", "gray.800");
  const activeBackground = useColorModeValue("gray.300", "gray.700");

  const styles = {
    color: "gray.400",
    background: "transparent",
    borderColor,
    _hover: { bg: hoverBackground },
    _active: { bg: activeBackground },
  };

  return (
    <MenuItem
      as={link ? Link : Button}
      to={link}
      display="flex"
      borderRadius="4px"
      padding="8px 12px"
      justifyContent="flex-start"
      alignItems="center"
      gridGap="10px"
      fontWeight="500"
      _focus={{ boxShadow: "none" }}
      {...styles}
      {...rest}
    >
      <Icon as={icon} />
      <Text marginLeft="4px">{name}</Text>
    </MenuItem>
  );
}

export default ToolbarSupportItem;
