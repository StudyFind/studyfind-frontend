import React from "react";
import { useColorModeValue } from "hooks";
import { IconButton } from "@chakra-ui/react";

interface Props {
  icon: React.ReactElement;
  onClick: () => void;
}

function CalendarHeadButton({ icon, onClick }: Props) {
  const color = useColorModeValue("blue.500", "blue.200");
  const background = useColorModeValue("blue.100", "rgba(144, 205, 244, 0.16)");

  return (
    <IconButton
      color={color}
      background={background}
      size="xs"
      icon={icon}
      onClick={onClick}
      aria-label="icon"
    />
  );
}

export default CalendarHeadButton;
