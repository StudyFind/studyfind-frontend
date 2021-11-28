import React from "react";
import { useColorModeValue, useClipboard } from "hooks";
import { Button } from "@chakra-ui/react";
import { FaCopy, FaCheckCircle } from "react-icons/fa";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";

interface Props {
  readonly children: string;
  readonly copiedValue: string;
  readonly buttonTextOnCopied?: string;
}

export const ClipboardButton = React.memo(
  ({ children, copiedValue, buttonTextOnCopied }: Props) => {
    const { hasCopied, onCopy } = useClipboard(copiedValue);

    const defaultBackground = useColorModeValue("gray.100", "gray.800");
    const defaultHover = { background: defaultBackground };
    const defaultActive = { background: defaultBackground };

    const copiedBorderColor = useColorModeValue("green.200", "green.700");
    const copiedBackground = useColorModeValue("green.100", "green.800");
    const copiedHover = { background: copiedBackground };
    const copiedActive = { background: copiedBackground };

    if (hasCopied) {
      return (
        <Button
          variant="outline"
          colorScheme="green"
          background={copiedBackground}
          borderColor={copiedBorderColor}
          _hover={copiedHover}
          _active={copiedActive}
          leftIcon={<FaCheckCircle />}
          onClick={onCopy}
        >
          {buttonTextOnCopied || children}
        </Button>
      );
    }

    return (
      <SecondaryButton
        leftIcon={<FaCopy />}
        onClick={onCopy}
        _hover={defaultHover}
        _active={defaultActive}
      >
        {children}
      </SecondaryButton>
    );
  }
);
