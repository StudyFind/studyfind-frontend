import { memo } from "react";
import { useColorModeValue } from "hooks";
import { Button } from "@chakra-ui/react";

interface Props {
  readonly children: string;
  readonly [key: string]: any;
}

export const SecondaryButton = memo(({ children, ...rest }: Props) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBackgroundColor = useColorModeValue("gray.100", "gray.800");

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
