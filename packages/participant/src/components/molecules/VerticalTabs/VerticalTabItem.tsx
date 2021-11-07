import React from "react";
import { useColor } from "hooks";
import { Button, Text } from "@chakra-ui/react";

type Props = {
  icon?: React.ReactElement;
  name: string;
  selected: boolean;
  showBorder: boolean;
  onClick: () => void;
};

function VerticalTabItem({ icon, name, selected, showBorder, onClick }: Props) {
  const borderColor = useColor("gray.200", "gray.700");
  const hoverBackground = useColor("gray.200", "gray.800");
  const activeBackground = useColor("gray.300", "gray.700");

  const selectedStyles = {
    color: "white",
    background: "blue.500",
    borderColor: "blue.500",
    _hover: { bg: "blue.500" },
    _active: { bg: "blue.500" },
  };

  const defaultStyles = {
    color: "gray.500",
    background: "transparent",
    borderColor,
    _hover: { bg: hoverBackground },
    _active: { bg: activeBackground },
  };

  const styles = selected ? selectedStyles : defaultStyles;

  return (
    <Button
      className="tab-item"
      textTransform="capitalize"
      justifyContent="flex-start"
      borderWidth={showBorder ? "1px" : undefined}
      leftIcon={icon}
      onClick={onClick}
      {...styles}
    >
      <Text marginLeft="4px">{name}</Text>
    </Button>
  );
}

export default VerticalTabItem;
