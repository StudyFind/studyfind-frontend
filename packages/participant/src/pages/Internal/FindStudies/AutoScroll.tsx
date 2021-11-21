import { FaArrowUp } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { useWindowSize } from "react-use";

interface Props {
  onClick: () => void;
}

function AutoScroll({ onClick }: Props) {
  const { height } = useWindowSize();

  return (
    <IconButton
      onClick={onClick}
      display={height > 100 ? "flex" : "none"}
      position="fixed"
      right="16px"
      bottom="16px"
      opacity="0.7"
      _hover={{ opacity: "1" }}
      colorScheme="blue"
      icon={<FaArrowUp />}
      aria-label="Autoscroll to top"
    />
  );
}

export default AutoScroll;
