import { useColorModeValue } from "hooks";
import { Box, Icon, Menu, MenuButton, IconButton } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

interface Props {
  name: string;
  icon: React.ReactElement;
  menu?: React.ReactNode;
  showAlert?: boolean;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  onClick?: React.MouseEventHandler;
}

function ToolbarLink({ name, icon, menu, showAlert, isOpen, onOpen, onClose, onClick }: Props) {
  const background = useColorModeValue("transparent", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const borderWidth = useColorModeValue("1px", "0");
  const color = useColorModeValue("gray.400", "gray.500");

  const extra =
    isOpen || onOpen || onClose !== undefined
      ? {
          isOpen,
          onOpen,
          onClose,
        }
      : {};

  return (
    <Menu boundary="scrollParent" closeOnSelect onOpen={onOpen} onClose={onClose} {...extra}>
      <Box position="relative">
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
        {showAlert && (
          <Icon
            as={FaCircle}
            position="absolute"
            fontSize="10px"
            color="red.500"
            zIndex="2"
            right="1px"
            top="3px"
          />
        )}
      </Box>
      {menu}
    </Menu>
  );
}

export default ToolbarLink;
