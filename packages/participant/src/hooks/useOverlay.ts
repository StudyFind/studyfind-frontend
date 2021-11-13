import { useState } from "react";

interface Props {
  initial?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

function useOverlay({ initial = false, onOpen = () => {}, onClose = () => {} }: Props) {
  const [isOpen, setIsOpen] = useState(initial);

  const handleOpen = () => {
    onOpen();
    setIsOpen(true);
  };

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  return { isOpen, handleOpen, handleClose };
}

export default useOverlay;
