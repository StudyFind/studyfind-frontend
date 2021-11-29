import { memo } from "react";
import { useColorModeValue } from "hooks";
import { Button } from "@chakra-ui/react";
import { ButtonClickEventHandler, ColorScheme } from "types/global";

interface Props {
  readonly icon?: React.ReactElement;
  readonly children: React.ReactNode;
  readonly colorScheme?: ColorScheme;
  readonly onClick?: ButtonClickEventHandler;
}

export const EditorButton = memo(
  ({ children, icon, colorScheme = "gray", onClick = () => {} }: Props) => {
    const colorText = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.400`);
    const colorBack = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.900`);
    const colorHover = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.800`);
    const colorBorder = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.400`);

    return (
      <Button
        size="sm"
        leftIcon={icon}
        background={colorBack}
        color={colorText}
        borderWidth="1px"
        borderColor={colorBorder}
        _hover={{ bg: colorHover }}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
