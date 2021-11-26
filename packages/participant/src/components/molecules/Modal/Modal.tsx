import React from "react";

import { useColorModeValue } from "hooks";
import { AlertDialog, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

function Modal({ children, open, handleClose, ...rest }: Props) {
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <AlertDialog
      isCentered
      isOpen={open}
      onClose={handleClose}
      motionPreset="scale"
      leastDestructiveRef={undefined}
    >
      <AlertDialogOverlay onClick={handleClose} background="rgb(0, 0, 0, 0.75)">
        <AlertDialogContent background={backgroundColor} {...rest}>
          {children}
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Modal;
