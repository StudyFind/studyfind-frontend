import { memo } from "react";
import { useColorModeValue } from "hooks";
import { ColorScheme } from "types/global";
import { Text, Icon } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

interface Props {
  readonly children: React.ReactNode;
  readonly colorScheme: ColorScheme;
}

export const Disclaimer = memo(({ colorScheme = "red", children }: Props) => {
  const textColor = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.400`);
  const background = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.900`);

  return (
    <Text
      color={textColor}
      background={background}
      width="100%"
      padding="10px 15px"
      rounded="md"
      fontSize="sm"
      fontWeight="500"
      textAlign="center"
      borderWidth="1px"
      borderColor={textColor}
    >
      <Icon as={FaExclamationCircle} marginRight="5px" fontSize="12px" />
      {children}
    </Text>
  );
});
