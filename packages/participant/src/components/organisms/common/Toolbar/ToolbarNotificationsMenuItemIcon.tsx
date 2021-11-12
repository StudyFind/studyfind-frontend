import { useColor } from "hooks";
import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { ColorScheme } from "types/global";

interface Props {
  icon: IconType;
  colorScheme: ColorScheme;
}

function ToolbarNotificationsMenuItemIcon({ icon, colorScheme }: Props) {
  const iconColor = useColor(`${colorScheme}.400`, `${colorScheme}.400`);
  const backgroundColor = useColor(`${colorScheme}.100`, `${colorScheme}.900`);

  return (
    <Flex
      padding="10px"
      rounded="full"
      justify="center"
      align="center"
      background={backgroundColor}
    >
      <Icon as={icon} width="14px" height="14px" color={iconColor} />
    </Flex>
  );
}

export default ToolbarNotificationsMenuItemIcon;
