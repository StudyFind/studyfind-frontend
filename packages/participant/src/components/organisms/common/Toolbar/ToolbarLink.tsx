import { useColor } from "hooks";
import { Menu, MenuButton, IconButton } from "@chakra-ui/react";

interface Props {
  name: string;
  icon: React.ReactElement;
  menu?: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

function ToolbarLink({ name, icon, menu, onClick }: Props) {
  const background = useColor("transparent", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");
  const borderWidth = useColor("1px", "0");
  const color = useColor("gray.400", "gray.500");

  return (
    <Menu boundary="scrollParent" closeOnSelect>
      <MenuButton
        as={IconButton}
        icon={icon}
        color={color}
        aria-label={name}
        borderRadius="50px"
        borderColor={borderColor}
        borderWidth={borderWidth}
        background={background}
        _hover={{ background }}
        _focus={{ background }}
        _active={{ background }}
        onClick={onClick}
      />
      {menu}
    </Menu>
  );
}

export default ToolbarLink;
