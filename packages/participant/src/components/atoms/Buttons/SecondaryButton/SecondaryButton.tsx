import { useColor } from "hooks";
import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  readonly children: string;
  readonly [key: string]: any;
};

export const SecondaryButton = React.memo(({ children, ...rest }: Props) => {
  const borderColor = useColor("gray.200", "gray.700");
  const hoverBackgroundColor = useColor("gray.100", "gray.800");

  return (
    <Button
      variant="outline"
      color="gray.500"
      borderColor={borderColor}
      _hover={{ background: hoverBackgroundColor }}
      {...rest}
    >
      {children}
    </Button>
  );
});
