import React from "react";

import { useColor } from "hooks";
import { Box } from "@chakra-ui/react";

type Props = {
  readonly children: React.ReactNode;
  readonly [key: string]: any;
};

export const Card = React.memo(({ children, ...rest }: Props) => {
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");

  return (
    <Box
      rounded="md"
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
      {...rest}
    >
      {children}
    </Box>
  );
});
