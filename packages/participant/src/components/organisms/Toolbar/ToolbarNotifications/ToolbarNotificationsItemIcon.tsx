import { useColorModeValue } from "hooks";
import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { ColorScheme } from "types/global";

interface Props {
  icon: IconType;
  colorScheme: ColorScheme;
}

function ToolbarNotificationsItemIcon({ icon, colorScheme }: Props) {
  const iconColor = useColorModeValue(`${colorScheme}.400`, `${colorScheme}.400`);
  const borderColor = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.700`);
  const backgroundColor = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.900`);

  return (
    <Flex
      padding="10px"
      rounded="full"
      justify="center"
      align="center"
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
    >
      <Icon as={icon} width="14px" height="14px" color={iconColor} />
    </Flex>
  );
}

export default ToolbarNotificationsItemIcon;
