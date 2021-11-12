import React from "react";
import { useColor } from "hooks";
import { Flex, Icon, Tooltip } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { ColorScheme } from "types/global";

interface Props {
  label: string;
  icon?: IconType;
  colorScheme?: ColorScheme;
}

export const Hint = React.memo(
  ({ label, icon = FaExclamationCircle, colorScheme = "gray" }: Props) => {
    const tooltipBackground = useColor("gray.700", `${colorScheme}.400`);

    return (
      <Tooltip label={label} background={tooltipBackground}>
        <Flex align="center">
          <Icon color={`${colorScheme}.400`} as={icon} />
        </Flex>
      </Tooltip>
    );
  }
);
