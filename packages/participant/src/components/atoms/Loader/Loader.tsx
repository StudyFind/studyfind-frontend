import React from "react";

import { useColor } from "hooks";
import { Flex, Spinner } from "@chakra-ui/react";
import { ColorScheme } from "types/global";

type Props = {
  size?: string;
  colorScheme?: ColorScheme;
  [key: string]: any;
};

export const Loader = React.memo(
  ({ size = "lg", colorScheme = "blue", ...rest }: Props) => {
    const thickness = ["xs", "sm", "md", "lg", "xl"].indexOf(size) + 1;

    const filledColor = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
    const emptyColor = useColor("gray.200", "gray.700");

    return (
      <Flex justify="center" align="center" width="100%" {...rest}>
        <Spinner
          speed="0.5s"
          color={filledColor}
          emptyColor={emptyColor}
          thickness={thickness + "px"}
          size={size}
        />
      </Flex>
    );
  }
);
