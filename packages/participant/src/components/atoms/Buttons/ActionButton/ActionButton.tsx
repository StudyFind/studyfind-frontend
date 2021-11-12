import React from "react";
import { Tooltip, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ButtonClickEventHandler } from "types/global";

interface Props {
  readonly icon: React.ReactElement;
  readonly hint?: string;
  readonly size?: string;
  readonly colorScheme?: string;
  readonly onClick?: ButtonClickEventHandler;
}

type ColorSet = {
  readonly color: string;
  readonly background: string;
  readonly _hover: { background: string };
  readonly _active: { background: string };
};

export const ActionButton = React.memo(
  ({ icon, hint, size = "sm", colorScheme, onClick = () => {} }: Props) => {
    const defaultColor = useColorModeValue("gray.500", "gray.500");
    const defaultBackground = useColorModeValue("transparent", "transparent");
    const defaultHoverBackground = useColorModeValue("gray.100", "gray.900");
    const defaultActiveBackground = useColorModeValue("gray.200", "gray.800");

    const defaultColors: ColorSet = {
      color: defaultColor,
      background: defaultBackground,
      _hover: { background: defaultHoverBackground },
      _active: { background: defaultActiveBackground },
    };

    const schemedColor = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.400`);
    const schemedBackground = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.900`);
    const schemedHoverBackground = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.800`);
    const schemedActiveBackground = useColorModeValue(`${colorScheme}.300`, `${colorScheme}.700`);

    const schemedColors: ColorSet = {
      color: schemedColor,
      background: schemedBackground,
      _hover: { background: schemedHoverBackground },
      _active: { background: schemedActiveBackground },
    };

    const colors = colorScheme ? schemedColors : defaultColors;

    return (
      <Tooltip label={hint}>
        <IconButton
          aria-label={hint || "Action Button"}
          size={size}
          icon={icon}
          onClick={onClick}
          {...colors}
        />
      </Tooltip>
    );
  }
);
