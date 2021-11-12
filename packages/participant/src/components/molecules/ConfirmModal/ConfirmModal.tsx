import React, { useState } from "react";
import { useColor } from "hooks";

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import { SecondaryButton } from "../../atoms/Buttons/SecondaryButton/SecondaryButton";
import { ColorScheme } from "types/global";

interface Props {
  open: boolean;
  title: string;
  description: string;
  colorScheme: ColorScheme;
  buttonText: string;
  handleClose: () => void;
  handleConfirm: () => Promise<any>;
}

function ConfirmModal({
  open,
  title,
  description,
  colorScheme,
  buttonText,
  handleClose,
  handleConfirm, // `handleConfirm` needs to be a promise!
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    return handleConfirm().finally(() => {
      handleClose();
      setLoading(false);
    });
  };

  const textColor = useColor("gray.500", "gray.400");
  const backgroundColor = useColor("white", "gray.800");

  return (
    <AlertDialog
      size="lg"
      motionPreset="scale"
      isCentered
      isOpen={open}
      onClose={loading ? () => {} : handleClose}
      leastDestructiveRef={undefined}
    >
      <AlertDialogOverlay background="rgb(0, 0, 0, 0.75)">
        <AlertDialogContent background={backgroundColor}>
          <Box padding="20px" width="100%">
            <Heading fontSize="lg" marginBottom="8px">
              {title}
            </Heading>
            <Text color={textColor}>{description}</Text>
            <Flex marginTop="24px" gridGap="10px" justify="flex-end">
              <SecondaryButton isDisabled={loading} onClick={handleClose}>
                Cancel
              </SecondaryButton>
              <Button
                colorScheme={colorScheme}
                isLoading={loading}
                loadingText={buttonText}
                onClick={handleSubmit}
              >
                {buttonText}
              </Button>
            </Flex>
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ConfirmModal;
